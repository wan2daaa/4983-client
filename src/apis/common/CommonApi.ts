import axios from "axios";

export const API = axios.create({
  responseType: "json",
  withCredentials: true,
});

API.interceptors.request.use(config => {
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

  return config;
});
