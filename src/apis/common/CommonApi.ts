import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const API = axios.create({
  responseType: "json",
  withCredentials: true,
});

API.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken || accessToken !== "") {
    axios
      .get("/api/v1/token/valid", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .catch(() => {
        localStorage.setItem("accessToken", "");

        axios
          .get("/api/v1/token/update")
          .then(res => {
            localStorage.setItem("accessToken", res.headers.Authorization);
          })
          .catch(() => {
            // alert("로그인이 만료되었습니다.");
            redirect("/signin");
          });
      });
  } else {
    redirect("/signin");
  }

  return config;
});
