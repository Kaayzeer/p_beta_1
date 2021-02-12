import { Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "../UseStyles";
import myImage from "../../../../Photos/Nikos_edited_00-6.jpg";
import styled from "styled-components";

const SmallLine = styled.div`
  background: linear-gradient(135deg, #90e0efff 0%, #e0aaffff 100%);
  height: 2px;
  width: 120px;
  margin: 10px;

  @media only screen and (max-width: 600px) {
    width: 70px;
  }
`;

export default function Me() {
  const classes = useStyles();

  const [gitList, setGitList] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kayzersozee")
      .then((response) => response.json())
      .then((data) => setGitList(data));
  }, []);

  return (
    <Grid container direction="row" justify="space-evenly" spacing={3}>
      <Grid item xs={10} sm={7} md={4} lg={4}>
        <Typography
          variant="h1"
          color="primary"
          component="h1"
          className={classes.h1}
        >
          about me
        </Typography>
        <SmallLine></SmallLine>
        <Typography variant="body2" color="primary" component="p">
          {gitList.bio} Right now i live in {gitList.location}
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="h1"
              color="primary"
              component="h3"
              className={classes.h1}
            >
              1
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              component="p"
              className={classes.body1}
            >
              Year of experience
            </Typography>
            <Typography
              variant="h1"
              color="primary"
              component="h3"
              className={classes.h1}
            >
              3
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              component="p"
              className={classes.body1}
            >
              Completed projects
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={9} sm={6} md={3} lg={3} xl={3}>
        <img src={myImage} className={classes.img} alt="" />
      </Grid>
    </Grid>
  );
}
