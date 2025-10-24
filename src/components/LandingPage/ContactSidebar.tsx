import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaWhatsapp } from "react-icons/fa";
import { Locate, Mail, MessageCircle, Send, User, Users } from "lucide-react";

const ContactSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto open every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto open & send welcome messages after 5 seconds (once on load)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);

      const now = new Date();
      const time = `${String(now.getMonth() + 1).padStart(2, "0")}-${String(
        now.getDate()
      ).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}`;

      const botMessages = [
        {
          id: Date.now(),
          sender: "bot",
          text: "Hello, welcome to the Shree sai Bio tech website. If you are interested in any product, please let us know immediately!",
          time,
        },
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "We specialize in high-quality plant extracts for the food, pharmaceutical, and cosmetics industries. With over 20 years of experience, we offer customized solutions and ensure product quality through rigorous testing and certifications.",
          time,
        },
        {
          id: Date.now() + 2,
          sender: "bot",
          text: "Please leave your phone, email, or WhatsApp contact information for further assistance!",
          time,
        },
       {
  id: Date.now() + 3,
  sender: "bot",
  text: `📞 You can contact us via the following methods:

• Phone: +91-8989496905
• Email: info@shreesaibiotech.com
• WhatsApp: +91-8989496905
• Address: 2nd Floor, Ms-A, Shop A 212, VIP Marg, Mall Godown Road, New Siyaganj, Indore - 452007, Madhya Pradesh, India

If you have any specific inquiries, feel free to reach out!`,
  time,
}
      ];

      botMessages.forEach((msg, index) => {
        setTimeout(() => {
          setMessages((prev) => [...prev, msg]);
        }, index * 1500); // delay each message
      });
    }, 5000); // run after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handle sending a message
  const sendMessage = () => {
    if (!input.trim()) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: input,
      time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: botResponse,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 800);
  };

 const getBotResponse = (text) => {
  const lower = text.toLowerCase();

  if (lower.includes("hi") || lower.includes("hello")) {
    return "Hello! 👋 How can I assist you today?";
  }
  if (lower.includes("product")) {
    return "We specialize in high-quality plant extracts for food, pharmaceutical, and cosmetics industries.";
  }
  if (lower.includes("contact")) {
    return `📞 You can contact us via the following methods:

• Phone: +91-8989496905
• Email: info@shreesaibiotech.com
• WhatsApp: +91-8989496905
• Address: 2nd Floor, Ms-A, Shop A 212, VIP Marg, Mall Godown Road, New Siyaganj, Indore - 452007, Madhya Pradesh, India

If you have any specific inquiries, feel free to reach out!`;
  }

  return "I'm here to help! Could you please rephrase that?";
};
  const phoneNumber = "+918989496905";
  const email = "info@shreesaibiotech.com";
  const address = "2nd Floor, Ms-A, Shop A 212, VIP Marg, Mall Godown Road, New Siyaganj, Indore - 452007, Madhya Pradesh, India";

  return (
    <>
      {/* Sidebar (fixed on right, like screenshot) */}
      <div className="fixed right-0 top-32 hidden z-40 sm:flex flex-col items-center">
        {/* Avatar + Contact Label */}
        <a href="/contact-us" className="bg-white rounded-t-full shadow-md flex flex-col items-center">
          <div className="w-14 h-14 rounded-full mt-2 overflow-hidden border-2 border-green-700 -mb-2">
            <img
              src="https://img01.v15cdn.com/iconfloat/29/online.webp"
              alt="Contact Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-green-700 text-white text-xs font-semibold px-2 py-1 mt-3 w-full text-center">
            CONTACT
          </div>
        </a>

        {/* Contact Icons */}
         <div className="flex flex-col space-y-3 mt-1 bg-white shadow-lg rounded-l-lg p-3">
      {/* WhatsApp */}
      <button
        onClick={() => window.open(`https://wa.me/${phoneNumber.replace(/\D/g,'')}`, "_blank")}
        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
      >
        <FaWhatsapp className="w-5 h-5" />
      </button>
      <div className="text-xs text-center">Whatsapp</div>

      {/* Email */}
      <button
        onClick={() => window.location.href = `mailto:${email}`}
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full"
      >
        <Mail className="w-5 h-5" />
      </button>
      <div className="text-xs text-center">Email</div>

      {/* WeChat (placeholder: open chat link or alert) */}
     <button
  onClick={() => window.location.href = "sms:+918989496905"}
  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-3 rounded-full"
>
  <MessageCircle className="w-5 h-5" />
</button>
<div className="text-xs text-center">Message</div>


      {/* Location */}
      <button
        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, "_blank")}
        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
      >
        <Locate className="w-5 h-5" />
      </button>
      <div className="text-xs text-center">Location</div>
    </div>
      </div>

      {/* Chat box + FAB at bottom right */}
<div className="fixed bottom-4  right-0 z-50 ">
        {/* Chat box */}
        {isOpen && (
          <div className="w-[500px] h-[600px] bg-white shadow-2xl rounded-lg flex flex-col border border-gray-200">
            {/* Header */}
            <div className="bg-green-700 text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
              <div className="font-semibold">SHREE SAI BIOTECH</div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-white hover:text-black"
              >
                &times;
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 space-y-2 overflow-y-auto bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2 ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <FaRobot className="mt-1 text-green-700" size={24} />
                  )}
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      msg.sender === "user"
                        ? "bg-green-600 text-white rounded-br-none"
                        : "bg-white border rounded-bl-none"
                    }`}
                      style={{ whiteSpace: "pre-line" }}   // 👈 this preserves formatting

                  >
                    {msg.text}
              
                        <div className={`text-[10px] text-gray-400 mt-1 text-right ${
                      msg.sender === "user"
                        ? "text-gray-100"
                        : "text-gray-400"
                    }`}>
                      {msg.time}
                    </div>
                  </div>
                  {msg.sender === "user" && (
                    <User className="mt-1 text-green-700" />
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-2 border-t flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Write a message..."
                className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
              >
                <Send/>
              </button>
            </div>
          </div>
        )}

        {/* Floating chat button */}
  
      </div>
        <div className="fixed bottom-10 right-20 z-40">

                <button           onClick={() => setIsOpen(!isOpen)}
 className="relative bg-green-700 hover:bg-white hover:text-green-700 text-white  shadow-green-800 p-4 rounded-full shadow-lg transition-colors flex items-center justify-center">

          <FaRobot className="w-10 h-10" />
        </button>
      </div>
    </>
  );
};

export default ContactSidebar;
