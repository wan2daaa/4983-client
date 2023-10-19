import axios from "axios";

export const fetchCertificationNumber = (
  studentId: string,
  phoneNumber: string,
) =>
  axios
    .get(
      `/api/v1/members/password/certification-number?studentId=${studentId}&phoneNumber=${phoneNumber}`,
    )
    .then(response => response.data.certificationNumber)
    .catch(error => {
      throw error;
    });

export const fetchPatchPassword = (
  studentId: string,
  phoneNumber: string,
  password: string,
) =>
  axios
    .patch("/api/v1/members/password", {
      studentId,
      phoneNumber,
      password,
    })
    .catch(error => {
      throw error;
    });
