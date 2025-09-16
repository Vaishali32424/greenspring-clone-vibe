import { Phone, Mail, Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import NavigationDropdown from "./LandingPage/NavigationDropdown";
import logo from "@/assets/logo.png";

const Header = () => {
  const companyDropdownItems = [
    { label: "Factory & Certificates", href: "/factory-and-certificate" },
    { label: "Meet Our Team", href: "/meet-our-team" },
    { label: "What Can We Do", href: "/what-can-we-do" },
    { label: "Innovation And Service", href: "/innovation-service" },
    { label: "Quality And R&D", href: "/quality-rd" },
  ];

  const productsDropdownItems = [
    { label: "Botanical Extracts", href: "/botanical-extracts" },
    { label: "Natural Sweeteners", href: "/sweeteners" },
    { label: "Functional Ingredients", href: "/functional-ingredients" },
    { label: "Custom Solutions", href: "/custom-solutions" },
  ];

  return (
    <header className="w-full ">
      {/* Top Bar */}
      <div className="bg-header-bg text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 8892381233</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>sale@greenspringbio.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4" />
              <span>Language</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex space-x-2">
              {/* Social Media Icons */}
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs">f</span>
              </div>
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs">x</span>
              </div>
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs">in</span>
              </div>
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs">yt</span>
              </div>
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs">p</span>
              </div>
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs">vk</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-nav-bg shadow-md py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Green Spring Technology" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Shree Sai</h1>
              <p className="text-sm text-muted-foreground">TECHNOLOGY</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8 text-sm mx-1">
            <a href="/" className="text-primary font-medium hover:text-primary-dark transition-colors text-sm">Home</a>
            <NavigationDropdown route="/why-choose-us" title="Why Choose Us" items={companyDropdownItems} />
            <NavigationDropdown route="/products"  title="Products" items={productsDropdownItems} />
            <a href="#" className="text-foreground text-sm  hover:text-primary transition-colors ">Sweeteners </a>
            <a href="#" className="text-foreground text-sm hover:text-primary transition-colors">News</a>
            <a href="#" className="text-foreground  text-sm hover:text-primary transition-colors">Knowledge</a>
            <a href="/contact-us" className="text-foreground  text-sm hover:text-primary transition-colors">Contact Us</a>
          </nav>

          <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md font-medium">
            Feedback
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;