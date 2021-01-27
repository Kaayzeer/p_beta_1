import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

function index() {
  return (
    <div>
      <h1>Main</h1>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default index;
