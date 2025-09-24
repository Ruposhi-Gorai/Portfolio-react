import React, { useState } from "react";

import skillData from "./skills";
import { useInView } from "react-intersection-observer";

import SkillButton from "./SkillButton";
import { motion } from "framer-motion";



export default function Skills() {
  const [skillMap, setSkillMap] = useState(skillData);

  const frontEnd = skillMap.filter((v) => v.category === "frontend");
  const backEnd = skillMap.filter((v) => v.category === "backend");
  const frameWork = skillMap.filter((v) => v.category === "framework");
  const tools = skillMap.filter((v) => v.category === "tools");


  return (
    <>
      <div id="skills"   className=" sm:my-20 py-10 sm:h-screen sm:pb-10">
        <h1 className="md:text-7xl  font-sans font-medium text-4xl text-gray-300 tracking-[8px] text-center  p-10 md:py-10 md:my-5 ">
          My Skills
        </h1>

        {/* <div className="flex flex-wrap justify-center text-gray-300 gap-10 p-5">
          <div className="card bg-[#080808] border-[#073030] border-s-[1px] shadow-2xl p-3 md:p-10 rounded-2xl w-full md:w-[38%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_15px_#14b8a6]">
            <h2 className="text-2xl px-5 font-semibold text-teal-400">
              Frontend
            </h2>
            <div className="flex flex-wrap text-[16px] gap-5 px-4 py-5">
              {frontEnd.map((v, i) => {
                return <SkillButton item={v} key={i} />;
              })}
            </div>
          </div>
          <div className="card bg-[#080808] border-[#073030] border-s-[1px] shadow-2xl p-3 md:p-10 rounded-2xl w-full md:w-[38%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_15px_#14b8a6]">
            <h2 className="text-2xl px-5 text-teal-400">Backend</h2>
            <div className="flex flex-wrap text-[16px] gap-5  px-4 py-5">
              {backEnd.map((v, i) => {
                return <SkillButton item={v} key={i} />;
              })}
            </div>
          </div>
          <div className="card bg-[#080808] border-[#073030] border-s-[1px] shadow-2xl p-3 md:p-10 rounded-2xl w-full md:w-[38%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_15px_#14b8a6] ">
            <h2 className="text-2xl px-5 text-teal-400">Frameworks</h2>
            <div className="flex flex-wrap text-[16px] gap-5  px-4 py-5">
              {frameWork.map((v, i) => {
                return <SkillButton item={v} key={i} />;
              })}
            </div>
          </div>
          <div className="card bg-[#080808] border-[#073030] border-s-[1px] shadow-2xl p-3 md:p-10 rounded-2xl w-full md:w-[38%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_15px_#14b8a6]">
            <h2 className="text-2xl px-5 text-teal-400">Tools & others</h2>
            <div className="flex text-[16px] gap-5  flex-wrap px-4 py-5">
              {tools.map((v, i) => {
                return <SkillButton item={v} key={i} />;
              })}
            </div>
          </div>
        </div> */}

        <div className="flex flex-wrap justify-center  items-center sm:mt-20  text-gray-300 w-full p-8">
          <div className="w-[1000px] gap-3 md:gap-5 justify-center  flex flex-wrap">
            {skillData.map((v, i) => {
              return (
      
                  <SkillButton item={v}  />
             
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
