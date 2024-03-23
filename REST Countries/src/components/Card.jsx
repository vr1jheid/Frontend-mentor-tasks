import React from "react";
import styled from "styled-components";
import { lightTheme, other, typography } from "../GlobalStyles";

const Container = styled.div`
  background-color: ${lightTheme.colors.white};
  width: fit-content;
  border-radius: ${other.borderRadius};
  -webkit-box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  -moz-box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  overflow: hidden;

  & > img {
    display: block;
    width: 320px;
    height: 200px;
  }
`;

const Bold = styled.span`
  font-weight: ${typography.weight.bold};
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
  padding-bottom: 45px;

  & > h1 {
    font-size: 1.3em;
    font-weight: ${typography.weight.bold};
    margin-bottom: 15px;
  }

  & > p {
    display: inline-flex;
    gap: 5px;
  }
`;

const Card = (props) => {
  const { flags, name, population, region, capital } = props;
  console.log(flags);
  return (
    <Container>
      <img src={flags.png} />
      <Info>
        <h1>{name}</h1>
        <p>
          <Bold>Population:</Bold> {population}
        </p>
        <p>
          <Bold>Region:</Bold>
          {region}
        </p>
        <p>
          <Bold>Capital:</Bold>
          {capital}
        </p>
      </Info>
    </Container>
  );
};

export default Card;
