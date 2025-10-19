import React, { useState } from "react";

import skillData from "./skills";
import { useInView } from "react-intersection-observer";

import SkillButton from "./SkillButton";
import image from "../assets/images/3heart.png";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { FaChartLine, FaCode, FaDatabase, FaMobile, FaPalette, FaRocket } from "react-icons/fa6";

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
      {/* <div id="skills" className=" sm:my-2 py-5 sm:h-screen sm:pb-5">
        <h1 className="md:text-5xl  font-sans font-medium text-4xl text-gray-300 tracking-[4px] text-center  p-10 md:py-5 md:my-5 ">
          My Skills
        </h1>


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
        
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your suggestion..."
              className="w-full md:flex-1 px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-500"
            />


            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div> */}
        <section id="skills" className=" flex items-start justify-center py-20 ">
        <div className="w-full  mx-auto px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                   <h1 className="md:text-5xl  font-sans font-bold text-4xl text-gray-300 tracking-[4px] text-center  pb-10   ">
          My Skills
        </h1>
            <div className="grid md:grid-cols-4 my-10  mx-auto gap-6 w-[80%] ">
              {[
                { icon: <FaCode />, title: 'Frontend Development', skills: ['Html', 'CSS', 'Javascript','React.js', 'Next.js','Bootstrap', 'Tailwind CSS'] },
                { icon: <FaDatabase />, title: 'Backend Development', skills: ['Node.js','Express.js', 'MongoDB', 'noSql'] },
                { icon: <FaRocket />, title: 'Other tools & Development', skills: ['AWS', 'CI/CD', 'Git',  'Vercel','Firebase', 'Ubuntu','Bitbucket' ] },
                { icon: <FaChartLine />, title: 'Performance', skills: ['SEO', 'Optimization', 'Analytics'] }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className=" p-8 rounded-3xl border flex flex-col group items-center text-center border-indigo-500/50 hover:bg-indigo-500/60 transition-all"
                >
                  <div className="text-4xl text-gray-100 group-hover:rotate-360 transition-all mb-4">{category.icon}</div>
                  <h3 className="text-2xl text-gray-100 font-bold mb-5">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-500/20 rounded-full text-sm text-white">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
