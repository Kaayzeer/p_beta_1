import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 75vh;
  background: var(--baby-powder);
`;

function index() {
  return (
    <StyledMain>
      <Switch>
        <Route exact path="/">
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
    </StyledMain>
  );
}

export default index;
