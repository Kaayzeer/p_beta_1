import React from "react";
import styled from "styled-components";
import {Typography} from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import SpaRoundedIcon from "@material-ui/icons/SpaRounded";



const StyledHome = styled.main`
  /*  padding: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
  background: linear-gradient(135deg, #90e0efff 0%, #e0aaffff 100%);

  h2 {
    font-size: 80px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 28px;
   

    @media only screen and (max-width: 600px) {
      font-size: 40px;
      font-weight: 400;
      letter-spacing: 1px;
      margin-bottom: 28px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 7px;
    margin-top: 30px;

    @media only screen and (max-width: 600px) {
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 4px;
    }
  }
`;

const SmallLine = styled.div`
  background: #fff;
  height: 2px;
  width: 120px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;

  @media only screen and (max-width: 600px) {
    width: 70px;
  }
`;

/* const useStyles = makeStyles((theme) => ({
  typography: {
    h1: {
      fontSize: "80px",
      fontWeight: "400",
      letterSpacing: "1px",
      marginBottom: "28px",
    },
  },
})); */

function Index() {
  /* const classes = useStyles() */
  return (
    <StyledHome>
      <SmallLine></SmallLine>
      <Typography 
      variant='h2' 
      color='secondary' 
      component='h2'
      
      >Nikolas Rosinelli</Typography>
      <SpaRoundedIcon color='secondary'/>
      <Typography variant='body1' color='secondary' component='p'>Web Developer</Typography>
      <SmallLine></SmallLine>
      <Button
        style={{ backgroundColor: "transparent", color: "white" }}
        size="small"
        onClick={() => alert("Skickas till mitt CV sen")}
        variant="contained"
      >
        CV
      </Button>
    </StyledHome>
  );
}

export default Index;
