import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  h3: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      padding: "0rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      padding: "0rem",
    },
  },
  body2: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.0rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      padding: "0rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.74rem",
      padding: "0rem",
    },
  },
}));

export default UseStyles;