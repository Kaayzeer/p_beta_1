import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "theme.palette.text.primary",
    /* backgroundColor: "purple", */
    minHeight: "200px",
  },
  /* mediaRoot: {
    maxWidth: 345,
  }, */
  media: {
    height: 140,
    opacity: "0.5",
  },

  
  IconButton: {
    fontSize: "2,5rem",
  },

  h3: {
    textAlign: 'center',
  }
}));

export default UseStyles;
