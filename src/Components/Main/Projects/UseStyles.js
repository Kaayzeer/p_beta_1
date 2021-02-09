import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "theme.palette.text.primary",
    background: 'transparent',
    minHeight: "310px",
  },
  card:{
    background: 'linear-gradient(135deg, #90e0efff 0%, #e0aaffff 100%)',
  },
  mediaRoot: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
  img: {
    height: 300,
  },
}));

export default UseStyles;
