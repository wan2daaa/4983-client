// FIXME. accessToken 만료 확인을 위해서 서버에 요청하는 로직 필요
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import localFont from "next/font/local";
import { useRouter } from "next/router";
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
  const router = useRouter();

  console.log("router.pathname >>>>>>>", router.pathname);
  return (
    <RecoilRoot>
      <Head>
        <title>4983</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <main className={font.className}>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
