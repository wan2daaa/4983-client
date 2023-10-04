import axios from "axios";

// 회원가입
export const signup = (
  studentId: string,
  department: string,
  // yearOfAdmission: number,
  nickname: string,
  password: string,
  phoneNumber: string,
  marketingAgree: boolean,
  accountHolder: string,
  accountBank: string,
  accountNumber: string,
  // firebaseToken: string,
) => {
  axios
    .post(
      "/api/v1/register",
      {
        studentId,
        department,
        // yearOfAdmission,
        nickname,
        password,
        phoneNumber,
        marketingAgree,
        accountHolder,
        accountBank,
        accountNumber,
        // firebaseToken,
      },
      {
        withCredentials: true,
      },
    )
    .then(response => {
      console.log(response);
      window.location.href = "/help";
    })
    .catch(error => {
      console.log(error);
    });
};
