import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "../../assets/css/home.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-scroll";
import Social from "../social/Social";

const isMobile = () => window.innerWidth <= 768;

export default function Intro() {
  const [duration, setDuration] = useState(0.5);

  useEffect(() => {
    if (isMobile()) {
      setDuration(0.2); // longer duration for mobile
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: duration, ease: "easeOut" },
    },
  };
  const itemVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const handleClick = () => {
    toast.success("Thank you!😊", {
      position: "top-right",
      autoClose: 3000, // closes in 3 sec
      hideProgressBar: false,
      theme: "dark",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="font-pop py-2 md:mt-8 text-center md:text-start"
    >
      <motion.h3
        variants={itemVariants}
        className="text-[36px] md:text-8xl px-2 md:py:2 font-light md:pb-5 text-gray-200"
      >
        Hi I'm
      </motion.h3>

      <motion.div
        variants={itemVariants}
        className="text-[50px] md:text-8xl text-gray-900 sm:leading-20 font-light shimmer-text px-2 md:py-3"
      >
        RUPOSHI GORAI
      </motion.div>

      <motion.div
        variants={itemVariant}
        className="text-[18px] font-light font-pop md:text-2xl text-gray-500 sm:my-5 px-2 py-2"
      >
        <ReactTyped
          strings={["A Full Stack Developer, based in India"]}
          typeSpeed={50}
          startDelay={1500}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row px-2 sm:gap-4 gap-2 w-full md:items-start items-center max-w-xl"
      >
        <button className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-gray-100 w-40 md:w-auto font-pop  py-2 md:py-2 mt-5 px-3 md:px:6 rounded-full cursor-pointer hover:scale-105 transition-transform">
          <Link
            to="projects" // scrolls to section with id="projects"
            smooth={true}
            duration={600}
            offset={-64} // adjust for navbar height
            className="cursor-pointer"
          >
            View My Works
          </Link>
        </button>
        <button
          className="bg-gradient-to-r border w-40 md:w-auto border-cyan-400 shadow-[0_4px_12px_rgba(6,182,212,0.5)]  hover:shadow-[0_0_25px_5px_rgba(6, 182, 212, 0.5)] text-white py-2 md:py-2 mt-5 px-2 md:px-6 rounded-full cursor-pointer hover:scale-105 transition-transform"
          onClick={handleClick}
        >
          Hire me
        </button>
        <Social />

        <ToastContainer />
      </motion.div>
    </motion.div>
  );
}
