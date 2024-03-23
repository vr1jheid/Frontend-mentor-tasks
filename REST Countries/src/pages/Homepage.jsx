import React from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import Card from "../components/Card";

import { lightTheme } from "../GlobalStyles";

const Main = styled.main`
  padding: 50px 70px;
  min-height: 700px;
  background-color: ${lightTheme.colors.lightGrey};
  -webkit-box-shadow: 0px 2px 19px -5px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 2px 19px -5px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 2px 19px -5px rgba(34, 60, 80, 0.2) inset;
`;

const Countries = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  justify-content: space-between;
  row-gap: 50px;
`;

const Homepage = () => {
  return (
    <Main>
      <Filter />
      <Countries>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Countries>
    </Main>
  );
};

export default Homepage;
