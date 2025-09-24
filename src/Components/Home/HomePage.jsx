import React from "react";
import NavSection from "./NavSection";
import HeroSection from "./HeroSection";
import "../../assets/css/home.css";
import video from "../../assets/video/8.mp4";

export default function HomePage() {
  return (
    <>
      <div id="home" className="h-screen ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover "
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70">
          {/* <NavSection /> */}
          <HeroSection />
        </div>
      </div>
    </>
  );
}
