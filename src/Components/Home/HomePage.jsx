import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "../../assets/css/home.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-scroll";
import Social from "../social/Social";
import profilePic from "../../assets/images/pic6.png";
import botPic from "../../assets/images/pic4.png";
import resumePdf from "../../assets/RuposhiGorai.pdf"; // adjust ../ if needed

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
    toast.success("Thank you!", {
      position: "top-right",
      autoClose: 3000, // closes in 3 sec
      hideProgressBar: false,
      theme: "colored",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
<section
  id="/"
  className="relative min-h-screen bg-black overflow-hidden flex items-center bg-grid z-2"
>
  <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0f] to-black"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="grid lg:grid-cols-2 md:gap-20  items-center">

      {/* LEFT */}
      <div className="flex flex-col py-10 justify-center">

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .7 }}
      >

        <div class="inline-flex my-4 items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm">
  {/* <!-- Animated status dot --> */}
  <span class="relative flex h-3 w-3 items-center justify-center">
    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 duration-2000"></span>
    <span class="relative inline-flex h-2 w-2  md:h3 md:w3 rounded-full bg-green-400"></span>
  </span>

  <span class="text-sm md:text-md font-medium text-green-300">
    Available for Hire
  </span>
</div>
        <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
          Hi, I'm
          <br />

          <span className="bg-gradient-to-r  from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-6  text-7xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl font-display">
            Ruposhi
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold font-[cursive]  text-gray-300 my-10 md:my-8">
          I build fast, accessible & interactive
          <span className="text-indigo-400"> web </span>
          experiences.
        </h2>

        <p className="text-gray-300 text-md md:text-xl leading-8 mt-8 max-w-xl">
          Full Stack Developer crafting performant web experiences with React, Node & <span className="text-emerald-400">MongoDB</span>.
        </p>

        <div className="flex gap-5 mt-10 text-white">

          <Link
            to="projects"
            className="bg-indigo-600 hover:bg-indigo-500 hover:cursor-pointer px-4 md:px-4 py-2 md:py-2 flex items-center justify-center rounded-full font-medium transition"
          >
            View My Work
          </Link>

          <a
            href={resumePdf}
            target="_blank"
            className="border border-gray-700 hover:border-indigo-400 px-4 md:px-4 py-2 md:py-2 flex items-center justify-center rounded-full transition"
          >
            Resume
          </a>

        </div>
       

    

      </motion.div>
       </div>

      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .7 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute -top-40 left-20 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[150px] shimmer"></div>

<div className="absolute bottom-0 right-0 w-[550px] h-[450px] rounded-full bg-indigo-500/20 blur-[150px] shimmer"></div>


          {/* Glow */}

          <div className="absolute inset-0 rounded-[40px] bg-indigo-600 blur-3xl opacity-20"></div>
<div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

<div className="absolute bottom-0 -left-10 w-60 h-60 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="relative md:pt-10 rounded-[35px]  overflow-hidden hover:cursor-pointer ">

            <img
              src={profilePic}
              alt=""
              className="w-[500px] h-[500px] object-contain hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

    </>

  );
}
