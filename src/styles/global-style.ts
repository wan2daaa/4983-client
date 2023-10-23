import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    max-width: 390px;
    padding: 0;
    margin: 0 auto;
    -webkit-text-size-adjust: none;
    font-size: 62.5%;
    font-family: SF Pro Display, serif;
  }

  body {
    max-width: 390px;
    padding: 0;
    margin: 0 auto;
    -webkit-text-size-adjust: none;
    font-size: 1.6rem;
    overflow-x: hidden;
    min-height: 100%
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    border: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }
`;
