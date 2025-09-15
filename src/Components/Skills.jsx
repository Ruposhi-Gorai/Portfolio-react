import React, { useState } from "react";

import skillData from "./skills";
import SkillButton from "./SkillButton";

export default function Skills() {
  const [skillMap, setSkillMap] = useState(skillData);
  const frontEnd = skillMap.filter((v) => v.category === "frontend");
  const backEnd = skillMap.filter((v) => v.category === "backend");
  const frameWork = skillMap.filter((v) => v.category === "framework");
  const tools = skillMap.filter((v) => v.category === "tools");

  return (
    <>
      <div className="min-h-screen  text-gray-300 py-10">
        <h1 className="md:text-5xl text-4xl font-light  text-[#00FFFF] tracking-[8px] text-center  p-10 md:my-5 ">
          My Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-10 p-5">
          <div className="card bg-[#43485734] shadow-2xl p-5 md:p-10 rounded-2xl w-full md:w-[38%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_25px_#14b8a6]">
            <h2 className="text-2xl px-5 font-semibold text-teal-300">
              Frontend
            </h2>
            <div className="flex flex-wrap text-[16px] gap-5 px-5 py-5">
              {frontEnd.map((v, i) => {
                return <SkillButton item={v} />;
              })}
            </div>
          </div>
          <div className="card bg-[#43485734] shadow-2xl p-5 md:p-10 rounded-2xl w-full md:w-[38%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_25px_#14b8a6]">
            <h2 className="text-2xl px-5 text-teal-300">Backend</h2>
            <div className="flex flex-wrap text-[16px] gap-5  px-5 py-5">
              {backEnd.map((v, i) => {
                return <SkillButton item={v} />;
              })}
            </div>
          </div>
          <div className="card bg-[#43485734] shadow-2xl p-5 md:p-10 rounded-2xl w-full md:w-[38%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_25px_#14b8a6]">
            <h2 className="text-2xl px-5 text-teal-300">Frameworks</h2>
            <div className="flex flex-wrap text-[16px] gap-5  px-5 py-5">
              {frameWork.map((v, i) => {
                return <SkillButton item={v} />;
              })}
            </div>
          </div>
          <div className="card bg-[#43485734] shadow-2xl p-5 md:p-10 rounded-2xl w-full md:w-[38%] hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_25px_#14b8a6]">
            <h2 className="text-2xl px-5 text-teal-300">Tools & others</h2>
            <div className="flex text-[16px] gap-5  flex-wrap px-1 py-5">
              {tools.map((v, i) => {
                return <SkillButton item={v} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
