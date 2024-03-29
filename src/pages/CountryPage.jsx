import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { lightTheme, other, typography, darkTheme } from "../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  selectCountries,
  selectIsLoading,
} from "../redux/slices/countries";
import addCommasToNum from "../utils/addComasToNum";
import { selectTheme } from "../redux/slices/theme";
import Loader from "../components/Loader";
import NotFound from "./NotFound";

const Container = styled.main`
  @media (max-width: 800px) {
    padding: 70px 30px;
  }

  min-height: calc(100vh - 100px);
  padding: 70px;
  font-size: ${typography.fontSize.detail};
  background-color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.lightGrey
      : darkTheme.colors.veryDarkBlue};
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1em;

  background-color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.whitem
      : darkTheme.colors.darkBlue};

  color: ${(props) =>
    props.$theme === "light"
      ? lightTheme.colors.veryDarkBlue
      : darkTheme.colors.white};

  border: none;
  padding: 10px 30px;
  outline: none;
  border-radius: ${other.borderRadius};
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
  }
`;

const CountryInfo = styled.section`
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  @media (max-width: 800px) {
    margin-top: 0px;
    gap: 0px;
  }

  margin-top: 80px;
  display: flex;
  align-items: center;
  gap: 10%;

  & > img {
    @media (max-width: 1550px) {
      width: 100%;
    }
    display: block;
    width: 600px;
    height: 400px;
    object-fit: contain;
  }
`;

const MainInfo = styled.div`
  @media (max-width: 1550px) {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
  row-gap: 15px;
  & > h1 {
    grid-column: 1/3;
    margin-bottom: 40px;
    font-size: 1.8em;
    font-weight: ${typography.weight.bold};
  }

  & > p {
    display: inline-flex;
    gap: 7px;
  }

  & > p > span {
    font-weight: ${typography.weight.bold};
  }
`;

const BorderCountries = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  grid-column: 1/3;
  margin-top: 30px;
  display: flex;
  gap: 20px;
  align-items: center;

  & button {
    width: 100%;
    height: 100%;
  }

  & > div {
    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 15px;
  }

  & > p {
    font-weight: ${typography.weight.bold};
  }
`;

const CountryPage = () => {
  const theme = useSelector(selectTheme);
  const { country: countryName } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (countries.length) return;
    dispatch(fetchCountries("https://restcountries.com/v3.1/all"));
  }, []);

  const country = countries.find(
    (country) => country.name.common.toLowerCase() === countryName.toLowerCase()
  );

  const borderCountries = country?.borders?.map(
    (alpha3Code) => countries.find((c) => c.cca3 === alpha3Code).name.common
  );

  const renderPage = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (!isLoading && !country) {
      return <NotFound />;
    }
    return (
      <CountryInfo>
        <img src={country.flags.svg} alt={country.flags.alt} />
        <MainInfo>
          <h1>{country.name.official}</h1>
          <p>
            <span>Native name:</span>
            {countryName.nativeName
              ? Object.values(Object.values(country.name.nativeName)[0]).join(
                  ", "
                )
              : "No Data"}
          </p>
          <p>
            <span>Population:</span>
            {addCommasToNum(country.population)}
          </p>
          <p>
            <span>Region:</span>
            {country.region}
          </p>
          <p>
            <span>Sub Region:</span>
            {country.subregion ?? "No data"}
          </p>
          <p>
            <span>Capital</span>
            {country.capital ?? "No data"}
          </p>
          <p>
            <span>Top Level Domain:</span>
            {country.tld.join(" ")}
          </p>
          <p>
            <span>Currencies:</span>
            {country.currencies
              ? Object.values(country.currencies)
                  .map((c) => c.name)
                  .join(", ")
              : "No Data"}
          </p>
          <p>
            <span>Languages:</span>
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "No Data"}
          </p>
          <BorderCountries>
            <p>Border Countries: </p>
            {!borderCountries ? (
              "No data"
            ) : (
              <div>
                {borderCountries.map((c) => (
                  <Link key={c} to={`/${c.toLowerCase()}`}>
                    <Button $theme={theme}>{c}</Button>
                  </Link>
                ))}
              </div>
            )}
          </BorderCountries>
        </MainInfo>
      </CountryInfo>
    );
  };

  return (
    <Container $theme={theme}>
      <Button $theme={theme} onClick={() => navigate(-1)}>
        <FaLongArrowAltLeft /> Back
      </Button>
      {renderPage()}
    </Container>
  );
};

export default CountryPage;
