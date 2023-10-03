import axios from "axios";

export const GetChatList = async (accessToken: string) => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    console.log("Authorization 헤더:", headers);

    const response = await axios.get(`/api/v1/chat/list`, {
      withCredentials: true,
      headers,
    });

    console.log("채팅 메시지 조회 성공", response);

    return response.data;
  } catch (error) {
    console.error("채팅 메시지 조회 실패", error);
    throw error;
  }
};
