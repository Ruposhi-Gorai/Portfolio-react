import React from "react";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa6";
import { SiReactbootstrap } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaBitbucket } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="min-h-screen  text-gray-300 py-10">
        <h1 className="md:text-5xl text-4xl font-light  text-[#00FFFF] tracking-[8px] text-center  p-10 md:my-5 ">My Skills</h1>
        <div className="flex flex-wrap justify-center gap-10 p-5">
          <div className="card bg-[#43485734] shadow-2xl p-5 md:p-10 rounded-2xl w-full md:w-[40%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_25px_#14b8a6]">
            <h2 className="text-2xl px-5 font-semibold text-teal-300">
              Frontend
            </h2>
            <div className="flex text-3xl md:text-5xl gap-5 px-5 py-10">
              <IoLogoHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
              <FaReact />
              <MdOutlineSettingsApplications />
              <SiRedux />
            </div>
          </div>
          <div className="card bg-[#43485734] shadow-2xl p-5 md:p-10 rounded-2xl w-full md:w-[40%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_25px_#14b8a6]">
            <h2 className="text-2xl px-5 text-teal-300">Backend</h2>
            <div className="flex text-3xl md:text-5xl gap-5  px-5 py-10">
              <FaNodeJs />
              <SiExpress />
              <DiMongodb />
            </div>
          </div>
          <div className="card bg-[#43485734] shadow-2xl p-5 md:p-10 rounded-2xl w-full md:w-[40%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_25px_#14b8a6]">
            <h2 className="text-2xl px-5 text-teal-300">Frameworks</h2>
            <div className="flex text-3xl md:text-5xl gap-5  px-5 py-10">
              <RiNextjsLine />
              <RiTailwindCssFill />
              <MdOutlineSettingsApplications />
              <FaBootstrap />
              <SiReactbootstrap />
            </div>
          </div>
          <div className="card bg-[#43485734] shadow-2xl p-5 md:p-10 rounded-2xl w-full md:w-[40%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_25px_#14b8a6]">
            <h2 className="text-2xl px-5 text-teal-300">Tools & others</h2>
            <div className="flex text-3xl md:text-5xl gap-5  flex-wrap px-5 py-10">
              <FaGitAlt />
              <VscVscode />
              <FaBitbucket />
              <IoLogoVercel />
              <SiNetlify />
              <SiVite />
              <SiPostman />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
