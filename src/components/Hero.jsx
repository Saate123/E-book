import React from "react";
import HeroSection from "./HeroSection";
import { heroSections } from "../data/HeroData";

function HeroPage() {
  return (
    <>
      {heroSections.map((section) => (
        <HeroSection key={section.id} section={section} />
      ))}
    </>
  );
}

export default HeroPage;
