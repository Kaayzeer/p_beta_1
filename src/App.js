import GlobalStyle from "./GlobalStyle";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Components from './Components'



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#161a1dff",
    },
    secondary: {
      main: "#fffffcff",
    },
  },

  // h1 - h4 is styling for about me components
  typography: {
    fontFamily: "Times New Roman",

    h2: {
      fontSize: "2.5rem",
      letterSpacing: "1.5px",
      marginBottom: "1vh",
      
    },

    h1: {
      fontFamily: "Montserrat",
      fontSize: "1.8rem",
      letterSpacing: "1.5px",
      marginTop: "3vh",
      marginBottom: "1vh",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "1.8rem",
      letterSpacing: "0.01em",
      /* marginTop: "1.0rem", */
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      letterSpacing: "0.01em",
      marginTop: "0.2rem",
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "1.0rem",
      letterSpacing: "0.01em",
      padding: ".8rem",
    },
    h4: {
      fontFamily: "Montserrat",
      marginTop: "10%",
    },
    // h1 - h4 is styling for about me components
    h5: {
      marginTop: "0.2rem",
      fontSize: "1.2rem",
      letterSpacing: "0,01em",
    },
  },
});
function App() {
  return (
    
      <ThemeProvider theme={theme}>
        <Components />
        <GlobalStyle />
      </ThemeProvider>
   
  );
}

export default App;
