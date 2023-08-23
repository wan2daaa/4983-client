import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global-style";
import Head from "next/head";
import { GlobalFonts } from "../../public/assets/fonts/Font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalFonts />
      <Head>
        <title>4983</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
