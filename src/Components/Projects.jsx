// import React, { useEffect, useState } from "react";
// import Pheading from "./PHeading";
// import ProjectCard from "./ProjectCard";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { motion } from "framer-motion";

// export default function Projects() {
//   const [project, setProject] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://api.github.com/users/Ruposhi-Gorai/repos", {
//         //    headers:{
//         //   Authorization:`token${githubToken}`,
//         // },
//         params: {
//           per_page: 5,
//           sort: "updated",
//           page: 1,
//         },
//       })
//       .then((result) => {
//         // console.log(result.data);
//         const dataWithHomepage = result.data.filter((v) => v.homepage !== null);
//         console.log(dataWithHomepage);
//         setProject(dataWithHomepage);
//       })
//       .catch((err) => {
//         toast.error("something went wrong!");
//       });
//   }, []);

//   const cardVariants = {
//     hidden: { opacity: 0 }, // start invisible & slightly down
//     visible: (i) => ({
//       opacity: 1,
//       transition: {
//         delay: i * 0.2, // stagger effect: 0.2s delay for each card
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     }),
//   };
//   return (
//     <>
//       <div id="projects" className="mb-20 py-5  md:px-0">
//         <ToastContainer theme="coloured"/>
//         <div className="lg:p-5">
//           <Pheading />
//         </div>
//         <div className="w-full space-y-6 md:flex flex-wrap items-center gap-8 md:my-10 px-8 md:px-15 md:justify-center md:space-y-3">
//           {project.map((v, i) => (
//             <motion.div
//               className=" border-cyan-700  border-[0.2px] rounded-2xl shadow-lg sm:w-[40%] xl:w-[25%] md:min-h-[280px] p-5 md:p-10 transition-all hover:scale-[1.05] hover:shadow-[0_2px_30px_0_rgba(6,182,212,0.5)] drop-shadow-2xl duration-300 ]"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.6 }}
//               custom={i}
//               key={i}
//             >
//               <ProjectCard item={v} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import Pheading from "./PHeading";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

export default function Projects() {
  const [project, setProject] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Ruposhi-Gorai/repos", {
        params: {
          per_page: 20, // fetch enough projects
          sort: "updated",
          page: 1,
        },
      })
      .then((result) => {
        const dataWithHomepage = result.data.filter((v) => v.homepage !== null);
        setProject(dataWithHomepage);
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3); // show 3 more
  };

  return (
    <>
      <div id="projects" className="mb-20 py-5 md:px-0">
        <ToastContainer theme="colored" />
        <div className="pb-10">
          <Pheading />
        </div>
        <div className="w-full space-y-6 md:flex flex-wrap items-center gap-8 md:my-10 px-8 md:px-15 md:justify-center md:space-y-3">
          {project.slice(0, visibleCount).map((v, i) => (
            <motion.div
              className="border-cyan-700 border-[0.2px] rounded-2xl shadow-lg sm:w-[40%] xl:w-[25%] md:min-h-[280px] p-5 md:p-10 transition-all hover:scale-[1.05] hover:shadow-[0_2px_30px_0_rgba(6,182,212,0.5)] drop-shadow-2xl duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              key={i}
            >
              <ProjectCard item={v} />
            </motion.div>
          ))}
        </div>

        {/* Show button only if more projects exist */}
        {visibleCount < project.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleViewMore}
              className="px-6 py-2 border-1 text-white rounded border-cyan-500 hover:text-gray-300 cursor-pointer shadow-md  transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

