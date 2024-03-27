import React, { useEffect } from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";

import { lightTheme } from "../GlobalStyles";
import countries, {
  fetchCountries,
  selectCountries,
  selectIsLoading,
} from "../redux/slices/countries";
import { selectNameFilter, selectRegionFilter } from "../redux/slices/filter";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

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
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (countries.length) return;
    /* dispatch(fetchCountries("http://localhost:3000/countries")); */
    dispatch(fetchCountries("https://restcountries.com/v3.1/all"));
  }, []);
  console.log(countries);
  const filteredCountries = countries?.filter(
    ({ name, region }) =>
      name.official.toLowerCase().includes(nameFilter.toLowerCase()) &&
      region.toLowerCase().includes(regionFilter.toLowerCase())
  );
  const renderCountriesCards = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (!isLoading && !countries.length) {
      return <Error message={"Lost connection with API server"} />;
    }
    return (
      <Countries>
        {filteredCountries.length &&
          filteredCountries.map((country) => (
            <Link
              style={{ textDecoration: "none" }}
              key={country.name.official}
              to={country.name.common.toLowerCase()}
            >
              <Card {...country} />
            </Link>
          ))}
      </Countries>
    );
  };

  return (
    <Main>
      <Filter />
      {renderCountriesCards()}
      {/*       <Countries>
        {filteredCountries.length &&
          filteredCountries.map((country) => (
            <Link
              style={{ textDecoration: "none" }}
              key={country.name}
              to={country.name.toLowerCase()}
            >
              <Card {...country} />
            </Link>
          ))}
      </Countries> */}
    </Main>
  );
};

export default Homepage;
