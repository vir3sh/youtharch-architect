import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white text-black mx-5 py-16 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Section (4 Columns in Large Screens) */}
        <div className="lg:col-span-5">
          <h1
            className="text-4xl font-bold mt-4 leading-tight pb-3"
            style={{
              fontSize: "46px",
              borderImage:
                "linear-gradient(to right, rgba(0, 0, 0, .2), rgba(0, 0, 0, .5)) 1",
            }}
          >
            WE’D LOVE TO <br />
            TALK
          </h1>

          <div className="mt-8 space-y-5 text-gray-700 text-lg">
            <p>
              Have a question? We’d love to hear from you. Send us a note to get
              the conversation started - or click on an office above and talk to
              us. Especially about designing something, or something we’ve
              designed.
            </p>
          </div>
        </div>

        {/* Right Section (7 Columns in Large Screens) */}
        <div className="lg:col-span-7 bg-transparent">
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block font-medium">
                  FULL NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name Here"
                  className="w-full border-b border-black focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block font-medium">
                  EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="w-full border-b border-black focus:outline-none py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block font-medium">
                  PHONE <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Here"
                  className="w-full border-b border-black focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block font-medium">
                  BUDGET <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Budget Here"
                  className="w-full border-b border-black focus:outline-none py-2"
                />
              </div>
            </div>

            <div className="space-y-6">
              <label className="block font-medium">
                MESSAGE <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter Your Message Here"
                className="w-full border-b border-black focus:outline-none py-2 h-28"
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="w-6 h-6 accent-[#a8cc44]"
              />
              <label htmlFor="terms" className="text-gray-700">
                Accept the terms and conditions of personal data.
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#a8cc44] text-black font-semibold py-4 px-8 text-lg w-full md:w-auto hover:bg-[#a8cc44] transition"
            >
              SEND NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
