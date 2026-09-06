import React from "react";
import "../../assets/css/home.css";
import { Link } from "react-scroll";
import profilePic from "../../assets/images/pic6.png";
import resumePdf from "../../assets/RuposhiGorai.pdf";
import { SiMongodb } from "react-icons/si";


export default function Intro() {
  return (
    <>
<section
  id="/"
  className="relative flex min-h-0 items-start overflow-hidden bg-black bg-grid py-3 sm:min-h-screen sm:items-center sm:py-10 z-1"
>
  <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0f] to-black"></div>

  <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">

    <div className="grid items-center gap-4 md:gap-20 lg:grid-cols-2">

      {/* LEFT */}
      <div className="order-1 flex flex-col items-center justify-center py-1 text-center sm:py-10 lg:order-1 lg:items-start lg:text-left">

      <div>

        <div className="my-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 backdrop-blur-sm sm:my-4 sm:px-4 sm:py-2">
  {/* <!-- Animated status dot --> */}
  <span className="relative flex h-3 w-3 items-center justify-center">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 duration-2000"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
  </span>

  <span className="text-sm font-medium text-green-300 sm:text-sm">
    Available for work
  </span>
</div>
        <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
          Hi, I'm
          <br />

          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-5xl font-display font-extrabold leading-[0.9] tracking-tighter text-transparent sm:text-6xl md:text-8xl">
            Ruposhi
          </span>
        </h1>

        <h2 className="my-3 max-w-xl text-lg font-bold font-[cursive] leading-7 text-gray-300 sm:my-10 sm:text-2xl sm:leading-8 md:my-8 md:text-3xl">
          I build fast, accessible & interactive
          <span className="text-indigo-400"> web </span>
          experiences.
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:mt-6 sm:text-base sm:leading-7 md:mt-8 md:text-xl md:leading-8">
          Full Stack Developer crafting performant web experiences with React, Node & <span className="text-emerald-400">MongoDB</span>.
        </p>

        <div className="mt-4 flex w-full flex-col items-center gap-2 text-white sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-5 md:mt-10 lg:items-start">

          <Link
            to="projects"
            className="flex min-h-10 w-full max-w-[180px] items-center justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:min-h-11 sm:w-auto sm:max-w-none sm:px-5 sm:py-2"
          >
            View My Work
          </Link>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex min-h-10 w-full max-w-[180px] items-center justify-center rounded-full border border-gray-700 px-3 py-1.5 text-sm transition hover:border-indigo-400 sm:min-h-11 sm:w-auto sm:max-w-none sm:px-5 sm:py-2"
          >
            Resume
          </a>

        </div>
       

    

      </div>
       </div>

      {/* RIGHT */}

      <div className="order-2 flex justify-center lg:order-2">
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
              className="h-56 w-56 object-contain transition duration-500 hover:scale-105 sm:h-[360px] sm:w-[360px] md:h-[500px] md:w-[500px]"
            />

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    </>

  );
}
