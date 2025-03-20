import React, { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "WE HEAR",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.",
  },
  {
    id: 2,
    title: "WE GIVE IDEAS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.",
  },
  {
    id: 3,
    title: "WE PLAN THE BASES",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.",
  },
  {
    id: 4,
    title: "WE EXECUTE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.",
  },
  {
    id: 5,
    title: "WE TEST",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.",
  },
  {
    id: 6,
    title: "WE DELIVER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.",
  },
];

const ProcessSteps = () => {
  const [startIndex, setStartIndex] = useState(0);
  const stepsPerPage = 3;

  const handleNext = () => {
    if (startIndex + stepsPerPage < processSteps.length) {
      setStartIndex(startIndex + stepsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - stepsPerPage >= 0) {
      setStartIndex(startIndex - stepsPerPage);
    }
  };

  return (
    <section className="flex flex-col items-center py-25 px-8 bg-[#f2f2f2]">
      <div className="max-w-5xl w-full">
        <h4 className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
          How It Works
        </h4>
        <h2 className="text-4xl font-bold mt-3">OUR PROCESS</h2>

        {/* Steps Container */}
        <div className="mt-12 flex justify-center">
          {/* On mobile: 1 column, on md+ screens: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps
              .slice(startIndex, startIndex + stepsPerPage)
              .map((step) => (
                <div
                  key={step.id}
                  className="group flex items-center space-x-6 p-3 transition"
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 flex items-center justify-center border-4 border-gray-300  bg-white shadow-lg transition-colors group-hover:border-lime-400">
                    <CheckCircle
                      size={28}
                      className="text-gray-400 transition-colors group-hover:text-lime-400 m-2"
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-500 text-[13px] max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-12 space-x-6">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="flex items-center text-gray-500 hover:text-black transition duration-200 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
            <span className="ml-2 text-lg">Prev</span>
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + stepsPerPage >= processSteps.length}
            className="flex items-center text-black font-semibold hover:text-lime-500 transition duration-200"
          >
            <span className="mr-2 text-lg">Next</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProcessSteps);
