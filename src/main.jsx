import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./Components/Home/HomePage";
import About from "./Components/About/About";
import Skills from "./Components/Skills.jsx";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import NavSection from "./Components/Home/NavSection";
import Torch from "./Components/Torch";
import WelcomeModal from "./Components/WelcomeModal";

createRoot(document.getElementById("root")).render(
  <>
    
    <div className="h-screen z-[-2] absolute top-0 w-full flex justify-center bg-gradient-to-b from-gray-800 to-[#0a0a0a]">
    </div>
      <NavSection />
      <WelcomeModal />
      <HomePage />
      <About />

      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
  </>
);
