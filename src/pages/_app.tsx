import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "@/styles/global-style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>4983</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
