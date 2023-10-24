import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "@/components/pages/main/main-layout/MainLayout";

const Home = () => {
  const [isLoadingOrAuthorized, setIsLoadingOrAuthorized] = useState<
    "loading" | "authorized"
  >("loading");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (
      accessToken !== null ||
      accessToken !== undefined ||
      accessToken !== ""
    ) {
      axios
        .get("/api/v1/token/valid", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          setIsLoadingOrAuthorized("authorized");
        })
        .catch(err => {
          console.log("토큰 검증 X >>>>>>>>>", err);
          localStorage.removeItem("accessToken");
          axios
            .get("/api/v1/token/update")
            .then(res => {
              localStorage.setItem("accessToken", res.headers.Authorization);
              setIsLoadingOrAuthorized("authorized");
            })
            .catch(errs => {
              console.log("refreshToken X >>>>>>>>>", errs);

              alert("로그인이 만료되었습니다.");
              window.location.href = "/signin";
            });
        });
    } else {
      axios
        .get("/api/v1/token/update")
        .then(res => {
          localStorage.setItem("accessToken", res.headers.Authorization);
          setIsLoadingOrAuthorized("authorized");
        })
        .catch(err => {
          alert("로그인이 만료되었습니다.");
          window.location.href = "/signin";
        });
    }
  }, []);

  if (isLoadingOrAuthorized === "authorized") {
    return <MainLayout />;
  }
  return <></>;
};
export default Home;
