import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }
  
  body {
    font-family: Roboto, serif;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
