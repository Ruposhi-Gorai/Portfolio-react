import React, { useState } from "react";
import Pheading from "./PHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
   const [project,setProject] = useState([])

  return (
    <>
      <div className="mb-20 py-10">
        <div className="p-5">
          <Pheading />
        </div>
        <div className="w-full md:flex gap-5 md:my-25 px-5 md:px-15 md:justify-center space-y-3">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
    </>
  );
}
