import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import YouthLogo from "../assets/logo-light.webp";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        <div>
          <h4 className="font-bold text-lg mb-4 border-b border-white inline-block pb-1">
            ADDRESS
          </h4>
          <div className="text-gray-400 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1" size={16} />
              <p>
                Youth Arch Architects, <br />
                Panvel, Navi Mumbai <br />
                Maharashtra - 410206
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} />
              <p>admin@yaarchitects.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} />
              <p>+91 99675 84305</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 border-b border-white inline-block pb-1">
            QUICK LINKS
          </h4>
          <div className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              Projects
            </a>
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Blog
            </a>
            <a href="#" className="hover:text-white transition">
              Services
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-start">
          <img
            src={YouthLogo}
            alt="Youth Arch Logo"
            className="h-12 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-500 text-xs">
        <p>© 2025. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
