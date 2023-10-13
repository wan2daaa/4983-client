import axios from "axios";

// 채팅 방 생성
export const ChatRoomCreate = async (
  salesPost: number,
  bookName: string,
  onSuccess: (roomId: number) => void,
  onError: (error: any) => void,
) => {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(
      "/api/v1/chat-room",
      {
        salesPost,
        bookName,
      },
      {
        withCredentials: true,
        headers,
      },
    );

    const { roomId } = response.data;
    onSuccess(roomId);

    console.log("채팅방 생성 성공", response);
    window.location.href = `/chatbot?roomId=${roomId}`;
    // router.push(`/chatbot/${roomId}`);
  } catch (error) {
    console.error("채팅방 생성 실패", error);
    onError(error);
  }
};

// 유저의 채팅 메시지 리스트 반환
export const ChatMessageList = async (chatRoomId: number) => {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    console.log("Authorization 헤더:", headers);

    const response = await axios.get(`/api/v1/chat/${chatRoomId}`, {
      withCredentials: true,
      headers,
    });

    console.log("채팅 메시지 조회 성공", response);
    console.log("chatRoomId:", chatRoomId);

    return response.data;
  } catch (error) {
    console.error("채팅 메시지 조회 실패", error);
    throw error;
  }
};
