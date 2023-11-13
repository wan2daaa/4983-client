import axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

export const API = axios.create({
  responseType: "json",
  withCredentials: true,
});

const onRequest = API.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig<any>,
  ): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig<any>> => {
    const accessToken = localStorage.getItem("accessToken");

    const originalConfig = config;

    if (accessToken) {
      originalConfig.headers!.Authorization = accessToken;
      return originalConfig;
    }

    alert("로그인 후 이용해 주세요.");
    window.location.href = "/signin";
    return originalConfig;
  },
  error => {
    Promise.reject(error);
  },
);

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
            const originalConfig = err.config
              ? err.config
              : ({} as AxiosRequestConfig);
            originalConfig.headers!.Authorization = res.headers.authorization;
            return axios(originalConfig);
          })
          .catch(() => {
            alert("로그인 후 이용해 주세요.");
            window.location.href = "/signin";
          });
      } else {
        alert("로그인 후 이용해 주세요.");
        window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  },
);
