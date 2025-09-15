import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactSidebar from "@/components/ContactSidebar";
import { ProductCarousel } from "@/components/ProductCarousel";
import AboutSection from "@/components/AboutSection";
import HotProducts from "@/components/HotProducts";
import HomeContact from "@/components/HomeContact";
import ProductMarketSection from "@/components/ProductMarketSection";
import LatestCaseSection from "@/components/LatestCaseSection";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
            {/* <ProductCarousel /> */}
            <AboutSection/>
            <HotProducts/>
            <HomeContact/>
            <ProductMarketSection/>
            <LatestCaseSection/>
            <div  className="w-full h-[300px] bg-[#F5F5F5]"></div>
            <LatestNews/>
            <Footer />
      <ContactSidebar />
    </div>
  );
};

export default Index;
