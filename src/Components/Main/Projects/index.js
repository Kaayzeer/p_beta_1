import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import UseStyles from "./UseStyles";
import GithubCard from "./Github/";
import FigmaCard from './Figma'
import { Typography } from "@material-ui/core";

function Index() {
  const classes = UseStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container justify="center" align="center" spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1" color="primary" component="h1">
            my projects
          </Typography>
          <Typography variant="h1" color="primary" component="p">
            welcome to my portfolio
          </Typography>
        </Grid>
      </Grid>
      <GithubCard />
      
    </Container>
  );
}

export default Index;
