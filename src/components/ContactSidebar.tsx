import { MessageCircle, Phone, Mail, Users } from "lucide-react";

const ContactSidebar = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      {/* Contact Button */}
      <div className="bg-primary text-white px-3 py-1 text-xs font-medium rotate-90 origin-center mb-4 whitespace-nowrap">
        CONTACT
      </div>
      
      {/* Contact Icons */}
      <div className="flex flex-col space-y-3 bg-white shadow-lg rounded-l-lg p-3">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors">
          <MessageCircle className="w-5 h-5" />
        </button>
        <div className="text-xs text-center text-muted-foreground">Whatsapp</div>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors">
          <Mail className="w-5 h-5" />
        </button>
        <div className="text-xs text-center text-muted-foreground">Email</div>
        
        <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
          <MessageCircle className="w-5 h-5" />
        </button>
        <div className="text-xs text-center text-muted-foreground">Wechat</div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
          <Users className="w-5 h-5" />
        </button>
        <div className="text-xs text-center text-muted-foreground">Teams</div>
      </div>
      
      {/* Chat Widget */}
      <div className="mt-4">
        <button className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ContactSidebar;