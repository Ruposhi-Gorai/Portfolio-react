import React from "react";
import Pheading from "./PHeading";

export default function Projects() {
  return (
    <>
      <div className="mb-20 py-10">
        <div className="p-5">
          <Pheading />
        </div>
        <div className="w-full md:flex gap-5 md:my-25 px-5 md:px-15 md:justify-center space-y-3">
          <div className="bg-[#43485783] rounded-lg shadow-lg md:w-[25%] p-6 transition-all  hover:scale-[1.02]">
            <img
              src="https://thumbs.dreamstime.com/b/mobile-note-taking-ui-graphic-vector-design-notes-app-interface-clean-functional-art-perfect-productivity-apps-tools-368910096.jpg"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl text-teal-500">
                Notes App
              </h2>
              <p className="text-teal-500 mb-2">
                This is a little bit better of a card!
              </p>
              <button className="git-btn">Github link</button>
            </div>
          </div>
          <div className="bg-[#43485783] rounded-lg shadow-lg md:w-[25%] p-6 transition-all  hover:scale-[1.02]">
            <img
              src="https://images.unsplash.com/photo-1642132652803-01f9738d0446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cXVpeiUyMGFwcCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl text-teal-500">
                Card with an image
              </h2>
              <p className="text-teal-500 mb-2">
                This is a little bit better of a card!
              </p>
              <button className="git-btn">Github link</button>
            </div>
          </div>
          <div className="bg-[#43485783] rounded-lg shadow-lg md:w-[25%] p-6 transition-all  hover:scale-[1.02]">
            <img
              src="https://plus.unsplash.com/premium_photo-1661436597788-920f2fa4cc7b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl text-teal-500">
                Card with an image
              </h2>
              <p className="text-teal-500 mb-2">
                This is a little bit better of a card!
              </p>
              <button className="git-btn">Github link</button>
            </div>
          </div>
          <div className="bg-[#43485783] rounded-lg shadow-lg md:w-[25%] p-6 transition-all  hover:scale-[1.02]">
            <img
              src="https://images.unsplash.com/photo-1674027392887-751d6396b710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fHww"
              alt=""
              className="rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl text-teal-500">
                Card with an image
              </h2>
              <p className="text-teal-500 mb-2">
                This is a little bit better of a card!
              </p>
              <button className="git-btn">Github link</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
