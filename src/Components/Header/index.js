import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--baby-powder);
`;

function Header() {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
