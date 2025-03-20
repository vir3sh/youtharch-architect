import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="text-lg font-bold text-white">YOUTH ARCH</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["HOME", "SERVICES", "PROJECTS", "BLOG", "CONTACT US"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`${
                    item === "HOME"
                      ? "bg-lime-400 text-black px-4 py-2 font-bold"
                      : "hover:text-lime-400 transition"
                  }`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Start a Project Button */}
        <a
          href="#start-project"
          className="hidden md:block bg-lime-400 text-black px-5 py-3 font-bold"
        >
          START A PROJECT
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black text-white py-4 px-6 absolute top-full left-0 w-full"
          >
            <ul className="flex flex-col space-y-4">
              {["HOME", "SERVICES", "PROJECTS", "BLOG", "CONTACT US"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className={`block ${
                        item === "HOME"
                          ? "bg-lime-400 text-black px-4 py-2 font-bold"
                          : "hover:text-lime-400 transition"
                      }`}
                      onClick={() => setMenuOpen(false)} // Close menu on click
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li>
                <a
                  href="#start-project"
                  className="block bg-lime-400 text-black px-5 py-3 font-bold"
                  onClick={() => setMenuOpen(false)}
                >
                  START A PROJECT
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default React.memo(Navbar);
