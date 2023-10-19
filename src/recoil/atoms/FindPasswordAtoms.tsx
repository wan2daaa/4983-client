import { atom } from "recoil";

export const findPasswordStudentId = atom({
  key: "studentId",
  default: "",
});

export const findPasswordPhoneNumber = atom({
  key: "phoneNumber",
  default: "",
});
