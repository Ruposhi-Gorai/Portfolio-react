import React from "react";
import NavSection from "./NavSection";
import HeroSection from "./HeroSection";
import "../../assets/css/home.css";

export default function HomePage() {
  return (
    <>
    <div id="home" className="pb-20">
      <NavSection />
      <HeroSection />
      </div>
    </>
  );
}
