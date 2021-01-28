import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: lavender;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
