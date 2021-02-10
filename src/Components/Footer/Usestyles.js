import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    /* minHeight: "20vh", */
  },
  h3: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  body2: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.0rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

export default UseStyles;