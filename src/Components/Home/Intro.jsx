import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "../../assets/css/home.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-scroll";

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
        className="text-[40px] md:text-8xl px-2 md:py:2 font-light text-gray-200"
      >
        Hi I'm
      </motion.h3>

      <motion.div
        variants={itemVariants}
        className="text-[60px] md:text-8xl text-gray-900 leading-20 font-light shimmer-text px-2 md:py-3"
      >
        RUPOSHI GORAI
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="text-[18px] font-light md:text-2xl mb-5 px-2 py-2"
      >
        <ReactTyped
          strings={[
            "Full Stack Developer",
            "Software Developer",
            "FrontEnd Developer",
            "Backend Developer",
            "UI/UX Designer",
            "MERN Stack Developer",
          ]}
          typeSpeed={50}
          loop={true}
        />
        
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row gap-4 w-full md:items-start items-center max-w-md"
      >
        <button className="bg-gradient-to-r  from-teal-400 via-cyan-500 to-teal-700 text-white w-40 md:w-auto font-pop  py-3 md:py-2 mt-5 px-4 md:px:6 rounded-full cursor-pointer hover:scale-105 transition-transform">
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
        {/* <button className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-600 text-white font-medium shadow-lg hover:scale-105 transition">
  View My Works
</button> */}
        <button
          className="bg-gradient-to-r border w-40 md:w-auto border-teal-400 shadow-[0_0_25px_5px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.5)] text-white py-3 md:py-2 mt-5 px-4 md:px-6 rounded-full cursor-pointer hover:scale-105 transition-transform"
          onClick={handleClick}
        >
          Hire me
        </button>
         
        <ToastContainer />
      </motion.div>
    </motion.div>
  );
}
