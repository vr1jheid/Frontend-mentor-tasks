import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { darkTheme, lightTheme, other, typography } from "../../GlobalStyles";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useSelector } from "react-redux";
import { selectRegionFilter } from "../../redux/slices/filter";
import { selectTheme } from "../../redux/slices/theme";

const Container = styled.div`
  width: 180px;
  height: 55px;
  position: relative;
  border: none;
  border-radius: ${other.borderRadius};
  box-shadow: ${lightTheme.shadow};
  background-color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.white
      : darkTheme.colors.darkBlue};
  color: inherit;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  font-weight: ${typography.weight.medium};
  width: 100%;
  height: 100%;
  border: none;
  background-color: inherit;
  border-radius: ${other.borderRadius};
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding: 10px 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  position: absolute;
  top: 60px;
  left: 0px;
  width: 100%;
  background-color: inherit;
  border-radius: ${other.borderRadius};
  box-shadow: ${lightTheme.shadow};
`;

const Option = styled.li`
  font-size: 1.1em;
  padding: 5px 20px;
  &:hover {
    background-color: ${(props) =>
      props.$theme === "light"
        ? lightTheme.colors.lightGrey
        : darkTheme.colors.veryDarkBlue};
  }
`;

const Select = ({ options, title, dispatchOption }) => {
  const theme = useSelector(selectTheme);
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = useSelector(selectRegionFilter);

  const closeSelect = useCallback((e) => {
    console.log(isOpen);
    if (ref.current.contains(e.target)) return;
    setIsOpen(false);
    window.removeEventListener("click", closeSelect);
  }, []);

  const clickHandler = () => {
    if (!isOpen) {
      window.addEventListener("click", closeSelect);
    } else {
      window.removeEventListener("click", closeSelect);
    }
    setIsOpen(!isOpen);
  };

  return (
    <Container $theme={theme}>
      <Button ref={ref} onClick={clickHandler}>
        {selectedOption || title}
        {isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
      </Button>

      {isOpen && (
        <Options tabIndex={0}>
          {options.map((option) => (
            <Option
              $theme={theme}
              key={option}
              tabIndex={0}
              onClick={() => {
                dispatchOption(option);
              }}
            >
              {option}
            </Option>
          ))}
        </Options>
      )}
    </Container>
  );
};

export default Select;
