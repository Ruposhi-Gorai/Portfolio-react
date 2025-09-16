import React, { useState } from "react";
import { RiGitRepositoryLine } from "react-icons/ri";

export default function ProjectCard({ item }) {
  return (
    <>
    <div >

      <div className="flex flex-col gap-3">
        <h2 className="font-semibold mb-2 text-2xl text-teal-500">{item.name}</h2>
        <p className="text-teal-800 mb-2">{item.description}</p>
      </div>

      <div className="flex gap-6 justify-start mt-6 ">
        {item.homepage && (
          <a
            href={item.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-[28%] text-center px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-600 text-white font-medium transition duration-200"
          >
            Demo
          </a>
        )}
        <a
          href={item.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="md:w-[30%] text-center px-4 py-2 rounded-lg border border-teal-600 hover:bg-teal-600 text-gray-300 hover:text-white font-medium transition duration-200"
        >
          Code &lt;/&gt;
        </a>
      </div>
      </div>
    </>
  );
}
