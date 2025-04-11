import React, { useState } from "react";
import { FaPenNib, FaCubes, FaHardHat, FaHome, FaChair } from "react-icons/fa";

const expertiseItems = [
  {
    number: "01.",
    title: "Master Planning",
    icon: <FaPenNib size={28} />,
    description:
      "Comprehensive planning and design for large-scale developments",
  },
  {
    number: "02.",
    title: "Landscape Design",
    icon: <FaCubes size={28} />,
    description:
      "Creating harmonious outdoor spaces that complement the built environment.",
  },
  {
    number: "03.",
    title: "Industrial Planning & Liaisoning",
    icon: <FaHardHat size={28} />,
    description:
      "14+ years of experience in Industrial Planning & Liaisoning. Empanelled architects for MIDC",
  },
  {
    number: "04.",
    title: "Architecture",
    icon: <FaHome size={28} />,
    description:
      "Innovative architectural solutions for residential, commercial, and industrial projects.",
  },
  {
    number: "05.",
    title: "Industrial Architecture",
    icon: <FaPenNib size={28} />,
    description: "Functional and efficient designs for industrial facilities",
  },
  {
    number: "06.",
    title: "Interior Design",
    icon: <FaChair size={28} />,
    description: "Tailored interior spaces that enhance the user experience.",
  },
];

const ExpertiseCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  const baseBorder =
    "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(229, 229, 229) 1px, rgb(229, 229, 229) 3px)";
  const hoverBorder =
    "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(163, 230, 53) 1px, rgb(163, 230, 53) 3px)";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "30px",
        backgroundColor: "#fff",
        border: "5px solid transparent",
        borderImage: `${hovered ? hoverBorder : baseBorder} 5`,
        transition: "border-image 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "0 6px 16px rgba(163, 230, 53, 0.3)" : "none",
        borderRadius: "12px",
      }}
    >
      <p className="text-base font-bold text-gray-200 mb-4">{item.number}</p>
      <div className="text-black mb-5 flex justify-center">{item.icon}</div>
      <h3 className="text-md font-extrabold uppercase mb-3 tracking-wide">
        {item.title}
      </h3>
      <div className="w-10 h-[1px] mx-auto bg-gray-200 mb-4" />
      <p className="text-sm text-gray-600 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

const ExpertiseGrid = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-12">OUR EXPERTISE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {expertiseItems.map((item, idx) => (
          <ExpertiseCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ExpertiseGrid;
