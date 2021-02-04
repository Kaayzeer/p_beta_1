import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import stairs from "../../../../Photos/stairs.jpg";
import Grid from "@material-ui/core/Grid";
import UseStyles from "../UseStyles";

export default function PortfolioCard() {
  const classes = UseStyles();
  const [gitRepo, setGitRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kayzersozee/repos")
      .then((response) => response.json())
      .then((data) => setGitRepo(data));
  }, []);

  return (
    <Grid container direction="row" justify="center" spacing={3}>
      {gitRepo.map((repo) => (
        <Grid key={repo.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={stairs}
                title="portfolio"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {repo.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h3"
                >
                  {repo.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  last updated: {repo.updated_at}
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
      ))}
    </Grid>
  );
}
