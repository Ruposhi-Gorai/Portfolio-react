import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import HomePage from "./Components/Home/HomePage";
import About from "./Components/About/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";



createRoot(document.getElementById("root")).render(
  <>
<HomePage />
<Skills />
<Projects/>
<About />
<Contact/>
<Footer/>
</>
);
