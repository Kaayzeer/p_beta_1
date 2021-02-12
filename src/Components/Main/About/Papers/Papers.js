import { Grid, Typography} from "@material-ui/core";
import useStyles from "../UseStyles";
import styled from "styled-components";

const SmallLine = styled.div`
  background: linear-gradient(135deg, #90e0efff 0%, #e0aaffff 100%);
  height: 2px;
  width: 120px;
  margin: 10px;
  

  @media only screen and (max-width: 600px) {
    width: 107px;
  }
`;


export default function Papers() {
  const classes = useStyles();
  
  return (
    <Grid container spacing={0} direction="row" justify="space-around" className={classes.studies}>
      <Grid item xs={9} sm={8} md={8} lg={5} xl={6}>
        
          <Typography variant="h3" color="primary" component="h3" className={classes.h3}>
            studies/experiences
          </Typography>
          <SmallLine />
          <Typography variant="body2" color="primary" component="p" className={classes.body2}>
            At the moment I go to KYH vocational university in Stockholm. Scrum
            working method for all our projects both in and outside of school.
            For the UX part I have worked with Figma.
          </Typography>
        
      </Grid>
    </Grid>
  );
}
