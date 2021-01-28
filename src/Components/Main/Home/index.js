import React from "react";
import styled from "styled-components";

const StyledHome = styled.main`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 75vh;
  background: linear-gradient(135deg, #90e0efff 0%, #e0aaffff 100%);
`;

function index() {
  return (
    <StyledHome>
      <h1>ORALE</h1>
    </StyledHome>
  );
}

export default index;
