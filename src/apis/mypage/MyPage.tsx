import { API } from "@/apis/common/CommonApi";

export const getMemberInfo = async (): Promise<{
  imageUrl: string;
  nickname: string;
}> =>
  API.get("/api/v1/my-pages/member")
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });
