import { Grid, Paper, Typography} from "@material-ui/core";
import useStyles from "../UseStyles";


export default function Papers() {
  const classes = useStyles();
  
  return (
    <Grid container spacing={4} direction="row" justify="center">
      
      <Grid item xs={12} sm={10} md={4} lg={4} xl={6}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h3" color="primary" component="h3">
            
            studies
          </Typography>

          <Typography variant="h5" color="primary" component="h5">
            front end developer with ui/ux
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            student at the moment
          </Typography>
          
        </Paper>
      </Grid>
      {/* first and second paper breakpoint*/}
      <Grid item xs={12} sm={10} md={4} lg={4}>
        <Paper className={classes.paper} elevation={0}>
          <Typography
            variant="h3"
            color="primary"
            /* style={{ color: "#9d4eddff" }} */
            component="h3"
          >
            
            experiences
          </Typography>
          <Typography variant="h5" color="primary" component="h5">
            group projects with different teams
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            inside and outside of school
          </Typography>
          
        </Paper>
      </Grid>
    </Grid>
  );
}
