import axios from "axios";

// 학번 중복 확인
export const checkstudentIdDuplicate = (studentId: string) =>
  axios
    .get(`/api/v1/register/duplicate/studentId?studentId=${studentId}`)
    .then(response => {
      console.log("사용가능 학번:", response);
      return {
        isDuplicatestudentId: false,
      };
    })
    .catch(error => {
      console.error("사용불가 닉네임:", error.response.data);
      return {
        isDuplicatestudentId: true,
      };
    });

// 닉네임 중복 확인
export const checkNicknameDuplicate = (nickname: string) =>
  axios
    .get(` /api/v1/register/duplicate/nickname?nickname=${nickname}`)
    .then(response => {
      console.log("사용가능 닉네임:", response);
      return {
        isDuplicateNickname: false,
      };
    })
    .catch(error => {
      console.error("사용불가 닉네임:", error.response.data);
      return {
        isDuplicateNickname: true,
      };
    });
