import React from "react";
import { ReactTyped } from "react-typed";
import "../../assets/css/home.css";

export default function () {
  return (
    <>
      <div className=" font-pop py-2 mt-8 ">
        <h3 className=" font-pop text-[40px] text-5xl md:text-8xl p-2 text-gray-200">Hi I'm</h3>
        <div className=" text-6xl md:text-8xl text-gray-900 font-pop shimmer-text  py-3 textColor">
          RUPOSHI GORAI
        </div>
        <div className=" text-[18px] md:text-3xl mb-5 py-2 ">
          <ReactTyped
            strings={[
              "A Software Developer",
              "FrontEnd Developer",
              "Backend Developer",
              "UI/UX Designer",
              "MERN Stack Developer",
              "Problem Solver",
            ]}
            typeSpeed={40}
            loop={true}
          />
        </div>
        <div className="flex flex-col md:flex-row mx-5 md:mx-0 gap-3">
        <button className="bg-gradient-to-r from-[#11c5cb] font-pop to-[#02795f] text-white py-3 md:py-2 mt-5 px-4 rounded-full cursor-pointer hover:scale-105 transition-transform">
          View My Works
        </button>
        <button className="bg-gradient-to-r border border-teal-400 shadow-[0_0_25px_5px_rgba(0,255,255,0.2)]  text-white py-3 md:py-2 mt-5 px-4 rounded-full cursor-pointer hover:scale-105 transition-transform">
          Hire me 
        </button>
        </div>
      </div>
    </>
  );
}
