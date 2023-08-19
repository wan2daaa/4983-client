import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    max-width: 390px;
    padding: 0;
    margin: 0px auto;
    -webkit-text-size-adjust: none;
    
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
