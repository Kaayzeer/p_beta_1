import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import stairs from "../../../Photos/stairs.jpg";
import Grid from "@material-ui/core/Grid";
import UseStyles from "./projectStyles";

export default function Mediacard() {
  const classes = UseStyles();
  const [gitRepo, setGitRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kayzersozee/repos")
      .then((response) => response.json())
      .then((data) => setGitRepo(data));
  }, []);

  return (
    <>
      {gitRepo.map((repo) => (
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

                <CardContent key={repo.id}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {repo.name}
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
                <Button size="small" color="primary" href={repo.html_url}>
                  Github
                </Button>

                <Button size="small" color="primary">
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
