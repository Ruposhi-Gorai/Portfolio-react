import React, { useState } from "react";

export default function ProjectCard() {
   

  return (
    <>
      <div className="bg-[#43485734] rounded-lg shadow-lg md:w-[25%] p-6 transition-all  hover:scale-[1.02]">
        <img
          src="https://thumbs.dreamstime.com/b/mobile-note-taking-ui-graphic-vector-design-notes-app-interface-clean-functional-art-perfect-productivity-apps-tools-368910096.jpg"
          alt=""
          className="rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="font-bold mb-2 text-2xl text-teal-500">Notes App</h2>
          <p className="text-teal-500 mb-2">
            This is a little bit better of a card!
          </p>
          <button className="git-btn">Github link</button>
        </div>
      </div>
    </>
  );
}
