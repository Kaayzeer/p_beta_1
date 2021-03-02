import React, { useState } from "react";
import styled from "styled-components";
import { Typography, makeStyles } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import SpaRoundedIcon from "@material-ui/icons/SpaRounded";
import Modal from "./Modal";

const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
    @media only screen and (max-width: 350px) {
      font-size: 34px;
      font-weight: 400;
      letter-spacing: 1px;
      padding-bottom: 1px;
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
    @media only screen and (max-width: 350px) {
      font-size: 12px;
      padding-top: 5px;
    }
  }
`;

const SmallLine = styled.div`
  background: #fff;
  height: 2px;
  width: 120px;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 600px) {
    width: 70px;
  }
  @media only screen and (max-width: 350px) {
    width: 70px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const useStyles = makeStyles((theme) => ({
  Button: {
    backgroundColor: "transparent",
    color: "white",
    marginTop: "2%",
    letterSpacing: "3px",
    padding: "5px",
  },
}));

function Index() {
  const classes = useStyles();

  const [modal, setModal] = useState(false);

  return (
    <StyledHome>
      <SmallLine></SmallLine>
      <Typography variant="h2" color="secondary" component="h2">
        Nikolas Rosinelli
      </Typography>
      <SpaRoundedIcon color="secondary" />
      <Typography variant="body1" color="secondary" component="p">
        Web Developer
      </Typography>
      <SmallLine></SmallLine>
      <Button
        className={classes.Button}
        size="large"
        onClick={() => setModal(!modal)}
        variant="contained"
        /* elevation={5} */
      >
        CV
      </Button>
      {modal && <Modal />}
    </StyledHome>
  );
}

export default Index;
