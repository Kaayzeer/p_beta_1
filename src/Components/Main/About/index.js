import React from "react";
import styled from "styled-components";
import myImage from "../../../Photos/Nikos_edited_00-6.jpg";

const StyledAbout = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 100%;
  min-height: 75vh;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
  margin: 100px;

  h1 {
    font-size: 3rem;
  }
`;

const StyledPresContent = styled.div`
  display: flex;
  flex-direction: row;
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

  /* @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  } */
`;

const StyledImg = styled.img`
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const StyledH3 = styled.h3`
  margin-left: 20px;
  margin-bottom: 10px;
  text-align: left;
`;

const StyledPara = styled.p`
  margin: 10px;
  margin-left: 20px;
  text-align: left;
`;

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30%;
`;

const ExpH3 = styled.h3`
  margin-bottom: 5px;
  margin-top: 20px;
`;

const ExpPara = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function index() {
  return (
    <StyledAbout>
      <h1>About me</h1>
      <StyledPresContent>
        <StyledLeftContent>
          <StyledH3>Welcome! I am</StyledH3>
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
        </StyledLeftContent>
        <StyledImg src={myImage} alt="Nikos about" />
      </StyledPresContent>
    </StyledAbout>
  );
}

export default index;
