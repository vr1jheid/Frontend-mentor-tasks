import React, { useEffect } from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";

import { lightTheme } from "../GlobalStyles";
import countries, {
  fetchCountries,
  selectCountries,
} from "../redux/slices/countries";
import { selectNameFilter, selectRegionFilter } from "../redux/slices/filter";

const Main = styled.main`
  padding: 50px 70px;
  min-height: 700px;
  background-color: ${lightTheme.colors.lightGrey};
  -webkit-box-shadow: 0px 2px 19px -5px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 2px 19px -5px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 2px 19px -5px rgba(34, 60, 80, 0.2) inset;
`;

const Countries = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  justify-content: space-between;
  row-gap: 50px;
`;

const Homepage = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const regionFilter = useSelector(selectRegionFilter);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCountries("http://localhost:3000/countries"));
    }, 0);
  }, []);
  const countries = useSelector(selectCountries);

  const filteredCountries = countries.filter(
    ({ name, region }) =>
      name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      region.toLowerCase().includes(regionFilter.toLowerCase())
  );
  console.log(filteredCountries);

  return (
    <Main>
      <Filter />
      <Countries>
        {filteredCountries.length &&
          filteredCountries.map((country) => (
            <Card {...country} key={country.name} />
          ))}
      </Countries>
    </Main>
  );
};

export default Homepage;
