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
import FigmaCard from '../Figma';



export default function GithubCard() {
  const classes = UseStyles();

  

  const [gitRepo, setGitRepo] = useState([]);


  useEffect(() => {
    fetch("https://api.github.com/users/kayzersozee/repos")
      .then((response) => response.json())
      .then((data) => setGitRepo(data));
  }, []);
  


  return (
    <Grid container direction="row" justify="center" spacing={3}>
      {gitRepo
        .filter((repos) => repos.description !== null)
        .map((repo) => (
          <Grid key={repo.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2dyYW1taW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  title="portfolio"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {repo.name}
                  </Typography>
                  <Typography variant="h5" color="textSecondary" component="p">
                    {repo.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  ></Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Grid container justify="flex-end">
                  <Button size="small" color="primary" href={repo.html_url}>
                    Github
                  </Button>
                  {repo.has_pages ? (
                    <Button
                      key={repo.id}
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
      <FigmaCard />
    </Grid>
  );
}
