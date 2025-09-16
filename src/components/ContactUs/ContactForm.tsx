import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "Welcome to send inquiry! We are a factory supplier of natural plant active ingredients. Request free samples now!*",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="w-full py-12 flex justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl bg-gray-50 rounded-lg p-8 shadow-sm"
      >
        {/* Two column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name:"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail:*"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone/WhatsApp:"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
          <input
            type="text"
            name="company"
            placeholder="Company:"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject:"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 focus:ring-2 focus:ring-green-600 outline-none"
        />

        {/* Message */}
        <textarea
          name="message"

rows={5}          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-6 focus:ring-2 focus:ring-green-600 outline-none"
        ></textarea>

        {/* Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-800 transition"
          >
            LEAVE A MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
