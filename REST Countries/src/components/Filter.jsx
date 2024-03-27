import React from "react";
import styled from "styled-components";
import Select from "./Select";
import { IoIosSearch } from "react-icons/io";

import { lightTheme, other } from "../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNameFilter,
  setNameFilter,
  setRegionFilter,
} from "../redux/slices/filter";

const Search = styled.div`
  width: 400px;
  background-color: ${lightTheme.colors.white};

  padding: 5px 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: ${other.borderRadius};
  box-shadow: ${lightTheme.shadow};

  & > input[type="text"] {
    font-size: 1.2em;
    background-color: ${lightTheme.colors.white};
    border: none;
    padding: 10px 5px;
    outline: none;
  }

  & > svg {
    width: 17px;
    height: 17px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  height: 55px;
`;

const Filter = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const dispatch = useDispatch();
  const searchByNameHandler = (e) => {
    dispatch(setNameFilter(e.target.value));
  };
  const filterByRegionHandler = (value) => {
    dispatch(setRegionFilter(value));
  };

  return (
    <Container>
      <Search>
        <IoIosSearch />
        <input
          value={useSelector(selectNameFilter)}
          onChange={searchByNameHandler}
          type="text"
          placeholder="Search for a country..."
        />
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
