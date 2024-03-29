import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import {
  lightTheme,
  darkTheme,
  typography,
  other,
  media,
} from "../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, selectTheme } from "../redux/slices/theme";

const StyledHeader = styled.header`
  @media (${media.mobile}) {
    padding: 30px 20px;
  }

  padding: 30px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  color: inherit;
  margin-bottom: 5px;
  box-shadow: ${lightTheme.shadow};
`;

const Title = styled.h1`
  @media (${media.mobile}) {
    font-size: 1.4em;
  }

  font-size: 1.7em;
  font-weight: ${typography.weight.bold};
  border-radius: ${other.borderRadius};

  &:hover {
    transform: scale(1.06);
  }
`;

const ThemeSwitcher = styled.button`
  border: none;
  background-color: inherit;
  padding: 10px;
  font-weight: ${typography.weight.regular};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: ${other.borderRadius};
  color: inherit;
  background-color: inherit;

  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <StyledHeader>
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        <Title>Where in the world?</Title>
      </Link>

      <ThemeSwitcher onClick={() => dispatch(changeTheme())}>
        {theme === "light" ? <MdOutlineDarkMode /> : <MdDarkMode />} Dark mode
      </ThemeSwitcher>
    </StyledHeader>
  );
};

export default Header;
