import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#161a1dff",
      dark: "#fffffcff",
    },
    secondary: {
      main: "#00b4d8ff",
      dark: "#0b090aff",
    },
  }, // h1 - h4 is styling for about me components
  typography: {
    h1: {
      fontSize: "2.5rem",
      letterSpacing: "1.5px",
      marginTop: "3vh",
      marginBottom: '1vh',

    },
    h6: {
      fontSize: "1.5rem",
      letterSpacing: "0.01em",
      marginTop: "10%",
    },
    body2: {
      fontSize: "1.5rem",
      letterSpacing: "0.01em",
      marginTop: "15px",
    },
    h4: {
      marginTop: "10%",
    },
    // h1 - h4 is styling for about me components
    h3: {
      
    }
  },

});

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default Index;
