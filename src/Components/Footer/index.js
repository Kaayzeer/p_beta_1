import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: var(--baby-powder);
  color: white;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>||| streck på min outfit</p>
    </StyledFooter>
  );
}

export default Footer;
