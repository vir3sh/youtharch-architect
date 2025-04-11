import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "DESIGN WITH",
    highlight: "COMMUNITY",
    subtitle: "IN MIND",
    description: "THE FUTURE",
  },
  {
    id: 2,
    title: "INNOVATE",
    highlight: "SUSTAINABLY",
    subtitle: "FOR TOMORROW",
    description: "RESHAPING URBAN LIFE",
  },
  {
    id: 3,
    title: "ARCHITECTURE",
    highlight: "EVOLVING",
    subtitle: "BEYOND LIMITS",
    description: "TRANSFORMING LANDSCAPES",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Mobile View (<=768px) */}
      <div className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center px-6 md:hidden">
        <div className="w-full max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentIndex].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm text-gray-400 uppercase tracking-widest">
                {slides[currentIndex].description}
              </p>
              <h1 className="text-4xl font-extrabold mt-2 leading-tight">
                {slides[currentIndex].title}{" "}
                <span className="text-lime-400">
                  {slides[currentIndex].highlight}
                </span>{" "}
                {slides[currentIndex].subtitle}
              </h1>
              <button className="mt-6 px-6 py-3 bg-[#a8cc44] text-black font-bold  hover:bg-lime-500 transition">
                VIEW A PROJECT →
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicator & Controls */}
        <div className="absolute bottom-8 flex items-center space-x-6">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer text-lg font-bold ${
                currentIndex === index ? "text-lime-400" : "text-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {`0${index + 1}`}
            </span>
          ))}
        </div>

        <div className="absolute bottom-20 flex space-x-4">
          <button
            onClick={prevSlide}
            className="text-gray-400 hover:text-white transition font-bold px-4 py-2 bg-gray-800 "
          >
            PREV
          </button>
          <button
            onClick={nextSlide}
            className="text-gray-400 hover:text-white transition font-bold px-4 py-2 bg-gray-800 "
          >
            NEXT
          </button>
        </div>
      </div>

      {/* Desktop View (>=768px) */}
      <div className="relative  w-full h-screen bg-black text-white hidden md:flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-[60%] flex flex-col justify-center px-6 md:px-20 text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto md:mx-0"
            >
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                {slides[currentIndex].description}
              </p>
              <h1 className="text-5xl md:text-5xl font-extrabold mt-2 leading-tight">
                {slides[currentIndex].title}{" "}
                <span className="text-lime-400">
                  {slides[currentIndex].highlight}
                </span>{" "}
                {slides[currentIndex].subtitle}
              </h1>
              <button className="mt-6 px-6 py-3 bg-[#a8cc44] text-black font-bold hover:bg-lime-500 transition flex items-center mx-auto md:mx-0">
                VIEW A PROJECT →
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full md:w-[40%] flex items-center justify-center relative mt-8 md:mt-0">
          <span className="absolute text-8xl md:text-[150px] font-extrabold text-gray-800 opacity-30">
            {slides[currentIndex].id}
          </span>

          <div className="absolute bottom-6 md:bottom-12 right-6 md:right-10 flex items-center space-x-4 text-gray-400">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`cursor-pointer text-lg font-bold ${
                  currentIndex === index ? "text-lime-400" : "text-gray-500"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                {`0${index + 1}`}
              </span>
            ))}
            <div className="flex items-center gap-6">
              <button
                onClick={prevSlide}
                className="text-gray-500 hover:text-white transition font-bold px-3 py-2"
                style={{ color: "#fff" }}
              >
                PREV
              </button>

              <div className="h-6 w-px bg-gray-400"></div>

              <button
                onClick={nextSlide}
                className="text-gray-500 hover:text-white transition font-bold px-3 py-2"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Hero);
