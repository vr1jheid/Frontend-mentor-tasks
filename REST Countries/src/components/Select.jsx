import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { lightTheme, other, typography } from "../GlobalStyles";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { useSelector } from "react-redux";
import { selectRegionFilter } from "../redux/slices/filter";

const Container = styled.div`
  width: 180px;
  position: relative;
  border: none;
  border-radius: ${other.borderRadius};
  -webkit-box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  -moz-box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  color: inherit;
`;

const Button = styled.button`
  font-weight: ${typography.weight.medium};
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${lightTheme.colors.white};
  border-radius: ${other.borderRadius};
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding: 10px 20px;
`;

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  position: absolute;
  top: 60px;
  left: 0px;
  width: 100%;
  background-color: ${lightTheme.colors.white};
  border-radius: ${other.borderRadius};
  -webkit-box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  -moz-box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);

  & li {
    font-size: 1.1em;
    padding: 5px 20px;
    &:hover {
      background-color: ${lightTheme.colors.lightGrey};
    }
  }
`;

const Select = ({ options, title, dispatchOption }) => {
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
    <Container>
      <Button ref={ref} onClick={clickHandler}>
        {selectedOption || title}
        {isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
      </Button>

      {isOpen && (
        <Options tabIndex={0}>
          {options.map((option) => (
            <li
              key={option}
              tabIndex={0}
              onClick={() => {
                dispatchOption(option);
              }}
            >
              {option}
            </li>
          ))}
        </Options>
      )}
    </Container>
  );
};

export default Select;
