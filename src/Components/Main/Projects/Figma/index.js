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




export default function FigmaCard() {
  const classes = UseStyles();
  const [figmaRepo, setFigmaRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.figma.com/v1/files/903977346134759669")
      .then((response) => response.json())
      .then((data) => setFigmaRepo(data));
  }, []);

  return (
    <Grid container direction="row" justify="center" spacing={3}>
      {figmaRepo
        .filter((repos) => repos.description !== null)
        .map((repo) => (
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
                    variant="body1"
                    color="textSecondary"
                    component="h3"
                  >
                    {repo.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    last updated: {repo.updated_at}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Grid container justify="flex-end">
                  <Button size="small" color="primary" href={repo.html_url}>
                    Github
                  </Button>

                  <Button size="small" color="primary">
                    Demo
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}