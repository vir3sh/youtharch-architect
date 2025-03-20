import React from "react";
import { ArrowRight } from "lucide-react";

const OfficeHighlight = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-6 md:px-12">
      <div className="relative w-full md:w-1/2">
        <img
          src="https://cdn.pixabay.com/photo/2020/02/27/14/33/building-4884852_640.jpg"
          alt="Modern Building"
          className="w-[345px] h-auto"
        />

        {/* Profile Card */}
        <div
          className="absolute -bottom-10 right-20 bg-white shadow-lg p-4 rounded-lg flex items-center space-x-3"
          // style={{
          //   backgroundColor: "transparent",
          //   border: "30px solid rgba(0, 0, 0, .1)",
          //   borderImage:
          //     "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgba(0, 0, 0, .1) 0, rgba(0, 0, 0, .1) 3px) 30",
          //   position: "absolute",
          // }}
        >
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="text-lg font-semibold">Joe French</h4>
            <p className="text-sm text-gray-500">Project Agent</p>
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-16">
        <p className="text-gray-500 uppercase text-sm font-semibold tracking-wide">
          Future of Work
        </p>
        <h2 className="text-4xl font-bold mt-2">
          THE OFFICE <br />
          <span className="text-black">RENAISSANCE</span>
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse ultrices gravida.
        </p>

        {/* Learn More Button */}
        <div className="mt-6 flex items-center space-x-3">
          <button className="flex items-center text-black font-semibold">
            LEARN MORE
            <span className="ml-2 p-2 bg-lime-400 ">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-10 flex space-x-6">
          <div
            className="p-4 w-[160px] text-center"
            style={{
              border: "5px solid rgba(0, 0, 0, .1)",
              borderImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgba(0, 0, 0, .1) 0, rgba(0, 0, 0, .1) 3px) 5",
            }}
          >
            <p className="text-xl font-bold">10+</p>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div
            className="p-4 w-[160px] text-center"
            style={{
              border: "5px solid rgba(0, 0, 0, .1)",
              borderImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgba(0, 0, 0, .1) 0, rgba(0, 0, 0, .1) 3px) 5",
            }}
          >
            <p className="text-xl font-bold">99k+</p>
            <p className="text-gray-600 text-sm">Billion Invested</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OfficeHighlight);
