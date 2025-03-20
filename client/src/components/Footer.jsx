import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-300 text-sm">
          <a href="#" className="hover:text-white transition">
            ABOUT
          </a>
          <a href="#" className="hover:text-white transition">
            SERVICES
          </a>
          <a href="#" className="hover:text-white transition">
            PROJECTS
          </a>
          <a href="#" className="hover:text-white transition">
            BLOG
          </a>
          <a href="#" className="hover:text-white transition">
            CONTACT
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-15 mb-15">
          <div className="w-full md:w-3/5 text-center md:text-left text-sm">
            <h3 className="text-lg font-semibold">WILLS POINT</h3>
            <p className="mt-2 text-gray-400">
              8619 S Wolcott Avenue <br />
              Floor 202 <br />
              Chicago, IL 60620 <br />
              (773) 238 - 7162
            </p>
          </div>

          <div className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0">
            <h2 className="text-2xl font-bold tracking-widest">YOUTH ARCH</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-gray-400 text-xs mt-8 items-center">
          <p>© 2025 YOUTH ARCH. All rights reserved.</p>

          <div className="flex space-x-6 mt-2 md:mt-0 text-gray-300">
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              YouTube
            </a>
          </div>

          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Our App
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
