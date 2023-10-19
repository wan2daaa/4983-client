import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as style from "@/components/pages/chatbot/chatbot-layout/ChatbotLayout.style";
import ChatbotMessageForm from "@/components/pages/chatbot/chatbot-message-form/ChatbotMessageForm";
import {
  ChatMessageList,
  ChatMessageNotReadList,
} from "@/apis/chatbot/Chatbot";

interface chatMessagesProps {
  message: string;
  contentType: string;
  createdAt: string;
}

export default function ChatbotLayout() {
  const router = useRouter();
  const { chatRoomId } = router.query;
  const [chatMessages, setChatMessages] = useState<chatMessagesProps[]>([]);
  const [unreadChatMessages, setUnreadChatMessages] = useState<
    chatMessagesProps[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      if (chatRoomId) {
        try {
          const response = await ChatMessageList(Number(chatRoomId));
          console.log("채팅 메시지 조회 성공", response);
          setChatMessages(response);
        } catch (error) {
          console.error("채팅 메시지 조회 실패", error);
        }
      }
    };

    fetchData();
  }, [chatRoomId]);

  const fetchUnreadMessages = async () => {
    try {
      const response = await ChatMessageNotReadList(Number(chatRoomId));
      setUnreadChatMessages(response);
    } catch (error) {
      console.error("안읽은 메시지 조회 실패", error);
    }
  };

  useEffect(() => {
    fetchUnreadMessages();

    const intervalId = setInterval(fetchUnreadMessages, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [chatRoomId]);

  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>거래 채팅봇</style.Title>
      </style.TitleDiv>
      {chatMessages.map((chat, index) => (
        <ChatbotMessageForm key={index.toString()} chat={chat} />
      ))}
      {unreadChatMessages.map((chat, index) => (
        <ChatbotMessageForm key={index.toString()} chat={chat} />
      ))}
    </style.Div>
  );
}
