import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: SF Pro Display;
    font-weight: 700;
    src: url('../assets/fonts/SF-Pro-Display-Bold.woff') format('woff');
  }
  @font-face {
    font-family: SF Pro Display;
    font-weight: 500;
    src: url('../assets/fonts/SF-Pro-Display-Medium.woff') format('woff');
  }
  @font-face {
    font-family: SF Pro Display;
    font-weight: 400;
    src: url('../assets/fonts/SF-Pro-Display-Regular.woff') format('woff');
  }
  
  html {
    max-width: 390px;
    padding: 0;
    margin: 0px auto;
    -webkit-text-size-adjust: none;
    font-size: 62.5%;
    font-family: "SF Pro Display";
  }
  body {
    max-width: 390px;
    padding: 0;
    margin: 0px auto;
    -webkit-text-size-adjust: none;
    font-size: 1.6rem;
    overflow-x: hidden;
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
