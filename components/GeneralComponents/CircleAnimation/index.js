import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  width: 20px;
  height: 20px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-left-color: black;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = () => {
  return <SpinnerWrapper />;
};

export default Spinner;
