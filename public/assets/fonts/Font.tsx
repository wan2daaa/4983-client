import { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "SF Pro Display";
    src:
      url("/public/assets/fonts/SF-Pro-Display-Black.otf") format("otf"),
      url("/public/assets/fonts/SF-Pro-Display-Bold.otf") format("otf"),
      url("/public/assets/fonts/SF-Pro-Display-Medium.otf") format("otf");
      url("/public/assets/fonts/SF-Pro-Display-Regular.otf") format("otf");
  }
`;

export const Font = {
  Family: "SF Pro Display",
  Size: {
    XS: "1rem",
    S: "1.2rem",
    M: "1.4rem",
    L: "1.5rem",
    XL: "1.8rem",
    XXL: "2rem",
  },
};
