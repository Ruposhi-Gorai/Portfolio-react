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
      <div id="about" className=" mb-10">
        <motion.h2
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-5xl  font-sans  text-gray-300 font-medium p-6 tracking-[4px] text-center sm:text-4xl"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col  md:flex-row gap-5 pt-5 justify-center items-center md:my-20 px-4 md:px-10 w-full ">
          <div className="w-full md:basis-[40%] px-5 lg:px-10 lg:mx-10 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              className="overflow-hidden hover:scale-105 transition-all duration-300 rounded-2xl "
            >
              <img src={image} alt="" className="w-full block" />
            </motion.div>
          </div>
          <div className="w-full lg:w-[50%] lg:mx-10">
            <h1 className=" text-2xl  xl:text-4xl text-gray-200  justify-center md:justify-start items-center flex gap-2 px-5 lg:px-10">
              Know Me
              <LiaLaptopCodeSolid
                size={60}
                className="text-cyan-700  "
              />{" "}
            </h1>
            <motion.div 
               initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            className="sm:w-[100%] xl:w-[90%] mt-6 mx-3 text-gray-400  px-4 md:px-6 text-[16px] xl:text-[18px] font-light bg-[#151616a2] py-10 md:my-10 rounded-2xl shadow-[0_0_5px_0px_rgba(0,255,255,0.1)] group transition duration-300 hover:scale-102 hover:shadow-[0_10px_30px_0_rgba(6,182,212,0.5)]">
              <p>
                Hi, I’m Ruposhi, a curious developer who loves exploring new
                tech and building something impactful. Beyond coding, I love
                exploring new skills, hobbies and building meaningful
                connections.
              </p>
              <div className="py-5">
                <h2 className="text-xl font-medium py-1 text-cyan-400">
                  WHO AM I?
                </h2>
                <ul className=" custom-dash list-disc ps-6 md:leading-[38px]">
                  <li> Passionate about technology</li>
                  <li>Upskilling everyday to become a better developer</li>
                  <li>
                    Love to solve problems and build things that make a
                    difference
                  </li>
                  <li>
                    Love to connect and collaborate with like-minded people
                  </li>
                  <li>Love to learn new things and explore new technologies</li>
                  <li>Quick learner and team player</li>
                </ul>
              </div>
            </motion.div>
            <div>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
