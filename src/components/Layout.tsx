import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import { typography, lightTheme, darkTheme } from "../GlobalStyles";
import { selectTheme } from "../redux/slices/theme";
import { StyledProps } from "../sharedTypes/types";
import { useAppSelector } from "../redux/hooks";

const Wrapper = styled.div<StyledProps>`
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
  const theme = useAppSelector(selectTheme);
  return (
    <Wrapper $theme={theme}>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
