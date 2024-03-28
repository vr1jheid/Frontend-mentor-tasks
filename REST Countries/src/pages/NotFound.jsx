import React from "react";
import styled from "styled-components";
import { lightTheme, darkTheme, typography } from "../GlobalStyles";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slices/theme";

const Container = styled.div`
  height: calc(100vh - 100px);
  padding: 70px;
  background-color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.lightGrey
      : darkTheme.colors.veryDarkBlue};

  & > p {
    text-align: center;
    line-height: 2em;
    font-size: 2em;
    font-weight: ${typography.weight.medium};
  }
`;

const NotFound = () => {
  const theme = useSelector(selectTheme);
  return (
    <Container $theme={theme}>
      <p>ERROR 404</p>
      <p>Page not found</p>
    </Container>
  );
};

export default NotFound;
