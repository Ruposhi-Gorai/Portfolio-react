import React from "react";
import NavSection from "./NavSection";
import HeroSection from "./HeroSection";
import "../../assets/css/home.css";
import video from "../../assets/video/8.mp4";

export default function HomePage() {
  return (
    <>
      <div id="home" className=" bg-gradient-to-b from-black via-gray-900 to-gray-700 ">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover "
        >
          <source src={video} type="video/mp4" />
        </video> */}
        <div className=" bg-black md:h-screen mb-20 md:mb-2">
          {/* <NavSection /> */}
          <HeroSection />
        </div>
      </div>
    </>
  );
}
