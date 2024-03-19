import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
  font-size: var(--fz-p);
  --fz-p: 16px;

  --ff-primary: "Outfit", sans-serif;
  --ff-secondary: "Young Serif", serif;

  --fw-light: 400;
  --fw-mid: 600;
  --fw-bold: 700;

  --radii: 20px;

  --colors-nutmeg: hsl(14, 45%, 36%);
  --colors-dark-raspberry: hsl(332, 51%, 32%);
  --colors-white: hsl(330, 100%, 98%);
  --colors-eggshell: hsl(30, 54%, 90%);
  --colors-light-grey: hsl(30, 18%, 87%);
  --colors-wenge-brown: hsl(30, 10%, 34%);
  --colors-dark-charcoal: hsl(24, 5%, 18%);
}

* {
  box-sizing: border-box;
}

body {
  background-color: var(--colors-eggshell);
}

`;

export default GlobalStyles;
