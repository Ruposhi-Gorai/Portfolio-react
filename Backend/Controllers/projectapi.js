// GET /api/projects

export const getProjects = (req, res) => {


  const projects = [
    {
      id: 1,
      title: "Telco Clone",
      category: "Full Stack",
      description: "A full-stack telecom platform for browsing plans and managing customer services.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      status: "In progress",
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Full-stack",
      description: "A responsive developer portfolio showcasing projects, skills, and contact details.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      status: "Completed",
      link: "https://www.ruposhigorai.in"
    },
    {
      id: 3,
      title: "Ecommerce Website",
      category: "Frontend",
      description: "A modern ecommerce interface with product browsing, state management, and responsive layouts.",
      tech: ["Next.js", "Tailwind CSS", "Redux"],
      status: "Completed",
      link: "https://rb-new-seven.vercel.app/"
    },
    {
      id: 4,
      title: "Zomato Clone",
      category: "Frontend",
      description: "A restaurant discovery interface with search and filtering for finding places to eat.",
      tech: ["React", "Redux", "Tailwind CSS"],
      status: "Completed",
      link: "https://zomato-restaurant-search-filter.vercel.app/"
    },

  ];

  res.status(200).json(projects);
};