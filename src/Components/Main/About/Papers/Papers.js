import { Grid, Paper, Typography } from "@material-ui/core";
import AssignmentTurnedInRoundedIcon from "@material-ui/icons/AssignmentTurnedInRounded";
import BusinessCenterRoundedIcon from "@material-ui/icons/BusinessCenterRounded";
import useStyles from "../UseStyles";

export default function Papers() {
  const classes = useStyles();
  const Icon1 = BusinessCenterRoundedIcon;
  const Icon2 = AssignmentTurnedInRoundedIcon;
  return (
    <Grid container spacing={4} direction="row" justify="center">
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h3" color="primary" component="h3">
            <Icon1 style={{ color: "#9d4eddff" }} />
            studies
          </Typography>
          <Typography variant="h5" color="primary" component="h5">
            front end developer with ui/ux
          </Typography>
          <Typography variant="body1" color="primary" component="p">
            student at the moment
          </Typography>
          <Typography variant="body1" color="primary" component="p">
            September 2020 - June 2022
          </Typography>
        </Paper>
      </Grid>
      {/* first and second paper breakpoint*/}
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h3" color="primary" component="h3">
            <Icon2 style={{ color: "#9d4eddff" }} />
            experiences
          </Typography>
          <Typography variant="h5" color="primary" component="h5">
            group projects with different teams
          </Typography>
          <Typography variant="body1" color="primary" component="p">
            inside and outside of school
          </Typography>
          <Typography variant="body1" color="primary" component="p">
            September 2020 -
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
