import React from "react";
import Navbar from "./Navbar";
import Lines from "./Lines";
import './mystyle.css'
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import DesignSection from "./DesignSection";
import Carousal from "./example";
import Contactdiv from "./Contactdiv";
import Service from "./Service";

export default function TaskApp() {
  return (
    <>
      <Lines />
      <Navbar />
      <HeroSection/>
      <DesignSection/>
      <Carousal></Carousal>
      <Contactdiv/>
      <Service/>
      <Footer/>
    </>
  );
}
