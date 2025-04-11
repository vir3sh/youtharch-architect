import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import YouthLogo from "../assets/logo-light.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActiveLink = (path) => {
    return location.pathname === path
      ? "bg-[#a8cc44] text-black px-4 py-2"
      : "hover:text-lime-400 transition px-4 py-2";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-[100px] flex items-center z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#333333] bg-opacity-90 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full text-white">
          {/* Logo */}
          <div className="text-lg font-bold">
            <img className="h-[42px] w-[170px]" src={YouthLogo} alt="Logo" />
          </div>

          {/* Hamburger / Close button for mobile */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <ul className="hidden lg:flex space-x-2 text-sm whitespace-nowrap">
            <li>
              <Link to="/" className={`font-bold ${isActiveLink("/")}`}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`font-bold ${isActiveLink("/about")}`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className={`font-bold ${isActiveLink("/service")}`}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`font-bold ${isActiveLink("/projects")}`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/blog" className={`font-bold ${isActiveLink("/blog")}`}>
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`font-bold ${isActiveLink("/contact")}`}
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="hidden lg:block">
            <a
              href="#start-project"
              className="bg-[#a8cc44] text-black px-5 py-2 font-bold shadow-md hover:bg-lime-500 transition whitespace-nowrap"
            >
              START A PROJECT
            </a>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#a8cc44] text-black flex flex-col items-center space-y-6 z-50 py-10 transition-all duration-300 ease-in-out">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-6 text-white"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="text-center space-y-6">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className={`font-bold ${isActiveLink("/")}`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`font-bold ${isActiveLink("/about")}`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                onClick={toggleMenu}
                className={`font-bold ${isActiveLink("/service")}`}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className={`font-bold ${isActiveLink("/projects")}`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={toggleMenu}
                className={`font-bold ${isActiveLink("/blog")}`}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`font-bold ${isActiveLink("/contact")}`}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <a
                href="#start-project"
                className="bg-black text-white px-4 py-2 font-bold shadow-md hover:bg-lime-500 transition text-sm whitespace-nowrap"
                onClick={toggleMenu}
              >
                START A PROJECT
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default React.memo(Navbar);
