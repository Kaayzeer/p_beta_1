import { Grid, Typography } from "@material-ui/core";
import GitContext from "../gitContext.js";
import useStyles from "./aboutStyles";
import myImage from "../../../Photos/Nikos_edited_00-6.jpg";

export default function AboutMe() {
  const classes = useStyles();
  return (
    <GitContext.Consumer>
      {(value) => (
        <Grid container direction="row" justify="space-evenly">
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h1" color="primary" component="h1">
              about me
            </Typography>
            <Typography variant="body1" color="primary" component="p">
              {value.bio}
            </Typography>
            <Typography variant="h3" color="primary" component="h3">
              1
            </Typography>
            <Typography variant="body1" color="primary" component="p">
              Year of experience
            </Typography>
            <Typography variant="h3" color="primary" component="h3">
              3
            </Typography>
            <Typography variant="body1" color="primary" component="p">
              Completed projects
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6} xl={6}>
            <img src={myImage} className={classes.img} alt="" />
          </Grid>
        </Grid>
      )}
    </GitContext.Consumer>
  );
}
