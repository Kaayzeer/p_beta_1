import React from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import useStyles from "./aboutStyles";
import AboutPapers from "./aboutPapers";
import AboutMe from "./aboutMe";

function Index() {
  const classes = useStyles();

  return (
    <Container maxwidth="lg" className={classes.root}>
      <Grid container direction="column" align="center">
        <AboutMe />
        <Box mt={10}></Box>
        <AboutPapers />
      </Grid>
    </Container>
  );
}

export default Index;
