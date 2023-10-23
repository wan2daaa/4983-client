import { API } from "@/apis/common/CommonApi";

/* 채팅 방 생성 */
export const ChatRoomCreate = async (
  usedBookId: number,
  onSuccess: (chatRoomId: number) => void,
  onError: (error: any) => void,
) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await API.post(
      "/api/v1/chat-room",
      {
        usedBookId,
      },
      {
        withCredentials: true,
        headers,
      },
    );

    const { chatRoomId } = response.data;
    onSuccess(chatRoomId);

    console.log("채팅방 생성 성공", response);
    window.location.href = `/chatbot?chatRoomId=${chatRoomId}`;
  } catch (error) {
    console.error("채팅방 생성 실패", error);
    onError(error);
  }
};

/* 유저의 채팅 메시지 리스트 반환 */
export const ChatMessageList = async (chatRoomId: number) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    console.log("Authorization 헤더:", headers);

    const response = await API.get(`/api/v1/chat-room/${chatRoomId}`, {
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

/* 버튼 이벤트마다 서버에서 로직 작동 */
export const ChatRoomButton = async (
  chatRoomId: number,
  contentType: string,
  message: string,
): Promise<{ message: string; contentType: string; createdAt: string }[]> => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await API.post(
      "/api/v1/chat-room/interact",
      {
        chatRoomId,
        contentType,
        message,
      },
      {
        withCredentials: true,
        headers,
      },
    );

    console.log("버튼 이벤트 성공", response);
    return response.data.map(
      (datas: { message: string; contentType: string; createdAt: string }) => ({
        message: datas.message,
        contentType: datas.contentType,
        createdAt: datas.createdAt,
      }),
    );
  } catch (error) {
    console.error("버튼 이벤트 실패", error);
    throw error;
  }
};

/* 안읽은 메시지 반환 */
export const ChatMessageNotReadList = async (
  chatRoomId: number,
): Promise<{ message: string; contentType: string; createdAt: string }[]> => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    console.log("Authorization 헤더:", headers);

    const response = await API.get(`/api/v1/chat-room/not-read/${chatRoomId}`, {
      withCredentials: true,
      headers,
    });

    console.log("안읽은 메시지 조회 성공", response);

    return response.data.map(
      (datas: { message: string; contentType: string; createdAt: string }) => ({
        message: datas.message,
        contentType: datas.contentType,
        createdAt: datas.createdAt,
      }),
    );
  } catch (error) {
    console.error("안읽은 메시지 조회 실패", error);
    throw error;
  }
};

/* 해당 책의 거래날짜에 차있는 사물함의 리스트를 반환 */
export const ChatbotLocker = async (chatRoomId: number) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    console.log("Authorization 헤더:", headers);

    const response = await API.get(
      `/api/v1/locker/chat-room-available-date?chatRoomId=${chatRoomId}`,
      {
        withCredentials: true,
        headers,
      },
    );

    console.log("사물함 불러오기 성공", response);

    return response.data;
  } catch (error) {
    console.error("사물함 불러오기 실패", error);
    throw error;
  }
};

/* 사물함 예약 */
export const ChatLockerReservation = async (
  lockerNumber: number,
  password: string | null,
  chatRoomId: number,
) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await API.post(
      "/api/v1/locker",
      {
        lockerNumber,
        password,
        chatRoomId,
      },
      {
        withCredentials: true,
        headers,
      },
    );

    console.log("사물함 예약 성공", response);
  } catch (error) {
    console.error("사물함 예약 실패", error);
  }
};
