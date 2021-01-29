import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--baby-powder);
`;

function Header() {
  return (
    <StyledHeader>
      <h1></h1>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
