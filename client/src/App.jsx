import React from "react";
import Home from "./pages/Home";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/service" element={<Services />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/blog" element={<Blog />} />{" "}
        <Route path="/about" element={<About />} />{" "}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
