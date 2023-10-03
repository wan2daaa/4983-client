import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as style from "@/components/pages/chat/chat-form/ChatForm.style";
import { GetChatList } from "@/apis/chatlist/getchatlist";
import useChatTimeAgo from "@/hooks/use-chat-time-ago";

type Room = {
  chatRoomId: string;
  imageUrl: string;
  usedBookName: string;
  message: string;
  isRead: boolean;
  createdAt: string;
};

const ChatRoom = (props: Room) => {
  const { chatRoomId, imageUrl, usedBookName, message, isRead, createdAt } =
    props;
  const timeago = useChatTimeAgo(createdAt);

  return (
    <Link href={`/chatbot?chatRoomId=${chatRoomId}`} key={chatRoomId}>
      <style.ChatBox>
        <style.ChatDiv>
          <style.ProFileDiv>
            {imageUrl ? (
              <Image src={imageUrl} width={43} height={43} alt="profile" />
            ) : (
              <div>No image</div>
            )}
          </style.ProFileDiv>
          <style.ContentsDiv>
            <style.ChatNameDiv>{usedBookName || "null"}</style.ChatNameDiv>
            <style.ChatDetailDiv>{message || "null"}</style.ChatDetailDiv>
            {!isRead && <style.NewChatDiv />}
            <style.TimeDiv>
              <style.TimeA>{timeago || "null"}</style.TimeA>
            </style.TimeDiv>
          </style.ContentsDiv>
        </style.ChatDiv>
      </style.ChatBox>
    </Link>
  );
};

export default function ChatForm() {
  const [chatRooms, setChatRooms] = useState<Room[]>([]);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const fetchData = async () => {
      if (accessToken) {
        try {
          const chatListResponse: Room[] = await GetChatList(accessToken);
          console.log("채팅 메시지 조회 성공", chatListResponse);
          setChatRooms(chatListResponse);
        } catch (error) {
          console.error("채팅 메시지 조회 실패", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <style.Div>
      {chatRooms.map(room => (
        <ChatRoom {...room} />
      ))}
    </style.Div>
  );
}
