import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import UseStyles from "../UseStyles";
import askName from '../../../../Photos/ask-name.png'
import bev from '../../../../Photos/bev2.png'
import portfolio from '../../../../Photos/portfolio.png'





export default function GithubCard() {
  const classes = UseStyles();

  

  const [gitRepo, setGitRepo] = useState([]);


  useEffect(() => {
    fetch("https://api.github.com/users/kayzersozee/repos")
      .then((response) => response.json())
      .then((data) => setGitRepo(data));
  }, []);
  


  return (
    <>
      {gitRepo
        .filter((repos) => repos.description !== null)
        .map((repo) => (
          <Grid key={repo.id} item xs={10} sm={6} md={4} lg={4} xl={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={repo.name == 'ask-name' ? askName 
                  : repo.name == 'fe20tp2_bev_4' ? bev 
                  : repo.name == 'nikolas_rosinelli_ip2_fe20' ? portfolio 
                  : "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" }
                  title="portfolio"
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    className={classes.h5}
                    variant="h5"
                    component="h2"
                  >
                    {repo.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.body2}
                    color="textSecondary"
                    component="p"
                  >
                    {repo.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Grid container justify="flex-end">
                  <Button
                    className={classes.button}
                    size="small"
                    color="primary"
                    href={repo.html_url}
                  >
                    Github
                  </Button>
                  {repo.has_pages ? (
                    <Button
                      key={repo.id}
                      className={classes.button}
                      href={`https://kayzersozee.github.io/${repo.name}/`}
                    >
                      Demo
                    </Button>
                  ) : null}
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </>
  );
}
