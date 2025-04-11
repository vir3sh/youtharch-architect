import React from "react";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-5xl my-4 mx-auto py-[60px] px-4 bg-white border border-gray-200">
      {/* Email Address */}
      <div className="flex flex-col items-center text-center">
        <p className="text-gray-500 text-sm">Email address</p>
        <p className="text-black font-bold text-lg">admin@yaarchitects.com</p>
      </div>

      {/* Free Consultation */}
      <div className="flex flex-col items-center text-start">
        <p className="text-gray-500 text-sm">Free Consultation</p>
        <p className="text-black font-bold text-lg">+91 99675 84305</p>
      </div>

      {/* Find a Space Button */}
      <div className="flex justify-center items-center">
        <button className="bg-lime-500 text-black font-bold px-6 py-3 hover:bg-lime-600 transition">
          FIND A SPACE
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;