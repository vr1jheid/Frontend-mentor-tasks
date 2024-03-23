import React from "react";
import styled from "styled-components";
import Filter from "../components/Filter";

import { lightTheme } from "../GlobalStyles";

const Main = styled.main`
  padding: 45px 70px;
  min-height: 700px;
  background-color: ${lightTheme.colors.lightGrey};
  -webkit-box-shadow: 0px 2px 19px -5px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 2px 19px -5px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 2px 19px -5px rgba(34, 60, 80, 0.2) inset;
`;

const Countries = styled.div``;

const Homepage = () => {
  return (
    <Main>
      <Filter />
      <Countries></Countries>
    </Main>
  );
};

export default Homepage;
