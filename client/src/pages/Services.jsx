import React from "react";
import CommunitySection from "../components/CommunitySection";
import Breadcrumb from "../components/Breadcrumb";
import OfficeHighlight from "../components/OfficeHighlight";
import ExpertiseGrid from "../components/ExpertiseGrid";
import Interested from "../components/Interested";
import OfficeService from "../components/OfficeService";

const Services = () => {
  return (
    <div>
      <Breadcrumb title={"SERVICES"} />

      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-snug mb-4">
            ARCHITECTURAL SOLUTIONS <br /> BUILT FOR IMPACT
          </h2>
          <p
            className="text-xs font-semibold tracking-widest text-gray-500 mb-6 mx-auto"
            style={{
              borderTop: "5px solid rgb(229, 229, 229)",
              paddingBottom: "25px",
              paddingTop: "25px",
              width: "120px",

              borderImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(229, 229, 229) 1px, rgb(229, 229, 229) 3px) 5 0 0 0",
            }}
          >
            OUR CONCEPT
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Rooted in functionality and sustainability, our designs seamlessly
            blend innovation with environmental consciousness. Specializing in
            industrial architecture in Navi Mumbai, we craft spaces that are
            both efficient and future-ready. Whether it’s a factory in Taloja or
            a clinic in Kalamboli, we ensure every project reflects your vision
            while maintaining the highest standards of design and
            sustainability.
          </p>
        </div>
      </section>

      <ExpertiseGrid />

      <OfficeService />

      <Interested />
    </div>
  );
};

export default Services;
