import React from "react";

type Product = {
  name: string;
  image: string;
  link: string;
  description: string;
};

const products: Product[] = [
  {
    name: "Stevia Extract Powder",
    image: "/images/stevia.jpg",
    link: "#",
    description: "Specification: SG80%-95%; STV80%-95%..."
  },
  {
    name: "Coenzyme Q10 Powder",
    image: "/images/q10.jpg",
    link: "#",
    description: "Purity: 98.0-101.0% (USP43/EP/BP)..."
  },
  {
    name: "Marigold Extract",
    image: "/images/marigold.jpg",
    link: "#",
    description: "Active ingredient: Lutein, Zeaxanthin..."
  },
  {
    name: "Natural Ferulic Acid",
    image: "/images/ferulic.jpg",
    link: "#",
    description: "Botanical Source: Rice Bran..."
  },
  {
    name: "Saw Palmetto Extract",
    image: "/images/palmetto.jpg",
    link: "#",
    description: "Specification: Total Fatty Acid 25%-45%..."
  },
  {
    name: "Alpha Lipoic Acid Powder",
    image: "/images/lipoic.jpg",
    link: "#",
    description: "CAS No.: 1077-28-7 | Food Grade..."
  },
  {
    name: "Ginkgo Biloba Extract",
    image: "/images/ginkgo.jpg",
    link: "#",
    description: "Specification: Flavone 24% + Ginkgolide 6%..."
  },
  {
    name: "Milk Thistle Extract",
    image: "/images/milkthistle.jpg",
    link: "#",
    description: "Specification: Silymarin 80%, Silibinin..."
  }
];

const HotProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            Hot Sell
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Hot Products</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <a href={product.link} className="block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </a>

              {/* Text */}
              <div className="p-4">
                <a
                  href={product.link}
                  className="text-lg font-semibold text-gray-800 hover:text-green-600"
                >
                  {product.name}
                </a>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="mt-3 inline-flex items-center text-green-600 hover:underline text-sm font-medium"
                >
                  View More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
