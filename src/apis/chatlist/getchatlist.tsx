import { API } from "@/apis/common/CommonApi";

export const GetChatList = async (accessToken: string) => {
  try {
    const response = await API.get(`/api/v1/chat/list`);

    console.log("채팅 메시지 조회 성공", response);

    return response.data;
  } catch (error) {
    console.error("채팅 메시지 조회 실패", error);
    throw error;
  }
};
