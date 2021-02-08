import React from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import useStyles from "./UseStyles";
import Papers from "./Papers/Papers";
import Me from "./Me/Me";
import styled from 'styled-components'

const StyledAbout = styled.div`
overflow: scroll;
`;


function Index() {
  const classes = useStyles();

  return (
    <StyledAbout>
      <Container maxwidth="lg" className={classes.root}>
        <Grid container direction="column" align="center">
          <Me />
          <Box mt={10}></Box>
          <Papers />
          <Box mt={5}></Box>
        </Grid>
      </Container>
    </StyledAbout>
  );
}

export default Index;
