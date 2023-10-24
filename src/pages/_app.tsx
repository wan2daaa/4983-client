// FIXME. accessToken 만료 확인을 위해서 서버에 요청하는 로직 필요
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { GlobalStyle } from "@/styles/global-style";
import { API } from "@/apis/common/CommonApi";

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

  useEffect(() => {
    if (!router.isReady) return;

    if (
      ![
        "/signin",
        "/signup/[id]",
        "/signup",
        "/signup/1",
        "/signup/2",
        "/signup/3",
        "/signup/4",
        "/signup/5",
        "/signup/6",
        "/findpassword",
        "/find-password-reset",
        "find-password-finish",
        "contactus",
      ].includes(router.pathname)
    ) {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        axios
          .get("/api/v1/token/valid", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .catch(() => {
            localStorage.removeItem("accessToken");
            axios
              .get("/api/v1/token/update")
              .then(res => {
                localStorage.setItem("accessToken", res.headers.Authorization);
              })
              .catch(err => {
                alert("로그인이 만료되었습니다.");
                window.location.href = "/signin";
              });
          });
      } else {
        axios
          .get("/api/v1/token/update")
          .then(res => {
            localStorage.setItem("accessToken", res.headers.Authorization);
          })
          .catch(err => {
            alert("로그인이 만료되었습니다.");
            window.location.href = "/signin";
          });
      }
    }
  }, [router, router.isReady]);

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
