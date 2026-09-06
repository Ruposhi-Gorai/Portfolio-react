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

  <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">

    <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-2">

      {/* LEFT */}
      <div className="flex flex-col justify-center py-8 sm:py-10">

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .7 }}
      >

        <div class="my-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 backdrop-blur-sm sm:my-4 sm:px-4 sm:py-2">
  {/* <!-- Animated status dot --> */}
  <span class="relative flex h-3 w-3 items-center justify-center">
    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 duration-2000"></span>
    <span class="relative inline-flex h-2 w-2  md:h3 md:w3 rounded-full bg-green-400"></span>
  </span>

  <span class="text-xs font-medium text-green-300 sm:text-sm">
    Available for Hire
  </span>
</div>
        <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
          Hi, I'm
          <br />

          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-5xl font-display font-extrabold leading-[0.9] tracking-tighter text-transparent sm:text-6xl md:text-8xl">
            Ruposhi
          </span>
        </h1>

        <h2 className="my-6 text-lg font-bold font-[cursive] leading-8 text-gray-300 sm:my-10 sm:text-2xl md:my-8 md:text-3xl">
          I build fast, accessible & interactive
          <span className="text-indigo-400"> web </span>
          experiences.
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-7 text-gray-300 sm:text-base md:mt-8 md:text-xl md:leading-8">
          Full Stack Developer crafting performant web experiences with React, Node & <span className="text-emerald-400">MongoDB</span>.
        </p>

        <div className="mt-8 flex flex-col gap-3 text-white sm:flex-row sm:flex-wrap sm:gap-5 md:mt-10">

          <Link
            to="projects"
            className="flex min-h-11 w-full max-w-[220px] items-center justify-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium transition hover:cursor-pointer hover:bg-indigo-500 sm:w-auto sm:max-w-none"
          >
            View My Work
          </Link>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex min-h-11 w-full max-w-[220px] items-center justify-center rounded-full border border-gray-700 px-5 py-2 text-sm transition hover:border-indigo-400 sm:w-auto sm:max-w-none"
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
          <div className="absolute -top-20 left-10 hidden h-[300px] w-[300px] rounded-full bg-purple-600/20 blur-[100px] shimmer sm:block md:-top-40 md:left-20 md:h-[500px] md:w-[500px] md:blur-[150px]"></div>

<div className="absolute bottom-0 right-0 hidden h-[300px] w-[350px] rounded-full bg-indigo-500/20 blur-[100px] shimmer sm:block md:h-[450px] md:w-[550px] md:blur-[150px]"></div>


          {/* Glow */}

          <div className="absolute inset-0 rounded-[40px] bg-indigo-600 blur-3xl opacity-20"></div>
<div className="absolute -right-5 -top-5 h-48 w-48 bg-purple-600 rounded-full blur-[90px] opacity-20 md:-right-10 md:-top-10 md:h-72 md:w-72 md:blur-[120px]"></div>

<div className="absolute bottom-0 -left-5 h-40 w-40 bg-indigo-500 rounded-full blur-[80px] opacity-20 md:-left-10 md:h-60 md:w-60 md:blur-[100px]"></div>
          <div className="relative overflow-hidden rounded-[35px] hover:cursor-pointer md:pt-10">

            <img
              src={profilePic}
              alt=""
              className="h-[280px] w-[280px] object-contain transition duration-500 hover:scale-105 sm:h-[360px] sm:w-[360px] md:h-[500px] md:w-[500px]"
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
