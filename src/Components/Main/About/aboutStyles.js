import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  AssignmentTurnedInRoundedIcon: {
    margin: "5px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  img: {
    borderRadius: "2%",
    boxShadow: "1px 1px 5px 2px var(--light-gray)",
    width: "100%",
    marginTop: "30px",
  },
  h1: {
    fontSize: "4rem",
    marginBottom: "70px",
    marginTop: "30px",
    textAlign: "center",
  },

  styledPara: {
    /*  margin: "10px",
    marginLeft: "20px", */
    textAlign: "center",
    wordBreak: "break-word",
    wordSpacing: "4px",
    fontSize: "1.5rem",
    maxWidth: "460px",
  },
  expH3: {
    marginBottom: "10px",
    marginTop: "30px",
    wordSpacing: "2px",
    fontSize: "2rem",
    textJustify: "center",
  },
  expH1: {
    marginBottom: "10px",
    marginTop: "30px",
    wordSpacing: "2px",
    fontSize: "2.5rem",
  },
  expPara: {
    marginTop: "10px",
    marginBottom: "10px",
    wordSpacing: "2px",
    fontSize: "1.5rem",
  },
  stH1: {
    borderBottom: "1px, black ",
    marginBottom: "10px",
    marginTop: "30px",
    wordSpacing: "2px",
    fontSize: "2.5rem",
    paddingLeft: "10px",
    textAlign: "center",
  },
  stP: {
    marginTop: "10px",
    marginBottom: "10px",
    wordSpacing: "2px",
    fontSize: "1.3rem",
    paddingLeft: "10px",
    textAlign: "center",
  },
  stPara: {
    marginTop: "10px",
    marginBottom: "10px",
    wordSpacing: "2px",
    fontSize: "1.3rem",
    paddingLeft: "10px",
    textAlign: "center",
  },
}));

export default UseStyles;
