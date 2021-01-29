import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledHome = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 75vh;
  background: linear-gradient(135deg, #90e0efff 0%, #e0aaffff 100%);
  color: var(--baby-powder);

  h1 {
    font-size: 80px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 28px;

    @media only screen and (max-width: 600px) {
      font-size: 47px;
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

function index() {
  return (
    <StyledHome>
      <SmallLine></SmallLine>
      <h1>Nikolas Rosinelli</h1>
      <p>Web Developer</p>
      <SmallLine></SmallLine>
      <Button
        style={{ backgroundColor: "transparent", color: "white" }}
        Size="small"
        onClick={() => alert("Skickas till mitt CV sen")}
        variant="contained"
      >
        CV
      </Button>
    </StyledHome>
  );
}

export default index;
