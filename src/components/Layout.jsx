import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { typography, lightTheme, darkTheme } from "../GlobalStyles";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slices/theme";

const Wrapper = styled.div`
  font-size: ${typography.fontSize.homepage};
  color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.veryDarkBlue
      : darkTheme.colors.white};

  background-color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.white
      : darkTheme.colors.darkBlue};
`;

const Layout = () => {
  const theme = useSelector(selectTheme);
  return (
    <Wrapper $theme={theme}>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
