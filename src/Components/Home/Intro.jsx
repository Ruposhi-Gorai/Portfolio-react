import React from "react";
import { ReactTyped } from "react-typed";

export default function () {
  return (
    <>
      <div className="text-center font-sans pt-10 mt-8 ">
        <h3 className="text-center text-[18px]">Hello I'm</h3>

        <div className=" text-center text-[cyan-400] py-1 textColor">
          RUPOSHI GORAI
        </div>
        <div className=" text-2xl md:text-3xl mb-5 ">
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
        <button className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-2 mt-5 px-4 rounded-full cursor-pointer hover:scale-105 transition-transform">
          View My Works
        </button>
      </div>
    </>
  );
}
