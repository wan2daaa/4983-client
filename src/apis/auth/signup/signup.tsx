import axios from "axios";
import { Signin } from "@/apis/auth/signin/Signin";

// 회원가입
export const signup = (
  studentId: string,
  department: string,
  nickname: string,
  password: string,
  phoneNumber: string,
  marketingAgree: boolean,
  accountNumber: string,
  accountHolder: string,
  accountBank: string,
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
      Signin(studentId, password)
        .then(isSuccess => {
          window.location.href = "/signup/6";
        })
        .catch(() => {
          window.location.href = "/signup/6";
        });
    })
    .catch(error => {
      console.log(error);
    });
};
