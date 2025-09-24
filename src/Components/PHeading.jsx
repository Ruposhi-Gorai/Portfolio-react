
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { FaRegStar } from "react-icons/fa";
import { SiPolestar } from "react-icons/si";

import "../assets/css/home.css";

// Custom wrap (no @motionone/utils needed)
function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function ParallaxText({ children, baseVelocity = 100, withIcon = false }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20"></div>

      <motion.div
        className="scroller flex text-gray-300 font-bold"
        style={{ x }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="px-6 text-4xl md:text-7xl flex font-medium items-center gap-2"
          >
            {children}
            {withIcon && <SiPolestar className="text-gray-500 inline-block" />}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Pheading() {
  return (
    <section className="py-10  ">
      <ParallaxText baseVelocity={-4}>LATEST PROJECTS</ParallaxText>
      <ParallaxText baseVelocity={4} withIcon={true}>
        FEATURED WORKS
      </ParallaxText>
    </section>
  );
}
