import React from "react";
import { Grid, Container} from "@material-ui/core/";
import useStyles from "./UseStyles";
import Papers from "./Papers/Papers";
import Me from "./Me/Me";


function Index() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container direction="column" align="center">
        <Me />
        <Papers />
      </Grid>
    </Container>
  );
}

export default Index;
