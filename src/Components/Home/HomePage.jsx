import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "../../assets/css/home.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-scroll";
import Social from "../social/Social";
import profilePic from "../../assets/images/pic2.jpeg";

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

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .7 }}
      >

        <span className="inline-block mb-6 border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 rounded-full text-indigo-400">
          &lt;/&gt; Full Stack Developer
        </span>

        <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
          Hi, I'm
          <br />

          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Ruposhi.
          </span>
        </h1>

        <h2 className="text-4xl font-bold text-gray-300 mt-4">
          I build
          <span className="text-indigo-400"> things </span>
          for the web.
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">
          Passionate Full Stack Developer who enjoys creating beautiful,
          responsive and scalable web applications with React, Node,
          MongoDB and modern web technologies.
        </p>

        <div className="flex gap-5 mt-10">

          <Link
            to="projects"
            className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl font-semibold transition"
          >
            View My Work
          </Link>

          <a
            href="resume.pdf"
            target="_blank"
            className="border border-gray-700 hover:border-indigo-400 px-8 py-4 rounded-xl transition"
          >
            Resume
          </a>

        </div>

        <div className="mt-12">
          <Social />
        </div>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .7 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute -top-40 left-20 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[150px] shimmer"></div>

<div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-indigo-500/20 blur-[150px] shimmer"></div>


          {/* Glow */}

          <div className="absolute inset-0 rounded-[40px] bg-indigo-600 blur-3xl opacity-20"></div>
<div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

<div className="absolute bottom-0 -left-10 w-60 h-60 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="relative rounded-[35px] border border-indigo-500/30 overflow-hidden shadow-2xl">

            <img
              src={profilePic}
              alt=""
              className="w-[420px] h-[550px] object-cover hover:scale-105 transition duration-500"
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
