import { Grid, Paper, Typography} from "@material-ui/core";
import useStyles from "../UseStyles";


export default function Papers() {
  const classes = useStyles();
  
  return (
    <Grid container spacing={0} direction="row" justify="center">
      <Grid item xs={12} sm={10} md={8} lg={9} xl={6}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h3" color="primary" component="h3">
            studies/experiences
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            At the moment I go to KYH vocational university in Stockholm. Scrum
            working method for all our projects both in and outside of school.
            For the UX part I have worked with Figma.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
