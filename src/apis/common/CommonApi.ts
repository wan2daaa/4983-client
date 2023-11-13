import axios, { AxiosError } from "axios";

export const API = axios.create({
  responseType: "json",
  withCredentials: true,
});

API.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = accessToken;
    return config;
  }
  alert("로그인 후 이용해 주세요.");
  window.location.assign("/signin");
});

API.interceptors.response.use(
  res => res,
  async error => {
    const err = error as AxiosError;

    if (err.response && err.response.status) {
      if (err.response.status !== 403) {
        return Promise.reject(error);
      }
      const accessToken = await localStorage.getItem("accessToken");
      if (accessToken) {
        await axios
          .get("/api/v1/token/update", {
            withCredentials: true,
            headers: {
              Authorization: accessToken,
            },
          })
          .then(res => {
            localStorage.setItem("accessToken", res.headers.authorization);
            const originalConfig = err.config;
            originalConfig.headers.Authorization = res.headers.authorization;
            return axios(originalConfig);
          })
          .catch(() => {
            alert("로그인이 만료되었습니다.");
            window.location.assign("/signin");
          });
      }
      alert("로그인이 만료되었습니다.");
      window.location.assign("/");
    }
    return Promise.reject(error);
  },
);
