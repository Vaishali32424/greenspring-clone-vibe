import { MessageCircle, Mail, Users } from "lucide-react";
import { FaRobot } from "react-icons/fa";

const ContactSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center">
      {/* Avatar + Contact Label Container */}
      <div className="bg-white rounded-t-full shadow-md flex rounded-b-3xl flex-col items-center">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full mt-2 overflow-hidden border-2 border-green-700 -mb-2">
          <img
            src="https://img01.v15cdn.com/iconfloat/29/online.webp"
            alt="Contact Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Label */}
        <div className="bg-green-700 text-white text-xs font-semibold px-1 py-1  mt-3 w-full text-center">
          CONTACT
        </div>
      </div>

      {/* Contact Icons */}
      <div className="flex flex-col space-y-3 mt-1 bg-white shadow-lg rounded-l-lg p-3">
        <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors">
          <MessageCircle className="w-5 h-5" />
        </button>
        <div className="text-xs text-center text-muted-foreground">Whatsapp</div>

        <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors">
          <Mail className="w-5 h-5" />
        </button>
        <div className="text-xs text-center text-muted-foreground">Email</div>

        <button className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
          <MessageCircle className="w-5 h-5" />
        </button>
        <div className="text-xs text-center text-muted-foreground">Wechat</div>

        <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
          <Users className="w-5 h-5" />
        </button>
        <div className="text-xs text-center text-muted-foreground">Teams</div>
      </div>

      {/* Chat Widget */}
      <div className="mt-8 relative flex justify-center">
      {/* Glow Effect */}
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-600 opacity-75 animate-ping"></span>

      {/* Robot Button */}
      <button className="relative bg-green-700 hover:bg-white hover:text-green-700 text-white  shadow-green-800 p-4 rounded-full shadow-lg transition-colors flex items-center justify-center">
        <FaRobot className="w-6 h-6" />
      </button>
    </div>
    </div>
  );
};

export default ContactSidebar;
