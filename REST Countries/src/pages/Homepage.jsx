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
import { Link } from "react-router-dom";

const Main = styled.main`
  padding: 50px 70px;
  min-height: 700px;
  background-color: ${lightTheme.colors.lightGrey};
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
  const countries = useSelector(selectCountries);
  useEffect(() => {
    if (countries.length) return;
    setTimeout(() => {
      dispatch(fetchCountries("http://localhost:3000/countries"));
    }, 0);
  }, []);

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
            <Link
              style={{ textDecoration: "none" }}
              key={country.name}
              to={country.name}
            >
              <Card {...country} />
            </Link>
          ))}
      </Countries>
    </Main>
  );
};

export default Homepage;
