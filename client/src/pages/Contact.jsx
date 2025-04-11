import React from "react";
import contactImage from "../assets/img/photo/2.jpg";
import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <>
      <Breadcrumb title={"CONTACT"} />
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section: Address and Heading */}
            <div>
              <h2 className="text-3xl font-bold uppercase mb-6">
                Let’s Build Together!
              </h2>
              <div>
                <h4 className="font-semibold uppercase text-gray-600">
                  Address
                </h4>
                <p className="mt-2 text-gray-700">
                  Youth Arch Architects <br />
                  Panvel, Navi Mumbai <br />
                  Maharashtra - 410206
                </p>
              </div>
            </div>

            {/* Right Section: Contact Card */}
            <div className="relative lg:absolute lg:right-[60px] lg:top-[40px]  bg-white">
              <img
                src={contactImage}
                alt="Building"
                className="w-4/5 mx-auto h-40 object-cover  shadow-md"
              />
              <div
                className="bg-white shadow-lg rounded-lg p-6 mt-4 "
                style={{
                  padding: "30px",
                  border: "5px solid rgb(229, 229, 229)",
                  margin: "25px",
                  borderImage:
                    "repeating-linear-gradient(-45deg, transparent, transparent 1px, rgb(229, 229, 229) 1px, rgb(229, 229, 229) 3px) 5",
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <h4 className="text-md font-semibold uppercase mb-2">
                  Headquarters
                </h4>
                <p className="text-gray-500">
                  Panvel, Navi Mumbai, Maharashtra 410206
                </p>
                <h4 className="text-md font-semibold uppercase mt-4 mb-2">
                  Phone
                </h4>
                <p className="text-gray-500">+91 99675 84305</p>
                <h4 className="text-md font-semibold uppercase mt-4 mb-2">
                  Email
                </h4>
                <p className="text-gray-500">admin@yaarchitects.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 h-96 w-full">
          <iframe
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.5140363894534!2d73.10409231041189!3d18.993290982120065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e83e6afc1679%3A0x8af19ba5f2b35a88!2sYouth%20Arch!5e1!3m2!1sen!2sin!4v1742539619960!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Contact;
