import React from "react";

const Interested = () => {
  return (
    <>
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10">
          {/* Left Title */}

          <div className="col-span-1 text-left">
            <p
              className="text-xs text-gray-400 font-semibold mb-2 tracking-widest left-0 "
              style={{
                padding: "30px",
                borderBottom: "5px solid rgb(229, 229, 229)",
                width: "153px",
                borderImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(229, 229, 229) 1px, rgb(229, 229, 229) 3px) 5",
                backgroundColor: "rgb(255, 255, 255)",
              }}
            >
              YOUR IDEA
            </p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-wide">
              INTERESTED IN OUR <span className="bg-[#a8cc44] px-1">WORK?</span>
            </h2>
          </div>

          {/* Center Description */}
          <div className="col-span-1 text-gray-700 text-sm leading-relaxed text-justify  tracking-wide">
            <p>
              Got a vision for your next project? Whether it’s a dream home, a
              new office space, or a large-scale development, we’re here to make
              it happen. At{" "}
              <span className="font-semibold text-black">
                Youth Arch Architect
              </span>
              , we specialize in turning your ideas into reality with tailored
              solutions that meet your specific needs and exceed expectations.
            </p>
          </div>

          {/* Right Button */}
          <div className="col-span-1 text-center md:text-right">
            <button className="bg-[#a8cc44] hover:bg-[#6d7d42] text-black font-bold px-6 py-3 rounded-none shadow-md transition-all">
              LET&apos;S TALK NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Interested;
