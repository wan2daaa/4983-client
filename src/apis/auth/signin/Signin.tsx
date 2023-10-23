import axios from "axios";

export const Signin = async (
  studentId: string,
  password: string,
): Promise<boolean> => {
  try {
    const response = await axios.post(
      "/api/v1/login",
      {
        studentId,
        password,
      },
      {
        withCredentials: true,
      },
    );

    const accessToken = response.headers.authorization;
    localStorage.setItem("accessToken", accessToken);
    window.location.href = `/`;

    return true; // 로그인 성공
  } catch (error) {
    console.error("로그인 실패", error);
    return false; // 로그인 실패
  }
};
