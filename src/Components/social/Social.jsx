import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Social() {
  return (
    <>
      <div className="flex gap-5 px-5">
        <div className="bg-[#959dcc25] rounded-full p-3 mt-5 shadow-[0_0_10px_2px_rgba(0,255,255,0.2)] hover:shadow-[0_0_15px_5px_#14b8a6] transition-all duration-300">
          <a href="https://github.com/Ruposhi-Gorai" target="_blank"><FaGithub /></a>
        </div>
        <div className="bg-[#959dcc25] rounded-full p-3 mt-5 shadow-[0_0_10px_2px_rgba(0,255,255,0.2)] hover:shadow-[0_0_15px_5px_#14b8a6] transition-all duration-300">
          <a href="https://www.linkedin.com/in/ruposhigorai27062002/" target="_blank"><FaLinkedinIn /></a>
        </div>
        <div className="bg-[#959dcc25] rounded-full p-3 mt-5 shadow-[0_0_10px_2px_rgba(0,255,255,0.2)] hover:shadow-[0_0_15px_5px_#14b8a6] transition-all duration-300">
          <a href=""><FaDiscord /></a>
        </div>
      </div>
    </>
  );
}
