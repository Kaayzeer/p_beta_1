import React from "react";
import myImage from "../../../Photos/Nikos_edited_00-6.jpg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import BusinessCenterRoundedIcon from "@material-ui/icons/BusinessCenterRounded";
import AssignmentTurnedInRoundedIcon from "@material-ui/icons/AssignmentTurnedInRounded";
import GitContext from "../gitContext.js";
import useStyles from "./aboutStyles";

function Index() {
  const classes = useStyles();

  return (
    <GitContext.Consumer>
      {(value) => (
        <Container>
          <div className={classes.root}>
            <Grid container direction="column" align="center">
              <Grid container direction="row" justify="space-evenly">
                <Grid item xs={12} md={6} lg={6}>
                  <h1 className={classes.h1}>about me</h1>
                  <p className={classes.styledPara}>{value.bio}</p>
                  <h3 className={classes.expH3}> 1 </h3>
                  <p className={classes.expPara}>Year of experience</p>
                  <h3 className={classes.expH3}> 3 </h3>
                  <p className={classes.expPara}>Completed projects</p>
                </Grid>

                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <img src={myImage} className={classes.img} alt="" />
                </Grid>
              </Grid>
              <Box mt={10}></Box>
              <Grid container spacing={2} direction="row" justify="center">
                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <Paper className={classes.paper} elevation={3}>
                    <h1 className={classes.stH1}>
                      <BusinessCenterRoundedIcon
                        style={{
                          color: "#9d4eddff",
                        }}
                      />
                      studies
                    </h1>

                    <h3 className={classes.stP}>
                      front end developer with ui/ux design
                    </h3>
                    <p className={classes.stPara}>student at the moment</p>
                    <p className={classes.stPara}>September 2020 - June 2022</p>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6} direction="column" lg={6}>
                  <Paper className={classes.paper} elevation={3}>
                    <h1 className={classes.stH1}>
                      <AssignmentTurnedInRoundedIcon
                        style={{
                          color: "#9d4eddff",
                        }}
                      />
                      experiences
                    </h1>
                    <h3 className={classes.stP}>
                      group projects with different teams
                    </h3>
                    <p className={classes.stPara}>
                      inside and outside of school
                    </p>
                    <p className={classes.stPara}>September 2020 - </p>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      )}
    </GitContext.Consumer>
  );
}

export default Index;

/* <StyledAbout>
      <h1>about me</h1>
      <StyledPresContent>
        <StyledLeftContent>
          <StyledH3>hey, i´m a</StyledH3>
          <StyledPara>
            Front-End Developer, I'm passionate about creating and developing
            web interfaces. Always ready to learn new things and expand my
            developing tools
          </StyledPara>
          <StyledExperience>
            <ExpH3>{"< 1"}</ExpH3>
            <ExpPara>Year of experience</ExpPara>
            <ExpH3>3</ExpH3>
            <ExpPara>Completed projects</ExpPara>
          </StyledExperience>
          <StyledCV>
            <h3>life story</h3>
            <ExpH3>3</ExpH3>
            <ExpPara>Completed projects</ExpPara>
            <ExpPara>Completed projects</ExpPara>
            <ExpPara>Completed projects</ExpPara>
          </StyledCV>
        </StyledLeftContent>
        <StyledImg src={myImage} alt="Nikos about" />
      </StyledPresContent>
    </StyledAbout> */

/* const StyledAbout = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;

  color: linear-gradient(
    130deg,
    var(--russian-violet-2) 0%,
    var(--eerie-black) 100%
  );
  width: 100%;
  min-height: 75vh;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  margin: 100px;

  @media only screen and (max-width: 600px) {
    margin: 20px;
  }

  h1 {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 20px;
    }
  }
`;

const StyledPresContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;



const StyledH3 = styled.h3`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 2rem;
  word-spacing: 2px;
`;

const StyledPara = styled.p`
  margin: 10px;
  margin-left: 20px;
  text-align: left;
  word-spacing: 4px;
`;

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

const ExpH3 = styled.h3`
  margin-bottom: 10px;
  margin-top: 30px;
  word-spacing: 2px;
  font-size: 2rem;
`;

const ExpPara = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  word-spacing: 2px;
  font-size: 1rem;
`;

const StyledCV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
`; */
/* const StyledImg = styled.img`
  border-radius: 2%;
  box-shadow: 1px 1px 5px 2px var(--light-gray);
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`; */
