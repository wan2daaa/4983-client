import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const API = axios.create({
  responseType: "json",
  withCredentials: true,
});

API.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken");
  console.log("여기는 들어와?");
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
    alert("로그인을 해주세요.");
    window.location.href = "/signin";
  }

  return config;
});
