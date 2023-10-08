import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import localFont from "next/font/local";
import { GlobalStyle } from "@/styles/global-style";

const font = localFont({
  src: [
    {
      path: "../assets/fonts/SF-Pro-Display-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/SF-Pro-Display-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/SF-Pro-Display-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>4983</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={font.className}>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
