import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import GitContext from "../gitContext.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import stairs from "../../../Photos/stairs.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  mediaRoot: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "linear-gradient(135deg, #90e0efff 0%, #e0aaffff 100%)",
  },
}));

function MediaCard() {
  const classes = useStyles();

  return (
    <GitContext.Consumer>
      {(value) => (
        <Container maxWidth="xl" className={classes.root}>
          <Grid container lg={12} direction="column" align="center">
            <Grid container lg={6}>
              <Grid item xs={12} lg={6}>
                <Box mt={5}></Box>
                <Paper className={classes.paper}>
                  <h3 className={classes.h3}> have a project in mind?</h3>
                  <p className={classes.styledP}>lets build it together</p>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box mt={5}></Box>
                <p>my projects</p>
                <h1>welcome to my portfolio</h1>
              </Grid>
            </Grid>
          </Grid>
          <Grid container lg={12} direction="row" justify="center">
            <Grid item xs={6} lg={6}>
              <Box mt={5}></Box>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={stairs}
                    title="portfolio"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      portfolio v.1
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      made with Javascript, CSS and React using ui/materials,
                      styled-components, react-router.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Github
                  </Button>
                  <Button size="small" color="primary">
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      )}
    </GitContext.Consumer>
  );
}

function Index() {
  return <>{MediaCard()}</>;
}

export default Index;
