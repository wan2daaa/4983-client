import axios from "axios";

export const Signin = async (studentId: string, password: string) => {
  await axios
    .post(
      "/api/v1/login",
      {
        studentId,
        password,
      },
      {
        withCredentials: true,
      },
    )
    .then(response => {
      const accessToken = response.headers.authorization;
      localStorage.setItem("accessToken", accessToken);
      window.location.href = `/`;
    })
    .catch(error => {
      console.error("로그인 실패", error);
      throw error.response.data.message;
    });
};
