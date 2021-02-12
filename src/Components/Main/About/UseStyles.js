import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary,
    width: "100%",
  },

  studies: {
   paddingTop: '5px',
    
  },
  img: {
    borderRadius: "2%",
    boxShadow: "1px 1px 5px 2px var(--light-gray)",
    width: "100%",
    marginTop: "20px",
  },
  h1: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7rem",
      letterSpacing: "1.2px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      letterSpacing: "0.8px",
    },
  },
  body2: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
      letterSpacing: "0.03rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      letterSpacing: "0.04rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      letterSpacing: "0.04rem",
      
    },
  },
  h3: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6rem",
      letterSpacing: "0.03rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
      letterSpacing: "0.04rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      letterSpacing: "0.04rem",
    },
  },
}));

export default UseStyles;
