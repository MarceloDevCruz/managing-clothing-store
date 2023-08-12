import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    letter-spacing: 1.8px;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color:#020300;
  }

  button {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    cursor: pointer;
    background: transparent;
    border: none;
    margin: 0;
    display: inline;
  }
`;