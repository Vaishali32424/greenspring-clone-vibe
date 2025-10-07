import { FaShieldAlt, FaRegHeart, FaTools, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import heroPlant from "@/assets/hero-plant.jpg";
import secondImage from "@/assets/hero-plant-03.jpg";

const slides = [
  {
    image: heroPlant,
    title: "Botanical Extract Supplier",
    description: (
      <>
        <p className="mb-4">
          <strong>Shree sai Bio tech</strong> is a leading manufacturer and supplier
        </p>
        <p>
          of high-quality botanical extracts for<br />
          Supplements, Food/Beverage, Cosmetic and Personal Care industries.
        </p>
      </>
    ),
  },
  {
    image: secondImage,
    title: "Natural Ingredients, Pure Quality",
    description: (
      <>
        <p className="mb-4">
          Sourcing nature’s finest elements for your products.
        </p>
        <p>Trusted by global brands in nutrition, skincare, and health.</p>
      </>
    ),
  },
];


const cardData = [
  {
    icon: <FaShieldAlt className="text-3xl text-green-600 mb-3 mx-auto" />,
    title: "QUALITY ASSURANCE",
    text: "Strict quality assurance system from raw material, production and finished...",
  },
  {
    icon: <FaRegHeart className="text-3xl text-green-600 mb-3 mx-auto" />,
    title: "PROFESSIONAL",
    text: "Professional explanation of pre-sales products and after-sale perfect service system.",
  },
  {
    icon: <FaTools className="text-3xl text-green-600 mb-3 mx-auto" />,
    title: "OEM SERVICE",
    text: "OEM service with customized formulation and packing.",
  },
  {
    icon: <FaStar className="text-3xl text-green-600 mb-3 mx-auto" />,
    title: "WELL-EXPERIENCED",
    text: "More than 23 Years of experience in exporting to more than 80 Countries.",
  },
];


const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative">
      {/* Hero section with bigger height to leave space for cards */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${currentSlide.image})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex justify-center items-center text-center">
          <div className="w-full max-w-3xl text-white">
     <div className="flex justify-center flex-wrap gap-2 mb-6">
            {["ISO", "BRC", "COSMOS APPROVED", "BRCS", "IFS", "K", "HALAL"].map(
              (label) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm"
                >
                  {label}
                </div>
              )
            )}
          </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentSlide.title}
            </h1>
            <div className="text-white/90 text-lg leading-relaxed">
              {currentSlide.description}
            </div>
   {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                  currentIndex === index
                    ? "bg-primary"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              ></div>
            ))}
            </div>          </div>
        </div>
      </div>
         <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>


      {/* Cards (relative overlap) */}
<div className="relative -mt-24 z-20 px-20 overflow-visible">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 -w-6xl mx-auto">
    {cardData.map((card, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl shadow-md border-b-green-700 border-b-2 p-6 flex items-center gap-4 transition-transform duration-300 gruop hover:translate-y-2 hover:shadow-xl will-change-transform"
      >
        {/* Icon inside light circle */}
        <div className="flex-shrink-0 w-14 h-14 hover:bg-green-800 rounded-full  hover:text-green-800 bg-gray-100 flex items-center justify-center">
         <span className="mt-2  ">{card.icon}</span> 
        </div>

        {/* Text content */}
        <div className="text-left">
          <h3 className="font-bold text-lg mb-1">{card.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>



    </section>
  );
};

export default HeroSection;
