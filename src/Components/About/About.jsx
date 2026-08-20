import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/about.css";
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa";
import Social from "../social/Social";
import image from "../../assets/images/image.png";
import { TypeOutlineIcon } from "lucide-react";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { motion } from "framer-motion";

export default function () {
  // const itemVariants = {
  //   hidden: {  opacity: 0 }, // start from left
  //   visible: {

  //     opacity: 1,
  //     transition: { duration: 0.8, ease: "linear" },
  //   },
  // };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // slightly lower + invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <div id="about">
        {/* <motion.h2
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-5xl  font-sans  text-gray-300 font-bold p-6 tracking-[4px] text-center sm:text-4xl"
        >
          About Me
        </motion.h2> */}
        <div className="flex flex-col  md:flex-row gap-5 justify-center  items-center  px-4 md:px-10 w-full ">
          {/* <div className="w-full md:basis-[40%] px-5 lg:px-10 lg:mx-10 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              className="overflow-hidden hover:scale-105 transition-all duration-300 rounded-2xl "
            >
              <img src={image} alt="" className="w-full block" />
            </motion.div>
          </div> */}
          <div className="w-full lg:w-[70%] lg:mx-10">
            {/* <h1 className=" text-2xl  xl:text-4xl text-gray-200  justify-center md:justify-start items-center flex gap-2 px-5 lg:px-10">
              Know Me
              <LiaLaptopCodeSolid
                size={60}
                className="text-cyan-700  "
              />{" "}
            </h1> */}
            <motion.div 
               initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            className="sm:w-[100%] xl:w-[80%] mx-auto md:mt-6 flex justify-center text-gray-400  px-4 md:px-6 text-[16px] xl:text-[18px] font-light lg:py-10 md:my-10 rounded-full   group transition duration-300  ">
             <section className="max-w-4xl mx-auto py-20 px-6">
  <p className="text-violet-400 uppercase tracking-[0.2em] text-lg mb-3">
    About Me
  </p>

  <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
    I am a Full-Stack Developer
   
  </h2>

  <div className="space-y-5 text-lg">
    <div className="flex items-center gap-4">
      <span className="text-2xl">☕</span>
      <p className="text-gray-300">
        I love building web experiences that are fast, accessible, and interactive.
      </p>
    </div>

    <div className="flex items-center gap-4">
      <span className="text-2xl">🎨</span>
      <p className="text-gray-300">
        Obsessed with clean UI and meaningful interactions.
      </p>
    </div>

    <div className="flex items-center gap-4">
      <span className="text-2xl">⚛️</span>
      <p className="text-gray-300">
        Building with React, Tailwind & modern web technologies.
      </p>
    </div>

    <div className="flex items-center gap-4">
      <span className="text-2xl">🚀</span>
      <p className="text-gray-300">
        Growing into a better full-stack engineer, day by day.
      </p>
    </div>

    <div className="flex items-center gap-4">
      <span className="text-2xl">✨</span>
      <p className="text-gray-300">
        I believe the smallest details create the biggest experiences.
      </p>
    </div>
  </div>
</section>

            </motion.div>
           
          </div>
        </div>
      </div>
    </>
  );
}
