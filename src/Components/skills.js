// skills.js
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import {
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaBitbucket,
} from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import {
  SiReactbootstrap,
  SiExpress,
  SiNetlify,
  SiVite,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { MdOutlineSettingsApplications } from "react-icons/md";
import {
  SiTypescript,
  SiMongoose,
  SiFramer,
  SiAmazonwebservices,
  SiFirebase,
  SiHeroku,
  SiJest,
  SiCypress,
  SiEslint,
  SiPrettier,
} from "react-icons/si";


const skillData = [
  { icon: IoLogoHtml5, name: "HTML5", category: "frontend" },
  { icon: FaCss3Alt, name: "CSS3", category: "frontend" },
  { icon: IoLogoJavascript, name: "JavaScript", category: "frontend" },
  { icon: FaReact, name: "React", category: "framework" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS", category: "frontend" },
  { icon: FaBootstrap, name: "Bootstrap", category: "frontend" },
  { icon: SiReactbootstrap, name: "React Bootstrap", category: "framework" },
  { icon: FaNodeJs, name: "Node.js", category: "backend" },
  { icon: SiExpress, name: "Express.js", category: "backend" },
  { icon: DiMongodb, name: "MongoDB", category: "backend" },
  { icon: SiRedux, name: "Redux", category: "framework" },
  { icon: RiNextjsLine, name: "Next.js", category: "framework" },
  { icon: SiVite, name: "Vite", category: "tools" },
  { icon: SiPostman, name: "Postman", category: "tools" },
  { icon: FaGitAlt, name: "Git", category: "tools" },
  { icon: FaBitbucket, name: "Bitbucket", category: "tools" },
  { icon: VscVscode, name: "VS Code", category: "tools" },
  { icon: IoLogoVercel, name: "Vercel", category: "tools" },
  { icon: SiNetlify, name: "Netlify", category: "tools" },
  { icon: SiTypescript, name: "TypeScript", category: "frontend" },
  { icon: SiMongoose, name: "Mongoose", category: "backend" },
  { icon: SiAmazonwebservices, name: "AWS", category: "tools" },
  { icon: SiFirebase, name: "Firebase", category: "tools" },
  { icon: SiHeroku, name: "Heroku", category: "tools" },
  { icon: SiJest, name: "Jest", category: "tools" },
  { icon: SiFramer, name: "Framer Motion", category: "framework" },
];

export default skillData;
