import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #0b0c10;
    color: #66fcf1;
    font-family: 'Orbitron', sans-serif;
  }

  a {
    color: #45a29e;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #c5c6c7;
  }
`;

export default GlobalStyle;
