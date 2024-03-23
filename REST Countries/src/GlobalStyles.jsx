import { createGlobalStyle } from "styled-components";
import "./reset.css";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html{
    font-family: "Nunito Sans", sans-serif;
  }
`;

export const darkTheme = {
  colors: {
    darkBlue: "hsl(209, 23%, 22%)",
    veryDarkBlue: "hsl(207, 26%, 17%)",
    white: "hsl(0, 0%, 100%)",
  },
};

export const lightTheme = {
  colors: {
    veryDarkBlue: "hsl(200, 15%, 8%)",
    darkGrey: "hsl(0, 0%, 52%)",
    lightGrey: "hsl(0, 0%, 98%)",
    white: "hsl(0, 0%, 100%)",
  },
};

export const typography = {
  fontSize: {
    homepage: "14px",
    detail: "16px",
  },
  weight: {
    regular: 400,
    medium: 600,
    bold: 800,
  },
};

export const other = {
  borderRadius: "5px",
};

export default GlobalStyles;
