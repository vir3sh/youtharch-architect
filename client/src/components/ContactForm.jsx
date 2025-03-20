import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white text-black mx-5 py-16 my-26 md:px-12 gap-3 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h5 className="text-gray-500 uppercase tracking-wide font-semibold pb-1">
            Get In Touch
          </h5>

          <h2
            className="text-4xl font-bold mt-2 leading-tight"
            style={{
              borderBottom: "3px solid rgba(0, 0, 0, .1)",
              borderImage:
                "linear-gradient(to right, rgba(0, 0, 0, .2), rgba(0, 0, 0, .5)) 1",
            }}
          >
            LET'S TALK ABOUT YOUR IDEAS
          </h2>

          <div className="mt-6 space-y-3 text-gray-700 text-lg">
            <p>📞 +7 (200) 600-30-30</p>

            <p>
              📧{" "}
              <a
                href="mailto:info@ruizarch.com"
                className="text-black hover:underline"
              >
                info@ruizarch.com
              </a>
            </p>
            <p></p>

            <p>📍 New York - 1800 Wazee Street, Suite 300 NY, NY 80202</p>
          </div>
        </div>

        <div className="bg-transparent">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div>
              <label className="block font-medium">
                MESSAGE <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter Your Name Here"
                className="w-full border-b border-black focus:outline-none py-2 h-24"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 w-5 h-5 accent-lime-500"
              />
              <label htmlFor="terms" className="text-gray-700">
                Accept the terms and conditions of personal data.
              </label>
            </div>

            <button
              type="submit"
              className="bg-lime-400 text-black font-semibold py-3 px-6 text-lg w-full md:w-auto hover:bg-lime-500 transition"
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
