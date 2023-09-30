import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import * as style from "@/components/pages/chatbot/chatbot-layout/ChatbotLayout.style";
import ChatbotMessageForm from "@/components/pages/chatbot/chatbot-message-form/ChatbotMessageForm";
import { ChatMessageList } from "@/apis/chatbot/Chatbot";
import { chatRoomIdState } from "@/recoil/atoms/ChatAtoms";

export default function ChatbotLayout() {
  // const { message, contentType, createdAt } = props;
  const [chatMessages, setChatMessages] = useState([]);

  const chatRoomId = useRecoilValue(chatRoomIdState);

  useEffect(() => {
    const fetchData = async () => {
      if (chatRoomId) {
        try {
          const response = await ChatMessageList(Number(chatRoomId));
          console.log("채팅 메시지 조회 성공", response);
          setChatMessages(response.data);
        } catch (error) {
          console.error("채팅 메시지 조회 실패", error);
        }
      }
    };

    fetchData();
  }, [chatRoomId]);

  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>거래 채팅봇</style.Title>
      </style.TitleDiv>
      <ChatbotMessageForm chatMessages={chatMessages} />
    </style.Div>
  );
}
