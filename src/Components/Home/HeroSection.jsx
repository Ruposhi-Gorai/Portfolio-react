import React from "react";
import myGif from "../../assets/images/4.jpg";
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
<div className="md:mt-[10px] min-h-[900px] font-mono flex flex-col-reverse md:flex-row justify-around items-center gap-5 px-5 md:px-28 py-10 md:py-20 w-full max-w-full overflow-x-hidden">
        <div>
          <Intro />
        </div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 items-center"
        >
          <div className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] flex justify-center mt-15 my-5 items-center relative">
            <div className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden absolute shadow-[0_0_25px_15px_rgba(0,255,255,0.2)] hover:scale-105 hover:shadow-[0_0_25px_15px_#14b8a6] transition-all duration-300">
              <img src={myGif} alt="" className="img-fluid" />
            </div>
          </div>
          <Social />
        </motion.div>
      </div>
    </>
  );
}
