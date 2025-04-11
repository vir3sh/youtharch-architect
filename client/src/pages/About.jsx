import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactInfo from "../components/ContactInfo";
import TeamSection from "../components/TeamSection";

const About = () => {
  return (
    <>
      <Breadcrumb title={"ABOUT"} />
      <ContactInfo />
      <TeamSection />
    </>
  );
};

export default About;
