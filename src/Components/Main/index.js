import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import { Switch, Route } from "react-router-dom";

function index() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>JALLA DAGS O GYYYM</h1>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
}

export default index;
