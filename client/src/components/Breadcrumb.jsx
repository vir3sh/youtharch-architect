import React from "react";
import { Link } from "react-router-dom";
import breadCrumbImage from "../assets/img/photo/youth-breadcrumb.webp"; // Adjust the path accordingly

const Breadcrumb = ({ title }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-130 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${breadCrumbImage})`,
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75  "></div>

      <div className="text-center  absolute bottom-3 z-10 bg-opacity-50 p-4 rounded-md">
        <h1 className="text-5xl font-bold">{title}</h1>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-2 text-lg">
            <li>
              <Link to="/" className="hover:underline">
                HOME
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-300">{title}</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
