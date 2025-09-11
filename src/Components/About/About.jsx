import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/about.css";
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa";
import Social from "../social/Social";
import image from "../../assets/images/image.png";

export default function () {
  const [startTyping, setStartTyping] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 pt-5 justify-center my-20 px-4 md:px-10 w-full">
        <div className="about-photo ">
          <img
            src={image}
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-[50%] lg:ps-10 lg:mx-20">
          <h1 className=" text-2xl md:text-4xl text-gray-200 italic text-center lg:px-20">
            ~ Meet the girl Behind the{" "}
            <span className="text-teal-200">&lt;Code /&gt;</span>
          </h1>
          <div className="mt-6  text-gray-300 font-sans px-2 lg:px-20 text-[16px] md:text-[20px] font-medium bg-[#6f6f7446] py-10 rounded-2xl shadow-lg">
            <p>
           Hi, I’m Ruposhi. I love turning ideas into web experiences with coding. Outside of coding, I love traveling, exploring new hobbies, learning a new skill and contributing to others happiness.
            </p>
            <div className="py-5">
              <h2 className="text-xl font-bold py-1 text-teal-300">WHO AM I?</h2>
              <ul className=" custom-dash list-disc ps-6 md:leading-[38px]">
                <li> Passionate about technology</li>
              <li>
                 Upskilling everyday to become a better developer
              </li>
              <li>
                Love to solve problems and build things that make a difference
              </li>
              <li>
                 Love to connect and collaborate with like-minded people
              </li>
              <li>
                Love to learn new things and explore new technologies
              </li>
              <li>
                Quick learner and team player
              </li>
            </ul>
       
          </div>
        </div>
        <div>
          <Social />
        </div>
      </div>
      </div>
    </>
  );
}
