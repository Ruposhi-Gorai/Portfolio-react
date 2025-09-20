import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Social() {
  return (
    <>
      <div className="flex gap-1 md:gap-5 px-5 ">
        <div className=" rounded-full p-2 md:p-3 mt-5 shadow-[0_0_10px_2px_rgba(6, 182, 212, 0.5)] hover:shadow-[0_0px_20px_5px_rgba(6,182,212,0.5)] transition-all duration-300">
          <a href="https://github.com/Ruposhi-Gorai" target="_blank"><FaGithub /></a>
        </div>
        <div className="  rounded-full p-2  md:p-3  mt-5 shadow-[0_0_10px_2px_rgba(6, 182, 212, 0.5)] hover:shadow-[0_0px_20px_5px_rgba(6,182,212,0.5)] transition-all duration-300">
          <a href="https://www.linkedin.com/in/ruposhigorai27062002/" target="_blank"><FaLinkedinIn /></a>
        </div>
        <div className=" rounded-full p-2 md:p-3  mt-5 shadow-[0_0_10px_2px_rgba(6, 182, 212, 0.5)] 
        hover:shadow-[0_0px_20px_5px_rgba(6,182,212,0.5)] transition-all duration-300">
          <a href=""><FaDiscord /></a>
        </div>
      </div>
    </>
  );
}
