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
        <Typography variant="h1" color="primary">
          about me
        </Typography>
        <Typography variant="h6" color="primary">
          {gitList.bio}
        </Typography>
        <Typography variant="h4" color="primary">
          1
        </Typography>
        <Typography variant="body2" color="primary">
          Year of experience
        </Typography>
        <Typography variant="h4" color="primary">
          3
        </Typography>
        <Typography variant="body2" color="primary">
          Completed projects
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} lg={6} xl={6}>
        <img src={myImage} className={classes.img} alt="" />
      </Grid>
    </Grid>
  );
}
