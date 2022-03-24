import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Amaranth', sans-serif;
}

html, body {
    overflow-x: hidden;
}

::selection {
  color: #ffffff;
  background: #e1a33b;
}
`;

export default GlobalStyle;