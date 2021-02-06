import Components from "./Components/";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#161a1dff",
    },
    secondary: {
      main: "#00b4d8ff",
    },
  }, // h1 - h4 is styling for about me components
  typography: {
    fontFamily: "Times New Roman",

    h1: {
      fontSize: "2.5rem",
      letterSpacing: "1.5px",
      marginTop: "3vh",
      marginBottom: "1vh",
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
    h3: {},
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
