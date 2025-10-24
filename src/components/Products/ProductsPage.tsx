import { ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import PhoneNumberModal from "./PhoneNumberModal";
import emailjs from 'emailjs-com';
import { toast } from "../ui/use-toast";

interface Product {
  Description: any;
  MoreDescriptionText: string;
  MoreDescriptionHTML: string;
  id: string;
  name: string;
  TableDescription: string;
  ParagraphDescription: string;
  divDescription: string;
  image?: string;
}

interface ProductData {
  [category: string]: Product[];
}

const ProductsPage = () => {
  const [productData, setProductData] = useState<ProductData>({});
  const [categories, setCategories] = useState<string[]>([]);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
const [showScrollButton, setShowScrollButton] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isUnlockedGlobally, setIsUnlockedGlobally] = useState(false);

  const handleReadMore = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  const handleModalSubmit = (phoneNumber: string) => {
    if (selectedProduct) {
      const templateParams = {
        product: selectedProduct?.name?.replace(/<[^>]*>/g, '')?.trim(),
        phone: phoneNumber,
      };

      emailjs.send(
        'service_9f3gre7',
        'template_u7w6ecp',
        templateParams,
        'gEoEzEVindFqGKHWm'
      )
        .then((response) => {
          toast({
            title: "Unlocked Successfully ✅",
            description: "Product has been unlocked successfully.",
          });
          console.log('SUCCESS!', response.status, response.text);
          setIsUnlockedGlobally(true);
          localStorage.setItem('isUnlockedGlobally', 'true');
          handleModalClose();
        })
        .catch((err) => {
          console.log('FAILED...', err);
          toast({
            title: "Unlocked Successfully ✅",
            description: "Product has been unlocked successfully.",
          });
          setIsUnlockedGlobally(true);
          localStorage.setItem('isUnlockedGlobally', 'true');
          handleModalClose();
        });
    }
  };

  useEffect(() => {
    headerRef.current = document.querySelector("header");

    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data: ProductData = await response.json();
        setProductData(data);
        const categoryKeys = Object.keys(data);
        setCategories(categoryKeys);
        if (categoryKeys.length > 0) {
          setOpenCategory(categoryKeys[0]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const unlocked = localStorage.getItem("isUnlockedGlobally");
    if (unlocked === "true") {
      setIsUnlockedGlobally(true);
    }

    const hash = window.location.hash.substring(1);
    if (hash && categories.length > 0) {
      const categoryElement = categoryRefs.current[hash];
      if (categoryElement) {
        const headerHeight = headerRef.current?.offsetHeight || 80;
        const elementPosition = categoryElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [categories]);

  const getProductImage = (name: string, category: string) => {
    if (!name) {
      return "https://via.placeholder.com/400x300.png?text=No+Image";
    }
    const cleanName = name.replace(/<\/?[^>]+(>|$)/g, "").trim();
    // Start by trying the .png extension
  const imagePath = `/assets/All_product_images/${category}/${encodeURIComponent(cleanName)}.png`; // Assuming .png, adjust if needed
    return imagePath;
  };

  const handleCategoryToggle = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleProductClick = (productId: string) => {
    const productElement = productRefs.current[productId];
    if (productElement) {
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const elementPosition = productElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading products...</div>;
  }

  return (
    <div className="container mx-auto p-4 lg:py-8">
      <div className="flex flex-col lg:flex-row gap-8">
<aside className="w-full lg:w-1/4 h-fit lg:sticky lg:top-20 self-start bg-green-500 shadow-lg">
  <h2 className="bg-[#7ea028] text-white text-lg font-semibold py-3 px-4 uppercase">
    Our Products
  </h2>
  <ul className="flex flex-col">
    {categories.map((category) => (
      <li key={category} className="border-b border-[#90a52d]">
        <button
          onClick={() => handleCategoryToggle(category)}
          className={`w-full text-left px-4 py-2 text-white text-sm font-medium hover:bg-[#f37021] transition-all duration-200 ${
            openCategory === category ? "bg-[#f37021]" : "bg-[#a7bf3a]"
          }`}
        >
          {category}
        </button>

        {openCategory === category && (
          <ul className="bg-[#d9e89b] pl-6 py-2 space-y-1">
            {productData[category].map((product) => (
              <li key={product.id}>
                <button
                  onClick={() => handleProductClick(product.id)}
                  className="w-full text-left px-2 py-1 text-[#333] text-sm hover:bg-[#f5f5f5] rounded-sm"
                >
                  {product.name && (
                    <div
                      dangerouslySetInnerHTML={{ __html: product.name }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
</aside>


        <main className="w-full lg:w-3/4">
          {categories.map((category) => (
            <div
              key={category}
              className="mb-12"
              ref={(el) =>
                (categoryRefs.current[
                  category
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")
                ] = el)
              }
            >
              <h1 className="text-3xl font-bold mb-6 sticky top-20 bg-white py-2 z-10">
                {category}
              </h1>
              <div className="space-y-8">
                {productData[category].map((product) => (
                  <div
                    key={product.id}
                    ref={(el) => (productRefs.current[product.id] = el)}
                    className="bg-white rounded-lg shadow-md overflow-hidden p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={getProductImage(product.name, category)}
                        alt={product.name?.replace(/<[^>]+>/g, "")}
                        loading="lazy"
                        className="w-full  md:w-1/3 h-80 object-cover rounded-lg"
                        // **FIX**: Added onError to try different extensions
                        onError={(e) => {
                          const target = e.currentTarget;
                          const currentSrc = target.src;
                          const placeholder = "https://via.placeholder.com/400x300.png?text=No+Image";
                          
                          // If .png fails, try .jpg
                          if (currentSrc.endsWith(".png")) {
                            target.src = currentSrc.replace(".png", ".jpg");
                          } 
                          // If .jpg fails, try .jpeg
                          else if (currentSrc.endsWith(".jpg")) {
                            target.src = currentSrc.replace(".jpg", ".jpeg");
                          } 
                          // If all fail, use the placeholder
                          else {
                            target.onerror = null; // Prevent infinite loops
                            target.src = placeholder;
                          }
                        }}
                      />
                      <div className="w-full md:w-2/3">
                        {product.name && (
                          <div
                            className="text-2xl font-bold mb-4"
                            dangerouslySetInnerHTML={{ __html: product.name }}
                          />
                        )}
                        <div className="prose max-w-none">
                          {product.TableDescription && (
                            <div
                              className="my-2"
                              dangerouslySetInnerHTML={{
                                __html: product.TableDescription,
                              }}
                            />
                          )}
                          {product.ParagraphDescription && (
                            <div
                              className="my-2"
                              dangerouslySetInnerHTML={{
                                __html: product.ParagraphDescription,
                              }}
                            />
                          )}
                          {product.Description && (
                            <div className="relative">
                              <div
                                className={`my-2 ${
                                  isUnlockedGlobally ? '' : 'blur-sm'
                                }`}
                                dangerouslySetInnerHTML={{
                                  __html: product.Description,
                                }}
                              />
                              {!isUnlockedGlobally && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <button
                                    onClick={() => handleReadMore(product)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                  >
                                    Read More
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href={`https://wa.me/+918989496905?text=I%20want%20to%20buy%20${
                          encodeURIComponent(product.name.replace(/<[^>]*>/g, '').trim())
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>

      {selectedProduct && (
        <PhoneNumberModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
          productName={selectedProduct.name}
        />
      )}
      {showScrollButton && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-3xl shadow-lg transition-all duration-300"
    aria-label="Scroll to top"
  >
    ↑
  </button>
)}

    </div>
  );
};

export default ProductsPage;