import axios from "axios";

export const certificationPhoneNumber = async (phoneNumber: string) => {
  try {
    const response = await axios.get(
      `/api/v1/my-pages/certification-number?phoneNumber=${phoneNumber}`,
    );
    console.log("인증번호 전송 성공", response);

    return response.data.certificationNumber;
  } catch (error) {
    console.log("인증번호 전송 실패:", error);
    return null;
  }
};
