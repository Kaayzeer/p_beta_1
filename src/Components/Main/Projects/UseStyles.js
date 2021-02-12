import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "theme.palette.text.primary",
    background: "#fffffcff" /* "grey", */,
    marginBottom: "5px",
    minHeight: "300px",
  },

  button: {
    margin: theme.spacing(.5),
    [theme.breakpoints.down("md")]: {
      letterSpacing: "0.02857em",
      fontWeight: 500,
      fontSize: "0.84rem",
    },
    [theme.breakpoints.down("sm")]: {
      letterSpacing: "0.02857em",
      fontWeight: 500,
      fontSize: "0.84rem",
    },
    [theme.breakpoints.down("xs")]: {
      letterSpacing: "0.02857em",
      fontWeight: 500,
      fontSize: "0.7rem",
    },
  },

  mediaRoot: {
    maxWidth: 300,
  },
  media: {
    height: 300,
  },
  img: {
    height: 200,
  },
  h1: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
    },
  },
  body1: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
      marginTop: "1.0rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
      marginTop: "1.0rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
      marginTop: "1.0rem",
    },
  },
}));

export default UseStyles;
