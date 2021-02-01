import React from "react";
import styled from "styled-components";

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
    </StyledFooter>
  );
}

export default Footer;
