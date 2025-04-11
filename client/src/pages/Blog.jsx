import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <>
      <Breadcrumb title={"BLOG"} />
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1150px] mx-auto p-8 bg-white"
        style={{
          borderTop: "5px solid rgb(229, 229, 229)",
          borderImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(229, 229, 229) 1px, rgb(229, 229, 229) 3px) 5 0 0 0",
        }}
      >
        <div className="lg:col-span-2 space-y-10">
          <div
            className="space-y-3 pt-10"
            style={{
              borderTop: "5px solid rgb(229, 229, 229)",
              borderImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(229, 229, 229) 1px, rgb(229, 229, 229) 3px) 5 0 0 0",
            }}
          >
            <h2 className="text-xl font-bold uppercase ">
              Industrial Architects: Transforming Spaces with Innovation and
              Functionality
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed tracking-wide">
              At Youtharch Architects, we specialize in creating cutting-edge
              industrial and home interiors in Navi Mumbai and Mumbai, blending
              design excellence with practicality to deliver spaces that inspire
              and perform.
            </p>
            <button className="flex items-center text-sm font-bold text-black">
              Read
              <ArrowRight className="ml-2 w-9 h-auto p-2 bg-[#a8cc44] text-black" />
            </button>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold uppercase ">
              Overcoming the Common Hurdles in Interior Designing
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed tracking-wide">
              Embarking on an interior design journey is an exciting prospect,
              yet many homeowners and business owners find themselves hesitating
              due to various challenges. Whether it's budget constraints, time
              limitations, or decision fatigue, several factors can delay or
              completely halt an interior project.
            </p>
            <button className="flex items-center text-sm font-bold text-black">
              Read
              <ArrowRight className="ml-2 w-9 h-auto p-2 bg-[#a8cc44] text-black" />
            </button>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <aside
          style={{
            padding: "30px",
            border: "5px solid rgb(229, 229, 229)",
            borderImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(229, 229, 229) 1px, rgb(229, 229, 229) 3px) 5",
            backgroundColor: "rgb(255, 255, 255)",
          }}
          className="space-y-8 pl-6"
        >
          <div>
            <h3 className="font-bold uppercase text-sm text-gray-800 tracking-wide">
              Media Info
            </h3>
            <p className="text-sm text-[#a8cc44] mt-2 leading-relaxed tracking-wide">
              admin@yaarchitects.com
            </p>
          </div>

          <div>
            <h3
              className="font-bold uppercase text-sm text-gray-800 tracking-wide"
              style={{
                borderTop: "5px solid rgb(229, 229, 229)",
                paddingTop: "25px",
                borderImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(229, 229, 229) 1px, rgb(229, 229, 229) 3px) 5 0 0 0",
              }}
            >
              Recent Posts
            </h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 leading-relaxed tracking-wide">
              <li>
                Industrial Architects: Transforming Spaces with Innovation and
                Functionality...
              </li>
              <li>Overcoming the Common Hurdles in Interior Designing..</li>
            </ul>
          </div>

          <div>
            <h3
              className="font-bold uppercase text-sm text-gray-800 tracking-wide"
              style={{
                borderTop: "5px solid rgb(229, 229, 229)",
                paddingTop: "25px",
                borderImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(229, 229, 229) 1px, rgb(229, 229, 229) 3px) 5 0 0 0",
              }}
            >
              Social Media
            </h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-[#a8cc44] leading-relaxed tracking-wide">
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Blog;
