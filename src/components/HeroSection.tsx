import heroPlant from "@/assets/hero-plant.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPlant})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="w-full max-w-4xl">
          <div className="text-right">
            {/* Certification Logos */}
            <div className="flex justify-end items-center space-x-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">ISO</div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">BRC</div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">COSMOS APPROVED</div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">BRCS</div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">IFS</div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">K</div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">HALAL</div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Botanical Extract Supplier
            </h1>
            
            {/* Description */}
            <div className="text-white/90 text-lg leading-relaxed max-w-2xl ml-auto">
              <p className="mb-4">
                <strong>GREEN SPRING</strong> is a leading manufacturer and supplier
              </p>
              <p>
                of high-quality botanical extracts for<br />
                Supplements, Food/Beverage, Cosmetic and Personal Care industries.
              </p>
            </div>
            
            {/* Slider Dots */}
            <div className="flex justify-end space-x-2 mt-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-white/50 rounded-full"></div>
              <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;