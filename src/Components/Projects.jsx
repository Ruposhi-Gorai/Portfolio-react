
import React, { useEffect, useState } from "react";
import Pheading from "./PHeading";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

export default  function Projects() {
  const [project, setProject] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);


  useEffect(async () => {

    const result = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/projects`,
          {
            params: {
              per_page: 4,
              sort: "updated",
              page: 1,
            },
          }
        )
      .then((result) => {
        const dataWithHomepage = result.data.map((item) => ({
          ...item,
          homepage: item.homepage || item.link, // Use 'link' if 'homepage' is not available
        }));
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
      <div id="projects" className="py-24">
  <ToastContainer theme="colored" />

  <div className="text-center mb-14">
    <p className="uppercase tracking-[0.3em] text-violet-400 text-sm mb-3">
      Featured Work
    </p>

    <h1 className="text-4xl md:text-5xl font-bold text-white">
      Latest Projects
    </h1>

    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
      A curated selection of projects focused on modern UI, performance and
      real-world experiences.
    </p>
  </div>

  {/* Grid goes here */}

  <div className="max-w-6xl mx-auto mt-12 px-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {project.slice(0, 4).map((v, i) => (
      <motion.div
        key={i}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={i}
        className="group"
      >
        <ProjectCard item={v} />
      </motion.div>
    ))}
  </div>
</div>
</div>
    </>
  );
}

