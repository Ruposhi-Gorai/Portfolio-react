import React from "react";
import myGif from "../../assets/images/2.jpg";
import Intro from "./Intro";
import Social from "../social/Social";

export default function () {
  return (
    <>
      <div className="mt-[10px] h-[900px] font-mono flex flex-col-reverse md:flex-row  justify-around items-center gap-5 px-28 py-20 w-full max-w-full overflow-x-hidden ">
        <div>
          <Intro />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="  w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex  justify-center mt-15 my-5 items-center relative">
            <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden absolute shadow-[0_0_25px_10px_rgba(0,255,255,0.2)] hover:scale-105 hover:shadow-[0_0_25px_5px_#14b8a6] transition-all duration-300">
              <img src={myGif} alt="" className="img-fluid" />
            </div>
          </div>
          <Social />
        </div>
      </div>
    </>
  );
}
