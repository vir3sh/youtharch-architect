import React from "react";
import siddhant from "../assets/img/photo/siddhant.jpg";

const teamMembers = [
  {
    name: "AR. SIDDHARTH MHATRE",
    role: "Principal Architect",
    image: siddhant,
    isActive: false,
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        THE MINDS BEHIND YOUR SPACES
      </h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`p-6 text-center transition-all ${
              member.isActive ? "border border-gray-300 shadow-md p-4" : ""
            }`}
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 overflow-hidden">
              <img
              
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg mt-4">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
