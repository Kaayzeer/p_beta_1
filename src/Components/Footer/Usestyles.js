import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "theme.palette.text.primary",
    minHeight: "200px",
    marginTop: '20px',
    
    
  },

  media: {
    height: 140,
    opacity: "0.5",
  },

  
  IconButton: {
    fontSize: "2,5rem",
  },

}));

export default UseStyles;
