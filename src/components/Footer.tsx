import { Globe, ChevronDown } from "lucide-react";
import React from "react";
import ContactSidebar from "./LandingPage/ContactSidebar";
import logo from "@/assets/logo.jpeg";
import QRCode from "@/assets/QR-code.png";
export default function Footer() {
  return (
    <><footer className="bg-gray-100 text-gray-700">
      {/* Top CTA Section */}
      <div className="bg-green-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg font-semibold mb-4 md:mb-0 text-center md:text-left">
            Free quotes for all your ingredient and custom manufacturing needs
          </p>
          <a
            href="/contact-us"
            className="bg-white text-green-700 font-bold py-2 px-4 rounded hover:bg-green-50 transition"
            title="Contact Us"
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-12 border-t border-gray-300 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <a href="/" title="Shree Sai Biotech">
              <img
                src={logo}
                className="mb-4 w-32" />
            </a>
            <p className="text-sm">
              We have more than 2,000 kinds of products, and not all of them
              are listed on our website. Please contact us if you cannot find
              it on our site.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4 text-xl text-white">
              <div className="flex items-center space-x-4">

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

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["Why Choose Us", "/about-us"],
                ["Products", "/products"],
                ["Sweeteners Customized Solutions", "/green-spring-sweetener"],
                ["Product List", "/custom-form"],
                ["News", "/newslist-1"],
                ["Knowledge", "/info/"],
                ["Contact Us", "/contact-us"],
                ["Feedback", "/inquiry"],
                ["Sitemap", "/sitemap.xml"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a href={`${link}`} className="hover:underline">
                    <i className="iconfont icon-youjiantou mr-2" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Botanical Extract", "/standard-herb-extract/"],
                ["Ratio Extract", "/ratio-extract/"],
                ["Oleoresin", "/oleoresin/"],
                ["Fruit Powder", "/fruit-powder/"],
                ["Natural Food Pigment", "/plant-pigment/"],
                ["Collagen And Peptide", "/collagen-and-peptide/"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a href={`${link}`} className="hover:underline">
                    <i className="iconfont icon-youjiantou mr-2" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & QR Code */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
            <p className="text-sm mb-2">
              <span className="font-semibold">Address:</span><br />
2nd Floor, Ms-A, Shop A 212, VIP Marg, Mall Godown Road, New Siyaganj, Indore - 452007, Madhya Pradesh, India        </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+91-8989496905" className="text-white hover:underline">
+91-8989496905              </a>
            </p>
            <p className="text-sm mb-4">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@shreesaibiotech.in" className="text-white hover:underline">
                info@shreesaibiotech.in
              </a>
            </p>

          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Scan QR</h3>
            <div>
              <img
                src={QRCode}
                alt="QR Code"
                className="w-32 h-32 object-contain"
                loading="lazy" />
            </div>
          </div>
        </div>


        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-4 text-center text-sm text-white">
          © {new Date().getFullYear()} Shree Sai Bio Technology. All Rights Reserved.
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-inner flex justify-around py-2 z-50">
        <a
          href="https://api.whatsapp.com/send?l=en&phone=8618182698650"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-center text-xs"
        >
          <i className="iconfont icon-whatsapp1 text-xl" />
          <p>WhatsApp</p>
        </a>
        <a
          href="https://teams.live.com/l/contact-sync/info@shreesaibiotech.in"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-center text-xs"
        >
          <i className="iconfont icon-teams text-xl" />
          <p>Teams</p>
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-center text-xs"
        >
          <i className="iconfont icon-xiangshang1 text-xl" />
          <p>Top</p>
        </button>
        <a href="vk://vk.com/greenspring3578" rel="nofollow" className="text-center text-xs">
          <i className="iconfont icon-vkontakte1 text-xl" />
          <p>VK</p>
        </a>
        <a
          href="https://www.greenspringshop.com/inquiry"
          className="text-center text-xs"
        >
          <i className="iconfont icon-message text-xl" />
          <p>Inquiry</p>
        </a>
        <div className="text-center text-xs relative">
          <i className="iconfont icon-cart text-xl" />
          <p>Bag</p>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            0
          </span>
        </div>
      </div>
    </footer><ContactSidebar /></>

  );
}
