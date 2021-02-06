import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";


// om jag vill göra themet till dark använd propen type: 'dark'
// skapa en if sats till en handlechange knapp och ändra type när onClick

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background: var(--baby-powder);
  
`;

function Index() {
  return (
   
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
    
  );
}

export default Index;
