import { Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "../UseStyles";
import myImage from "../../../../Photos/Nikos_edited_00-6.jpg";

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
      <Grid item xs={12} md={6} lg={6}>
        <Typography variant="h1" color="primary" component="h1">
          about me
        </Typography>
        <Typography variant="body1" color="primary" component="p">
          {gitList.bio} Right now i live in {gitList.location}
        </Typography>
        <Typography variant="h3" color="primary" component="h3">
          1
        </Typography>
        <Typography variant="body1" color="primary" component="p">
          Year of experience
        </Typography>
        <Typography variant="h3" color="primary" component="h3">
          3
        </Typography>
        <Typography variant="body1" color="primary" component="p">
          Completed projects
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} lg={6} xl={6}>
        <img src={myImage} className={classes.img} alt="" />
      </Grid>
    </Grid>
  );
}
