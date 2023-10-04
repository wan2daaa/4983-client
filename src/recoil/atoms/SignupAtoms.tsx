import { atom } from "recoil";

export const studentId = atom({
  key: "studentId",
  default: "",
});

export const department = atom({
  key: "department",
  default: "",
});

export const yearOfAdmission = atom({
  key: "yearOfAdmission",
  default: "",
});

export const nickname = atom({
  key: "nickname",
  default: "",
});

export const password = atom({
  key: "password",
  default: "",
});

export const phoneNumber = atom({
  key: "phoneNumber",
  default: "",
});

export const marketingAgree = atom<boolean>({
  key: "marketingAgree",
  default: Boolean(false),
});

export const accountHolder = atom({
  key: "accountHolder",
  default: "",
});

export const accountBank = atom({
  key: "accountBank",
  default: "",
});

export const accountNumber = atom({
  key: "accountNumber",
  default: "",
});

export const firebaseToken = atom({
  key: "firebaseToken",
  default: "",
});
