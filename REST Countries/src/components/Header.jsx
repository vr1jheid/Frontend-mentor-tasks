import React from "react";
import styled from "styled-components";
import { FaRegMoon } from "react-icons/fa6";
import { lightTheme, darkTheme, typography } from "../GlobalStyles";

const StyledHeader = styled.header`
  padding: 30px 70px;
  display: flex;
  justify-content: space-between;
  background-color: ${lightTheme.colors.white};
  color: inherit;
`;

const Title = styled.h1`
  font-size: 1.7em;
  font-weight: ${typography.weight.bold};
`;

const ThemeSwitcher = styled.div`
  font-weight: ${typography.weight.medium};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>Where in the world?</Title>
      <ThemeSwitcher>
        <FaRegMoon /> Dark mode
      </ThemeSwitcher>
    </StyledHeader>
  );
};

export default Header;
