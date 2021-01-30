import React from "react";
import myImage from "../../../Photos/Nikos_edited_00-6.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  img: {
    borderRadius: "2%",
    boxShadow: "1px 1px 5px 2px var(--light-gray)",
    width: "100%",
    marginTop: "30px",
  },
  h1: {
    fontSize: "4rem",
    marginBottom: "70px",
    marginTop: "30px",
    textAlign: "center",
  },

  styledPara: {
    /*  margin: "10px",
    marginLeft: "20px", */
    textAlign: "left",
    wordSpacing: "4px",
    fontSize: "16px",
    maxWidth: "250px",
  },
  expH3: {
    marginBottom: "10px",
    marginTop: "30px",
    wordSpacing: "2px",
    fontSize: "2rem",
    textJustify: "center",
  },
  expH1: {
    marginBottom: "10px",
    marginTop: "30px",
    wordSpacing: "2px",
    fontSize: "2.5rem",
  },
  expPara: {
    marginTop: "10px",
    marginBottom: "10px",
    wordSpacing: "2px",
    fontSize: "1rem",
  },
  stH1: {
    borderBottom: "1px, black ",
    marginBottom: "10px",
    marginTop: "30px",
    wordSpacing: "2px",
    fontSize: "2.5rem",
    paddingLeft: "10px",
  },
  stP: {
    marginTop: "10px",
    marginBottom: "10px",
    wordSpacing: "2px",
    fontSize: "1rem",
    paddingLeft: "10px",
  },
  stH3: {
    marginBottom: "10px",
    marginTop: "30px",
    wordSpacing: "1px",
    fontSize: "2rem",
    paddingLeft: "10px",
  },

  styledCV: {},
}));

function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" direction="row" align="center" justify="center">
      <div className={classes.root}>
        <Grid container lg={12}>
          <Grid item xs={12} lg={6} align="center" justify="space-between">
            <h1 className={classes.h1}>about me</h1>
            <p className={classes.styledPara}>
              Hey, I´m a Front-End Developer and I'm passionate about creating
              and developing web interfaces. Always ready to learn new things
              and expand my developing tools
            </p>
            <h3 className={classes.expH3}> 1 </h3>
            <p className={classes.expPara}>Year of experience</p>
            <h3 className={classes.expH3}> 3 </h3>
            <p className={classes.expPara}>Completed projects</p>
          </Grid>
          <Grid container xs={12} lg={3}>
            <img src={myImage} className={classes.img} alt="" />
          </Grid>
          <Grid item xs={6} direction="column" lg={6}>
            <h1 className={classes.stH1}>experience</h1>
            <h3 className={classes.stP}>front end developer</h3>
            <p className={classes.stPara}>student</p>
            <p className={classes.stPara}>September 2020 - June 2022</p>
          </Grid>
        </Grid>
      </div>
    </Container>
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
