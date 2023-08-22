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
    XS: "10px",
    S: "12px",
    M: "14px",
    L: "15px",
    XL: "18px",
    XXL: "20px",
  },
};
