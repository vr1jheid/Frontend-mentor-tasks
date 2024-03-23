import React from "react";
import styled from "styled-components";
import Select from "./Select";
import { IoIosSearch } from "react-icons/io";

import { lightTheme, other } from "../GlobalStyles";

const Search = styled.div`
  width: 400px;
  background-color: ${lightTheme.colors.white};

  padding: 5px 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: ${other.borderRadius};
  -webkit-box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  -moz-box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);
  box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.15);

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

  return (
    <Container>
      <Search>
        <IoIosSearch />
        <input type="text" placeholder="Search for a country..." />
      </Search>
      <Select options={regions} title={"Filter by region"} />
    </Container>
  );
};

export default Filter;
