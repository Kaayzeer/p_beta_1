import { makeStyles } from "@material-ui/core/styles";
import stairs from "../../../Photos/stairs.jpg";

const UseStyles = makeStyles((theme) => ({
  root: {
    /* flexGrow: 1, */
    color: theme.palette.text.primary,
  },
  mediaRoot: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "linear-gradient(135deg, #ff6d00ff 0%, #ff9e00ff 100%)",
  },
  stairs: {
    height: "100%",
  },
  Button: {
    background: "linear-gradient(45deg, #10002bff 30%, #e0aaffff 90%)",
    color: "white",
  },
  h1: {
    fontSize: "4rem",
    marginBottom: "70px",
    marginTop: "30px",
    textAlign: "center",
    color: "var(--baby-powder)",
  },
  expH3: {
    marginBottom: "10px",
    marginTop: "30px",
    wordSpacing: "2px",
    fontSize: "2rem",
    textJustify: "center",
    color: "var(--baby-powder)",
  },
  hr: {
    background: "#fff",
    height: "2px",
    width: "300px",
    margin: "auto",
    margiTop: "30px",
    marginBottom: "10px",
  },
}));

export default UseStyles;
