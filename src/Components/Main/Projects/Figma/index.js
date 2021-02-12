
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import UseStyles from "../UseStyles";




export default function FigmaCard() {
  const classes = UseStyles();
  
    return (
     
      <Grid item xs={10} sm={6} md={4} lg={4} xl={4}>
        
        <Card>
          <CardActionArea>
            <CardMedia
              image="https://images.unsplash.com/photo-1547780543-62be494335cf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fHNvdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="portfolio"
              className={classes.media}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Souperb
              </Typography>
              <Typography variant="h5" color="textSecondary" component="p">
                Prototype made in Figma
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Grid container justify="flex-end">
              {
                <Button
                  className={classes.button}
                  size="small"
                  color="primary"
                  href="https://www.figma.com/proto/gj44C5BS2zAU4c59Y6UyYx/Individuell-uppgift-online-soup-delivery?node-id=71:0&scaling=min-zoom"
                >
                  Demo
                </Button>
              }
            </Grid>
          </CardActions>
        </Card>
        
      </Grid>
    

    );
    
  
}