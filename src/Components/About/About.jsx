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
  const itemVariants = {
    hidden: { x: -100, opacity: 0 }, // start from left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "linear" },
    },
  };
  return (
    <>
      <div id="about" className="md:mt-15">
        <h2 className="text-3xl  text-[#00FFFF] font-light p-6 tracking-[8px] text-center sm:text-4xl">
          About Me
        </h2>
        <div className="flex flex-col  md:flex-row gap-8 pt-5 justify-center items-center md:my-20 px-4 md:px-10 w-full ">
          <div className="w-full lg:w-[40%] lg:ps-10 lg:mx-10 flex items-center justify-center">
            {/* <div className="  overflow-hidden hover:scale-105 transition-all duration-300 rounded-2xl hover:shadow-[0_0_25px_#14b8a6]">
            <img src={image} alt="" className="w-full block" />
          </div> */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible" // triggers when scrolled into view
              viewport={{ once: true, amount: 0.3 }} // animate only once, 30% visible
              className="overflow-hidden hover:scale-105 transition-all duration-300 rounded-2xl hover:shadow-[0_0_25px_#14b8a6]"
            >
              <img src={image} alt="" className="w-full block" />
            </motion.div>
          </div>
          <div className="w-full lg:w-[50%]  lg:mx-10">
            <h1 className=" text-2xl  xl:text-4xl text-gray-200  text-center items-center flex gap-2 px-5 lg:px-10">
              Know Me{" "}
              <LiaLaptopCodeSolid
                size={60}
                className="text-teal-700  drop-shadow-[0_0_20px_#14b8a6] "
              />{" "}
            </h1>
            <div className="md:w-[90%] mt-6 mx-3 text-gray-300  px-4 md:px-6 text-[16px] md:text-[18px] font-light bg-[#43485734] py-10 md:my-10 rounded-2xl shadow-lg group transition duration-300 hover:scale-102 hover:shadow-[0_0_25px_#14b8a6] ">
              <p>
                Hi, I’m Ruposhi, a curious developer who loves exploring new
                tech and building something impactful. Beyond coding, I love
                exploring new skills, hobbies and building meaningful
                connections.
              </p>
              <div className="py-5">
                <h2 className="text-xl font-bold py-1 text-teal-300">
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
            </div>
            <div>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
