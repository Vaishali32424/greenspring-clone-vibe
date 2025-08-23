"use client";

import { useEffect, useState } from "react";
import heroPlant from "@/assets/hero-plant.jpg";
import secondImage from "@/assets/hero-plant-03.jpg";
// import thirdImage from "@/assets/hero-plant-3.jpg";

const slides = [
  {
    image: heroPlant,
    title: "Botanical Extract Supplier",
    description: (
      <>
        <p className="mb-4">
          <strong>GREEN SPRING</strong> is a leading manufacturer and supplier
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
        <p>
          Trusted by global brands in nutrition, skincare, and health.
        </p>
      </>
    ),
  },
  // {
  //   image: thirdImage,
  //   title: "Innovative Herbal Solutions",
  //   description: (
  //     <>
  //       <p className="mb-4">
  //         Elevate your product line with premium botanical extracts.
  //       </p>
  //       <p>
  //         Science-backed, sustainably sourced, globally certified.
  //       </p>
  //     </>
  //   ),
  // },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-[500px] overflow-hidden">
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
          {/* Logos (optional, static) */}
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

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {currentSlide.title}
          </h1>

          {/* Description */}
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
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
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
    </section>
  );
};

export default HeroSection;
