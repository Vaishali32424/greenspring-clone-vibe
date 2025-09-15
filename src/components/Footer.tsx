import { Globe, ChevronDown } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top CTA Section */}
      <div className="bg-green-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg font-semibold mb-4 md:mb-0 text-center md:text-left">
            Free quotes for all your ingredient and custom manufacturing needs
          </p>
          <a
            href="https://www.greenspringshop.com/contact-us"
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
            <a href="https://www.greenspringshop.com/" title="Green Spring">
              <img
                src="/path-to-your-logo.png"
                alt="Xi'an Green Spring Technology Co.,Ltd"
                className="mb-4 w-32"
              />
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
                  <a href={`https://www.greenspringshop.com${link}`} className="hover:underline">
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
                  <a href={`https://www.greenspringshop.com${link}`} className="hover:underline">
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
              Room 604, Suit A, National Digital Publishing House Base, Tiangu 7th Road, High-tech Zone, Xi'an, China
            </p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+8618182698650" className="text-green-700 hover:underline">
                +8618182698650
              </a>
            </p>
            <p className="text-sm mb-4">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:sale@greenspringbio.com" className="text-green-700 hover:underline">
                sale@greenspringbio.com
              </a>
            </p>
          
          </div>
             <div>
            <h3 className="font-bold mb-4 text-lg">Scan QR</h3>
              <div>
              <img
                src="data:image/png;base64,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"
                alt="QR Code"
                className="w-32 h-32 object-contain"
                loading="lazy"
              />
            </div>
            </div>
        </div>


        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-4 text-center text-sm text-white">
          © {new Date().getFullYear()} Xi'an Green Spring Technology Co.,Ltd. All Rights Reserved.
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
          href="https://teams.live.com/l/contact-sync/sale@greenspringbio.com"
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
    </footer>
  );
}
