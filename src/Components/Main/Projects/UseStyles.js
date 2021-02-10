import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "theme.palette.text.primary",
    background: "#fffffcff",
    
    minHeight: "310px",
  },

  mediaRoot: {
    maxWidth: 300,
  },
  media: {
    height: 400,
  },
  img: {
    height: 300,
  },
  h1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
  },
  body1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      marginTop: "1.0rem",
    },
  },
}));

export default UseStyles;
