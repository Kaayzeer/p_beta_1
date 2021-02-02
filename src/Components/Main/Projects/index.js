import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import GitContext from "../gitContext.js";
import Button from "@material-ui/core/Button";
import UseStyles from "./projectStyles";
import Mediacard from "./portfolio";

function Index() {
  const classes = UseStyles();

  return (
    <GitContext.Consumer>
      {(value) => (
        <Container maxWidth="xl" className={classes.root}>
          <Grid container direction="column" align="center">
            <Grid container direction="row" justify="center">
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Box mt={5}></Box>
                <Paper className={classes.paper}>
                  <h3 className={classes.h3}> have a project in mind?</h3>
                  <p className={classes.styledP}>lets build it together</p>
                  <Grid container direction="row-reverse">
                    <Grid item xs={3}>
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
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box mt={5}></Box>
                <p>my projects</p>
                <h1>welcome to my portfolio</h1>
              </Grid>
            </Grid>
          </Grid>
          <Mediacard />
        </Container>
      )}
    </GitContext.Consumer>
  );
}

export default Index;
