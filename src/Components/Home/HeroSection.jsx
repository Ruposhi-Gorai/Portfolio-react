import React from "react";
import myGif from "../../assets/images/9.jpg";
import Intro from "./Intro";
import Social from "../social/Social";
import { motion } from "framer-motion";

export default function () {
  const itemVariants = {
    hidden: { x: 50, opacity: 0 }, // start from right
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <>
      <div className=" md:my-20 font-mono flex flex-col  md:flex-row justify-center gap-5 px-5 md:px-28  items-center mt-2 md:py-20 w-full max-w-full overflow-x-hidden">
        <div className="">
        <div className=" flex  md:justify-start justify-center mt-20 sm:mt-5 px-3  my-5 items-center md:items-start ">
          <div className="w-[70px] h-[70px] md:w-[70px] mt-10 md:h-[70px] rounded-full overflow-hidden  transition-all duration-300">
            <img src={myGif} alt="" className="img-fluid" loading="lazy" />
          </div>
          </div> 
          <Intro />
        </div>

      </div>
    </>
  );
}
