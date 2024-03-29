import React from "react";
import styled from "styled-components";
import {
  darkTheme,
  lightTheme,
  other,
  typography,
  media,
} from "../GlobalStyles";
import addComasToNum from "../utils/addComasToNum";
import theme, { selectTheme } from "../redux/slices/theme";
import { useSelector } from "react-redux";

const Container = styled.div`
  @media (${media.mobile}) {
    width: 100%;
  }
  background-color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.white
      : darkTheme.colors.darkBlue};

  color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.veryDarkBlue
      : darkTheme.colors.white};
  width: fit-content;
  height: 430px;
  border-radius: ${other.borderRadius};
  box-shadow: ${lightTheme.shadow};
  overflow: hidden;

  & > img {
    @media (${media.mobile}) {
      width: 100%;
    }
    display: block;
    width: 320px;
    height: 200px;
  }
`;

const Bold = styled.span`
  font-weight: ${typography.weight.bold};
`;

const Info = styled.section`
  font-size: 1.3em;
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
  const theme = useSelector(selectTheme);
  const { flags, name, population, region, capital } = props;
  return (
    <Container $theme={theme}>
      <img src={flags.png} />
      <Info>
        <h1>{name.official}</h1>
        <p>
          <Bold>Population:</Bold> {addComasToNum(population)}
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
