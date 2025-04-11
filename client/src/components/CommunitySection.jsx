import React, { useEffect, useState } from "react";

const CommunitySection = () => {
  // State for counting animation
  const [locations, setLocations] = useState(0);
  const [continents, setContinents] = useState(0);
  const [workers, setWorkers] = useState(0);

  useEffect(() => {
    let locationsInterval, continentsInterval, workersInterval;

    // Function to animate count
    const animateCount = (setCount, target) => {
      let count = 0;
      const speed = target / 50; // Control speed of counting
      const interval = setInterval(() => {
        count += Math.ceil(speed);
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setCount(count);
      }, 50);
      return interval;
    };

    // Start counting animation
    locationsInterval = animateCount(setLocations, 600);
    continentsInterval = animateCount(setContinents, 6);
    workersInterval = animateCount(setWorkers, 22);

    return () => {
      clearInterval(locationsInterval);
      clearInterval(continentsInterval);
      clearInterval(workersInterval);
    };
  }, []);

  return (
    <section
      className="relative bg-cover bg-center text-white py-35  md:px-10 "
      style={{ backgroundImage: "url('/your-image-path.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold uppercase">
            We don’t just design
            <span className="text-lime-400"> capitalize</span> we craft
            experiences
          </h2>
          <p className="mt-4 text-gray-300 max-w-lg mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            ipsum suspendisse ultrices gravida.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="bg-[#a8cc44] text-black font-semibold px-6 py-3 flex items-center gap-2 hover:bg-lime-500 transition">
              LEARN MORE
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 w-full lg:w-1/2">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-bold">{locations}</h3>
              <p className="text-lime-400 font-semibold">LOCATIONS</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-bold">{continents}</h3>
              <p className="text-lime-400 font-semibold">CONTINENTS</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl font-bold">{workers}</h3>
              <p className="text-lime-400 font-semibold">WORKERS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
