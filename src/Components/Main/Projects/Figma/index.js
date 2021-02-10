import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import souperb from "../../../../Photos/souperb.gif";
import Grid from "@material-ui/core/Grid";
import UseStyles from "../UseStyles";




export default function FigmaCard() {
  const classes = UseStyles();
  /* const [figmaRepo, setFigmaRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.figma.com/v1/files/903977346134759669")
      .then((response) => response.json())
      .then((data) => setFigmaRepo(data));
  }, []); */

  return (
    
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Card>
          <CardActionArea>
            <CardMedia image={souperb} title="portfolio" className={classes.media}/>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Souperb
              </Typography>
              <Typography variant="h5" color="textSecondary" component="p">
                Prototype made in Figma
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Grid container justify="flex-end">
              <Button
                size="small"
                color="primary"
                href="https://www.figma.com/proto/gj44C5BS2zAU4c59Y6UyYx/Individuell-uppgift-online-soup-delivery?node-id=71:0&scaling=min-zoom"
              >
                Demo
              </Button>

              {/* <Button size="small" color="primary">
                Demo
              </Button> */}
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    
  );
}