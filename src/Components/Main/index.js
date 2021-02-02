import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GitContext from "./gitContext";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 75vh;
  background: var(--baby-powder);
`;

function Index() {
  const [gitList, setGitList] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kayzersozee")
      .then((response) => response.json())
      .then((data) => setGitList(data));
  }, []);

  return (
    <GitContext.Provider value={gitList}>
      <StyledMain>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </StyledMain>
    </GitContext.Provider>
  );
}

export default Index;
