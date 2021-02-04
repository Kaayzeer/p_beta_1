import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "theme.palette.text.primary",
    backgroundColor: "transparent",
    minHeight: "310px",
  },
  mediaRoot: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    opacity: "0.5",
  },

  paper: {
    padding: theme.spacing(2),
    marginTop: "30px",
    textAlign: "center",
    background: "transparent",
  },
  stairs: {
    height: "100%",
  },

  h1: {
    fontSize: "4rem",
    marginBottom: "30px",
    marginTop: "30px",
    textAlign: "center",
    /* color: "var(--baby-powder)", */
  },
  h3: {
    marginBottom: "10px",
    marginTop: "10px",
    wordSpacing: "2px",
    fontSize: "2.5rem",
    textJustify: "center",
  },
  hr: {
    background: "#fff",
    height: "2px",
    width: "280px",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "20px",
  },
}));

export default UseStyles;
