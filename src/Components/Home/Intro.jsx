import React from "react";
import { ReactTyped } from "react-typed";
import "../../assets/css/home.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";


export default function Intro() {
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
      transition: { duration: 0.5, ease: "easeOut" },
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
      className="font-pop py-2 mt-8"
    >
      <motion.h3
        variants={itemVariants}
        className="text-[40px] md:text-8xl p-2 font-light text-gray-200"
      >
        Hi I'm
      </motion.h3>

      <motion.div
        variants={itemVariants}
        className="text-6xl md:text-8xl text-gray-900 font-light shimmer-text px-2 py-3"
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
        className="flex flex-col md:flex-row mx-5 md:mx-0 px-2 gap-4"
      >
        <button className="bg-gradient-to-r from-[#11c5cb] font-pop to-[#02795f] text-white py-3 md:py-2 mt-5 px-4 rounded-full cursor-pointer hover:scale-105 transition-transform">
          View My Works
        </button>
        <button
          className="bg-gradient-to-r border border-teal-400 shadow-[0_0_25px_5px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.5)] text-white py-3 md:py-2 mt-5 px-4 rounded-full cursor-pointer hover:scale-105 transition-transform"
          onClick={handleClick}
        >
          Hire me
        </button>
              <ToastContainer />
      </motion.div>
    </motion.div>
  );
}
