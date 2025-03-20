import React from "react";
import Hero from "../components/Hero";
import Scroll from "../components/Scroll";
import OfficeHighlight from "../components/OfficeHighlight";
import ProcessSteps from "../components/ProcessSteps";
import CommunitySection from "../components/CommunitySection";
import ContactForm from "../components/ContactForm";
const Home = () => {
  return (
    <>
      <Hero />
      <Scroll />
      <OfficeHighlight />
      <ProcessSteps />
      <CommunitySection />
      <ContactForm />
    </>
  );
};

export default Home;
