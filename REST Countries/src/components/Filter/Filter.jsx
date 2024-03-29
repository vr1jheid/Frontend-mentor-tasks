import React from "react";
import styled from "styled-components";
import Select from "./Select";
import StyledButton from "./StyledButton";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { darkTheme, lightTheme, media, other } from "../../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNameFilter,
  setNameFilter,
  setRegionFilter,
} from "../../redux/slices/filter";
import { selectTheme } from "../../redux/slices/theme";

const Search = styled.div`
  @media (${media.mobile}) {
    width: 100%;
  }

  width: 400px;
  padding: 5px 20px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 55px;
  border-radius: ${other.borderRadius};
  box-shadow: ${lightTheme.shadow};
  color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.veryDarkBlue
      : lightTheme.colors.lightGrey};

  background-color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.white
      : darkTheme.colors.darkBlue};

  & > input[type="text"] {
    flex-grow: 1;
    font-size: 1.2em;
    border: none;
    padding: 10px 5px;
    outline: none;
    background-color: inherit;
    color: inherit;
  }

  & > input::placeholder {
    color: inherit;
  }

  & > svg {
    width: 25px;
    height: 25px;
  }
`;

const Container = styled.div`
  @media (${media.mobile}) {
    flex-direction: column;
    gap: 50px;
    padding: 50px 20px;
  }
  padding: 50px 70px;
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.lightGrey
      : darkTheme.colors.veryDarkBlue};
`;

const Filter = () => {
  const theme = useSelector(selectTheme);
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const dispatch = useDispatch();
  const searchByNameHandler = (e) => {
    dispatch(setNameFilter(e.target.value));
  };
  const filterByRegionHandler = (value) => {
    dispatch(setRegionFilter(value));
  };

  return (
    <Container $theme={theme}>
      <Search $theme={theme}>
        <IoIosSearch />
        <input
          value={useSelector(selectNameFilter)}
          onChange={searchByNameHandler}
          type="text"
          placeholder="Search for a country..."
        />

        <StyledButton onClick={() => dispatch(setNameFilter(""))}>
          <IoMdClose />
        </StyledButton>
      </Search>
      <Select
        options={regions}
        title={"Filter by region"}
        dispatchOption={filterByRegionHandler}
      />
    </Container>
  );
};

export default Filter;
