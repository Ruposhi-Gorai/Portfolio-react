import React from "react";
import myGif from "../../assets/3.svg";
import Intro from "./Intro";
import Social from "../social/Social";

export default function () {
  return (
    <>
     
      <div className="mt-[10px] font-mono flex flex-col justify-around items-center gap-5 px-28 py-20 w-full max-w-full overflow-x-hidden">
        <Intro/>
        <Social />
        <div className=" w-[400px] flex justify-center mt-15">
          <img src={myGif} alt="" className=" w-[280px] bounce-img " />
        </div>
      </div>
    </>
  );
}
