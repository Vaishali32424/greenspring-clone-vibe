import { Phone, Mail, Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-header-bg text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>1/uploads/18070/ffd1d1d259b4abe984e2a87839e23df.jpg</span>
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
              <h1 className="text-xl font-bold text-foreground">GREEN SPRING</h1>
              <p className="text-sm text-muted-foreground">TECHNOLOGY</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-primary font-medium hover:text-primary-dark transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Sweeteners Customized Solutions</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">News</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Knowledge</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact Us</a>
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