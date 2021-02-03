import { Grid, Typography } from "@material-ui/core";
import GitContext from "../gitContext.js";
import useStyles from "./aboutStyles";
import myImage from "../../../Photos/Nikos_edited_00-6.jpg";

export default function AboutMe() {
  const classes = useStyles();

  return (
    <GitContext.Consumer>
      {(value) => (
        <Grid container direction="row" justify="space-evenly" spacing={8}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h1" color="primary" component="h1">
              about me
            </Typography>
            <Typography variant="h6" color="primary" component="h6">
              {value.bio}
            </Typography>
            <Typography variant="h4" color="primary" component="h4">
              1
            </Typography>
            <Typography variant="body2" color="primary" component="p">
              Year of experience
            </Typography>
            <Typography variant="h4" color="primary" component="h4">
              3
            </Typography>
            <Typography variant="body2" color="primary" component="p">
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
