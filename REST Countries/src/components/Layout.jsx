import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { typography, lightTheme, darkTheme } from "../GlobalStyles";

const Wrapper = styled.div`
  font-size: ${typography.fontSize.homepage};
  color: ${lightTheme.colors.veryDarkBlue};
  /* color: #4a9a2d; */
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
