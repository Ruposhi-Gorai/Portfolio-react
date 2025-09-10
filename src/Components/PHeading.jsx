import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa";
import "../assets/css/home.css";

export default function Pheading() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow:
      window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  // Responsive text size
  const headingClass =
    " " + (window.innerWidth < 640 ? "text-2xl" : "text-8xl tracking-[10px]");

  return (
    <>
      <div className="slider-container text-[#00FFFF] add-flex justify-center font-light">
        <h1
          className={`tracking-[2px] sm:tracking-[8px] font-light
                                text-4xl sm:text-5xl`}
        >
          PROJECTS
        </h1>
      </div>
    </>
  );
}
