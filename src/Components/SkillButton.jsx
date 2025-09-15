import React, { useState } from "react";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa6";
import { SiReactbootstrap } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaBitbucket } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import skillData from "./skills";

export default function SkillButton({ item }) {
  const Icon = item.icon;
  

  return (
    <div>
      <div className="flex gap-1  rounded-full border border-teal-500 items-center px-3 py-2 shadow-[0_0_10px_2px_rgba(0,255,255,0.2)] hover:shadow-[0_0_15px_5px_#14b8a6] transition-all duration-300">
        <Icon className="text-[20px]" />
        <div>{item.name}</div>
      </div>
    </div>
  );
}
