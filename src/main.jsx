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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavSection />
    <HomePage />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>
);
