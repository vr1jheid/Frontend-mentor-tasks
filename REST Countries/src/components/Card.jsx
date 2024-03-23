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

const Card = () => {
  return (
    <Container>
      <img src="https://flagcdn.com/w320/de.png" />
      <Info>
        <h1>Germany</h1>
        <p>
          <Bold>Population:</Bold> 81,770,345
        </p>
        <p>
          <Bold>Region:</Bold>
          Europe
        </p>
        <p>
          <Bold>Capital:</Bold>
          Berlin
        </p>
      </Info>
    </Container>
  );
};

export default Card;
