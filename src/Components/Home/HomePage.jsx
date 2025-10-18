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
 <section id="/" class="relative bg-black overflow-hidden md:h-screen flex md:pt-10 bg-grid">
             <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-gray-900/60 to-transparent"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center relative z-[5]">
                <div class="flex flex-col items-center">
                    <div class="h-32 w-32 rounded-full object-cover ring-4 ring-green-500 bg-green-600 shadow-lg text-6xl flex items-center text-white justify-center font-semibold mb-6">RG</div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        <span class="block">Hi, I'm Ruposhi.</span>
                        <span class="block text-indigo-400">I build things for the web.</span>
                    </h1>
                    <p class="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
                        I'm a passionate full-stack developer based in India, specializing in creating intuitive, high-performance web applications. Welcome to my digital page.
                    </p>
                    <div class="mt-8 flex justify-center gap-4 flex-wrap">
                        <Link to="projects" class="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">View My Work</Link>
                        <a href="resume.pdf" download={"download"} target="_blank" class="inline-block bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105 shadow-lg">Download Resume</a>
                    </div>
                </div>
            </div>
        </section>

    </>
    
  );
}
