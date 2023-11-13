import { useEffect, useState } from "react";
import MainLayout from "@/components/pages/main/main-layout/MainLayout";
import { API } from "@/apis/common/CommonApi";

const Home = () => {
  const [isLoadingOrAuthorized, setIsLoadingOrAuthorized] = useState<
    "loading" | "authorized"
  >("loading");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null || accessToken !== "") {
      API.get("/api/v1/token/valid").then(() => {
        setIsLoadingOrAuthorized("authorized");
      });
    }
  }, []);

  if (isLoadingOrAuthorized === "authorized") {
    return <MainLayout />;
  }
  return <></>;
};
export default Home;
