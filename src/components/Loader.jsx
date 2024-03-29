import React from "react";
import { RiLoaderFill } from "react-icons/ri";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  width: 100vw;
  padding: 50px;
  display: flex;
  justify-content: center;
  & > svg {
    width: 30%;
    height: 30%;
    animation: 1s ${spin} infinite linear;
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <RiLoaderFill />
    </LoaderContainer>
  );
};

export default Loader;
