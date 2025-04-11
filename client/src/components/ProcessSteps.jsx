import React from "react";
import { CheckCircle } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "CONSULTATION",
    description: "Understand your needs, budget, and vision",
  },
  {
    id: 2,
    title: "CONCEPT DESIGN",
    description: "Create 3D models and layouts tailored to your space.",
  },
  {
    id: 3,
    title: "APPROVALS & PLANNING",
    description: "Streamlined handling of permits and material selection",
  },
  {
    id: 4,
    title: "EXECUTION",
    description: "On-site supervision for timely and quality delivery",
  },
  {
    id: 5,
    title: "QUALITY CHECK",
    description: "Ensure all specifications and expectations are met",
  },
  {
    id: 6,
    title: "DELIVERY",
    description: "Final walkthrough and project handover",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-gray-500 text-sm font-semibold tracking-widest uppercase">
          How It Works
        </h4>
        <h2 className="text-4xl font-bold mt-2 mb-12">OUR PROCESS</h2>

        {/* SCROLLABLE CONTAINER */}
        <div
          className="overflow-x-auto scrollbar-hide"
          onWheel={(e) => {
            const container = e.currentTarget;
            if (e.deltaY !== 0) {
              e.preventDefault(); // Stop default vertical scroll
              container.scrollLeft += e.deltaY; // Translate it to horizontal
            }
          }}
        >
          <div className="flex w-max space-x-10 pr-6">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="min-w-[280px] max-w-[300px] flex-shrink-0"
              >
                {/* Icon and dotted line */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 border border-dotted border-gray-400 flex items-center justify-center">
                    <CheckCircle size={20} className="text-black" />
                  </div>
                  {index !== processSteps.length - 1 && (
                    <div className="flex-1 h-px border-b border-dotted border-gray-400 ml-4"></div>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProcessSteps);
