import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 40px; //Temporary
  background-color: var(--baby-powder);
  color: var(--dark-orchid);
`;

function Footer() {
  return (
    <StyledFooter>
      <h3>||| streck på min outfit</h3>
      <GitHubIcon></GitHubIcon>
    </StyledFooter>
  );
}

export default Footer;
