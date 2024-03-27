import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { lightTheme, other, typography, darkTheme } from "../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, selectCountries } from "../redux/slices/countries";
import addCommasToNum from "../utils/addComasToNum";
const Container = styled.main`
  max-height: calc(100vh - 100px);
  padding: 70px;
  font-size: ${typography.fontSize.detail};
  background-color: ${lightTheme.colors.lightGrey};
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1em;
  background-color: ${lightTheme.colors.white};
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
  margin-top: 80px;
  display: flex;
  gap: 250px;

  & > img {
    display: block;
    width: 600px;
    height: 400px;
    object-fit: contain;
  }
`;

const MainInfo = styled.div`
  padding: 50px 0px;
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
  grid-column: 1/3;
  margin-top: 30px;
  display: flex;
  gap: 20px;
  align-items: center;

  & > div {
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
  const { country: countryName } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const navigate = useNavigate();

  useEffect(() => {
    if (countries.length) return;
    setTimeout(() => {
      dispatch(fetchCountries("http://localhost:3000/countries"));
    }, 0);
  }, []);
  const country = countries.find((country) => country.name === countryName);

  const borderCountries = country?.borders?.map(
    (alpha3Code) => countries.find((c) => c.alpha3Code === alpha3Code).name
  );
  console.log(country);
  return (
    <Container>
      <Button onClick={() => navigate(-1)}>
        <FaLongArrowAltLeft /> Back
      </Button>

      {!country ? (
        "Loader"
      ) : (
        <CountryInfo>
          <img src={country.flag} alt="Flag" />
          <MainInfo>
            <h1>{country.name}</h1>
            <p>
              <span>Native name:</span>
              {country.nativeName}
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
              {country.subregion}
            </p>
            <p>
              <span>Capital</span>
              {country.capital ?? "No data"}
            </p>
            <p>
              <span>Top Level Domain:</span>
              {country.topLevelDomain}
            </p>
            <p>
              <span>Currencies:</span>
              {country.currencies ? country.currencies[0].name : "No Data"}
            </p>
            <p>
              <span>Languages:</span>
              {country.languages.map((l) => l.name).join(", ")}
            </p>
            <BorderCountries>
              <p>Border Countries: </p>
              {!borderCountries ? (
                "No data"
              ) : (
                <div>
                  {borderCountries.map((c) => (
                    <Link key={c} to={`/${c}`}>
                      <Button>{c}</Button>
                    </Link>
                  ))}
                </div>
              )}
            </BorderCountries>
          </MainInfo>
        </CountryInfo>
      )}
    </Container>
  );
};

export default CountryPage;
