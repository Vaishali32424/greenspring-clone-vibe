import { ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import PhoneNumberModal from "./PhoneNumberModal";
import emailjs from 'emailjs-com';
import { toast } from "../ui/use-toast";
// Define the structure of a product based on your products.json
interface Product {
  Description: any;
  MoreDescriptionText: string;
  MoreDescriptionHTML: string;
  id: string;
  name: string;
  TableDescription: string;
  ParagraphDescription: string;
  divDescription: string;
  image?: string; // optional image field
}

// Define the structure for the entire data object
interface ProductData {
  [category: string]: Product[];
}

const ProductsPage = () => {
  const [productData, setProductData] = useState<ProductData>({});
  const [categories, setCategories] = useState<string[]>([]);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [unlockedProducts, setUnlockedProducts] = useState<Set<string>>(new Set());

  const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleReadMore = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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
      }, (err) => {
        console.log('FAILED...', err);
         toast({
            title: "Unlocked Successfully ✅",
  description: "Product has been unlocked successfully.",
          });
      });

      setUnlockedProducts(prev => new Set(prev).add(selectedProduct.id));
    }
    handleModalClose();
  };

  useEffect(() => {
    // header ka ref pakadne ke liye
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

  const handleCategoryToggle = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleProductClick = (productId: string) => {
    const productElement = productRefs.current[productId];
    if (productElement) {
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const elementPosition = productElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

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
    <div className="container mx-auto p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-4 h-fit shadow-xl p-4">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategoryToggle(category)}
                  className="w-full text-left px-4 py-2 rounded-md transition-colors bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                >
                  <span>{category}</span>
                  <span
                    className={`transform transition-transform ${
                      openCategory === category ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {openCategory === category && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {productData[category].map((product) => (
                      <li key={product.id}>
                        <button
                          onClick={() => handleProductClick(product.id)}
                          className="w-full text-left px-2 py-1 rounded-md hover:bg-gray-200"
                        >
                          {product.name && (
                            <div
                              className=""
                              dangerouslySetInnerHTML={{ __html: product.name }}
                            />
                          )}{" "}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          {categories.map((category) => (
            <div key={category} className="mb-12">
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
                        src={
                          product.image ||
                          "https://via.placeholder.com/400x300.png?text=Product+Image"
                        }
  alt={product.name?.replace(/<[^>]+>/g, "")} // removes any HTML tags if present

                        className="w-full md:w-1/3 h-80 object-cover rounded-lg"
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
                                 className={`my-2 ${unlockedProducts.has(product.id) ? '' : 'blur-sm'}`}
                                 dangerouslySetInnerHTML={{
                                   __html: product.Description,
                                 }}
                               />
                               {!unlockedProducts.has(product.id) && (
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

                    {/* Buy Now Button */}
                    <div className="mt-6">
                      <a
                        href={`https://wa.me/+918989496905?text=I%20want%20to%20buy%20${encodeURIComponent(
                          product.name
                        )}`}
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
    </div>
  );
};

export default ProductsPage;
