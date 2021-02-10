import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary,
    width: "100%",
    /* height: "70vh", */
    /* overflow: 'scroll', */
  },

  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
    /* borderRadius: "4%", */
    display: "block",
  },
  img: {
    borderRadius: "2%",
    boxShadow: "1px 1px 5px 2px var(--light-gray)",
    width: "100%",
    marginTop: "30px",
  },
  h1: {
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
      letterSpacing: "1.2px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
      letterSpacing: "0.8px",
    },
  },
  body1: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
      letterSpacing: "0.03rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      letterSpacing: "0.04rem",
    },
  },
  h3: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
      letterSpacing: "0.03rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      letterSpacing: "0.04rem",
    },
  },
  h5: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
      letterSpacing: "0.03rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      letterSpacing: "0.04rem",
    },
  },
}));

export default UseStyles;
