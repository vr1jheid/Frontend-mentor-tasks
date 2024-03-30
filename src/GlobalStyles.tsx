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
  shadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.07)",
};

export const typography = {
  fontSize: {
    homepage: "16px",
    detail: "18px",
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

export const media = {
  mobile: "max-width: 600px",
};

export default GlobalStyles;
