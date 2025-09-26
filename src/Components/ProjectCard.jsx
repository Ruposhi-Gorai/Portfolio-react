import React, { useState } from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ item }) {
  return (
    <>
      <div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-3">
            <h2 className="font-medium mb-2 text-xl text-white ">
              {item.name}
            </h2>
            <p className="text-gray-400 mb-2">{item.description}</p>
          </div>
          <div>
            <span className="text-gray-100">
              <a href={item.html_url}><FaGithub size={20} /></a>
            </span>
          </div>
        </div>

        <div className="flex gap-2 justify-start mt-6 ">
          {item.homepage && (
            <a
              href={item.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-[35%] text-center text-[16px] px-2 py-2 rounded-lg bg-cyan-800 hover:bg-cyan-700 text-white font-medium transition duration-200"
            >
              Demo
            </a>
          )}
          <a
            href={item.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-[40%] text-start px-2 text-[16px] py-2 rounded-lg  hover:text-cyan-500 text-gray-200  font-medium transition duration-200"
          >
            Code &lt;/&gt;
          </a>
        </div>
      </div>
    </>
  );
}
