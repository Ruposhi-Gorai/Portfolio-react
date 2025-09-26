import React, { useState } from "react";

import skillData from "./skills";
import { useInView } from "react-intersection-observer";

import SkillButton from "./SkillButton";
import image from "../assets/images/3heart.png";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

export default function Skills() {
  const [skillMap, setSkillMap] = useState(skillData);

  const frontEnd = skillMap.filter((v) => v.category === "frontend");
  const backEnd = skillMap.filter((v) => v.category === "backend");
  const frameWork = skillMap.filter((v) => v.category === "framework");
  const tools = skillMap.filter((v) => v.category === "tools");
  const [submitted, setSubmitted] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("thanks for suggestion!");
    e.target.value.reset();
  };
  return (
    <>
      <ToastContainer />
      <div id="skills" className=" sm:my-2 py-5 sm:h-screen sm:pb-5">
        <h1 className="md:text-5xl  font-sans font-medium text-4xl text-gray-300 tracking-[4px] text-center  p-10 md:py-5 md:my-5 ">
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

        <div className="flex flex-wrap justify-center  items-center sm:mt-2  text-gray-300 w-full p-5">
          <div className="w-full lg:w-[1300px] md:px-1 gap-3 md:gap-5 justify-center  flex flex-wrap">
            {skillData.map((v, i) => {
              return <SkillButton item={v} />;
            })}
          </div>
        </div>
        <div className="container mx-auto px-6 text-center mt-10 py-10 md:mt-20">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
            What skill should I learn next?
            <img src={image} className="inline w-[38px]" />
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row justify-center items-center gap-4 md:w-[500px] mx-auto"
          >
            {/* Input box */}
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your suggestion..."
              className="w-full md:flex-1 px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-500"
            />

            {/* Submit button */}
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
