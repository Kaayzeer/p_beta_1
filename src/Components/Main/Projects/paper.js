import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import UseStyles from "./projectStyles";

export default function PortfolioPaper() {
  const classes = UseStyles();
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Paper className={classes.paper}>
          <h1 className={classes.h1}> have a project in mind?</h1>
          <h3 className={classes.expH3}>lets build it together</h3>
          <hr className={classes.hr}></hr>
          <Grid container direction="row" justify="center">
            <Grid item xs={3} md={3} lg={3} xl={3}>
              <Button
                size="small"
                color="primary"
                href="https://www.gmail.com"
                className={classes.Button}
              >
                send request
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
