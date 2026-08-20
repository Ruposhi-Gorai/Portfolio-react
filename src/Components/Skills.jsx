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
<section id="skills" className="py-20">
  <div className="w-full px-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-violet-400 text-sm mb-3">
          MY TOOLKIT
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills & Technologies
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          The technologies I use to design, build and ship modern web
          applications.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          {
            icon: <FaCode />,
            title: "Frontend",
            skills: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Next.js",
              "Tailwind",
              "Bootstrap",
            ],
          },
          {
            icon: <FaDatabase />,
            title: "Backend",
            skills: ["Node.js", "Express.js", "MongoDB", "NoSQL"],
          },
          {
            icon: <FaRocket />,
            title: "Tools",
            skills: [
              "Git",
              "Bitbucket",
              "Firebase",
              "Vercel",
              "AWS",
              "CI/CD",
              "Ubuntu",
            ],
          },
          {
            icon: <FaChartLine />,
            title: "Performance",
            skills: ["SEO", "Optimization", "Analytics"],
          },
        ].map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl
                       border border-white/10 bg-white/5 backdrop-blur-md
                       p-6 transition-all duration-300
                       hover:border-violet-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
          >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl group-hover:bg-violet-500/20 transition" />

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-violet-500/15 flex items-center justify-center text-2xl text-violet-300 mb-5 group-hover:scale-110 transition">
              {category.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-5">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-xs font-medium
                             bg-white/8 border border-white/10 text-gray-300
                             hover:border-violet-400 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <p className="text-gray-500 italic text-sm md:text-base">
          “Always learning. Always building.”
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>

    </>
  );
}
