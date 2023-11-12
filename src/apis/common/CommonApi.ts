import axios from "axios";

export const API = axios.create({
  responseType: "json",
  withCredentials: true,
});

API.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    axios
      .get("https://dev.deunku.com/api/v1/token/valid", {
        withCredentials: true,
        headers: {
          Authorization: accessToken,
        },
      })
      .then(() => {
        config.headers.Authorization = accessToken;
      })
      .catch(() => {
        axios
          .get("/api/v1/token/update", {
            withCredentials: true,
          })
          .then(res => {
            localStorage.setItem("accessToken", res.headers.Authorization);
            config.headers.Authorization = res.headers.authorization;
          })
          .catch(err => {
            alert("로그인이 만료되었습니다.");
            window.location.href = "/signin";
          });
      });

    return config;
  }

  axios
    .get("/api/v1/token/update", {
      withCredentials: true,
    })
    .then(res => {
      localStorage.setItem("accessToken", res.headers.Authorization);
      config.headers.Authorization = res.headers.authorization;
    })
    .catch(err => {
      alert("로그인이 만료되었습니다.");
      window.location.href = "/signin";
    });

  return config;
});

API.interceptors.response.use(
  res => res,
  async err => {
    const {
      config,
      response: { status },
    } = err;
    const originalRequest = config;

    if (status !== 403) {
      return Promise.reject(err);
    }

    const {
      headers: { authorization },
    } = await axios.get("/api/v1/token/update", {
      withCredentials: true,
    });
    localStorage.setItem("accessToken", authorization);

    if (typeof authorization === "string") {
      config.headers.Authorization = authorization;
      return axios(config);
    }

    alert("로그인이 만료되었습니다");
    window.location.href = "/";
  },
);

// API.interceptors.request.use(config => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     axios
//       .get("/api/v1/token/valid", {
//         headers: {
//           Authorization: accessToken,
//         },
//       })
//       .catch(() => {
//         localStorage.removeItem("accessToken");
//         axios
//           .get("/api/v1/token/update")
//           .then(res => {
//             localStorage.setItem("accessToken", res.headers.Authorization);
//           })
//           .catch(err => {
//             alert("로그인이 만료되었습니다.");
//             window.location.href = "/signin";
//           });
//       });
//   } else {
//     axios
//       .get("/api/v1/token/update")
//       .then(res => {
//         localStorage.setItem("accessToken", res.headers.Authorization);
//       })
//       .catch(err => {
//         alert("로그인이 만료되었습니다.");
//         window.location.href = "/signin";
//       });
//   }
//
//   return config;
// });
