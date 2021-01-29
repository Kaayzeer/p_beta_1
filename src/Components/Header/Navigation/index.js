import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const StyledLi = styled.li`
  padding: 10px;
  color: var(--dark-orchid);
  letter-spacing: 1px;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
  a:link,
  a:visited {
    color: var(--dark-orchid);
  }
  a:hover {
    color: var(--dark-orchid);
  }
  a:active {
    color: var(--dark-orchid);
  }
`;

function index() {
  return (
    <StyledUL>
      <StyledLi>
        <Link to="/">Home</Link>
      </StyledLi>
      <StyledLi>
        <Link to="/about">About</Link>
      </StyledLi>
      <StyledLi>
        <Link to="/contact">Contact</Link>
      </StyledLi>
      <StyledLi>
        <Link to="/projects">Projects</Link>
      </StyledLi>
    </StyledUL>
  );
}

export default index;
