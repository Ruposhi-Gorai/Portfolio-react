import React, { useEffect, useState } from "react";
import Pheading from "./PHeading";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Projects() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Ruposhi-Gorai/repos", {
        //    headers:{
        //   Authorization:`token${githubToken}`,
        // },
        params: {
          per_page: 5,
          sort: "updated",
          page: 1,
        },
      })
      .then((result) => {
        // console.log(result.data);
        const dataWithHomepage = result.data.filter((v) => v.homepage !== null);
        console.log(dataWithHomepage);
        setProject(dataWithHomepage);
      })
      .catch((err) => {
        toast.error("something went wrong!");
      });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0 }, // start invisible & slightly down
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2, // stagger effect: 0.2s delay for each card
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };
  return (
    <>
      <div id="projects" className="mb-20 py-5 px-3 md:px-0">
        <div className="p-5">
          <Pheading />
        </div>
        <div className="w-full space-y-6 md:flex flex-wrap items-center gap-8 md:my-10 px-5 md:px-15 md:justify-center md:space-y-3">
          {project.map((v, i) => (
            <motion.div
              className=" border-cyan-700  border-[0.2px] rounded-2xl shadow-lg sm:w-[40%] xl:w-[25%] md:min-h-[280px] p-5 md:p-10 transition-all hover:scale-[1.05] hover:shadow-[0_2px_30px_0_rgba(6,182,212,0.5)] drop-shadow-2xl duration-300 ]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              key={i}
            >
              <ProjectCard item={v} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
