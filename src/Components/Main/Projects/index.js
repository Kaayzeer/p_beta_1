import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import UseStyles from "./projectStyles";
import PortfolioCard from "./portfolio";
import PortfolioPaper from "./paper";

function Index() {
  const classes = UseStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <PortfolioPaper />

      <Grid container justify="center" align="center" spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box mt={5}></Box>
          <p>my projects</p>
          <h1>welcome to my portfolio</h1>
        </Grid>
      </Grid>

      <PortfolioCard />
    </Container>
  );
}

export default Index;
