import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavigationDropdownProps {
  title: string;
  items: DropdownItem[];
}

const NavigationDropdown = ({ title, items }: NavigationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors py-2">
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg border border-border min-w-[220px] z-50">
          <ul className="py-2">
            {items.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className="block px-4 py-3 text-foreground  hover:text-primary transition-colors text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationDropdown;