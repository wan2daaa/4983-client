import React, { useEffect, useRef, useState } from "react";
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
  const [chatMessages, setChatMessages] = useState<chatMessagesProps[]>([]);
  const [unreadChatMessages, setUnreadChatMessages] = useState<
    chatMessagesProps[]
  >([]);

  const scrollRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { chatRoomId } = router.query;

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
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (scrollRef.current && router.isReady) {
      console.log(
        "scrollRef.current.scrollTop >>>>>",
        scrollRef.current.scrollTop,
      );
      console.log(
        "scrollRef.current.scrollHeight >>>>>",
        scrollRef.current.scrollHeight,
      );

      // scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      window.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });

      console.log(
        "scrollRef.current.scrollTop >>>>>",
        scrollRef.current.scrollTop,
      );
      console.log(
        "scrollRef.current.scrollHeight >>>>>",
        scrollRef.current.scrollHeight,
      );
    }
  }, [router.isReady, unreadChatMessages, chatMessages]);
  const fetchUnreadMessages = async () => {
    const { chatRoomId } = router.query;

    try {
      const response = await ChatMessageNotReadList(Number(chatRoomId));
      if (response.length !== 0) {
        setUnreadChatMessages([...unreadChatMessages, ...response]);
      }
    } catch (error) {
      console.error("안읽은 메시지 조회 실패", error);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const intervalRef = setInterval(() => fetchUnreadMessages(), 7000);

      return () => {
        clearInterval(intervalRef);
      };
    }
    return undefined;
  }, [router.isReady, fetchUnreadMessages]);

  return (
    <style.Div ref={scrollRef}>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>거래 채팅봇</style.Title>
      </style.TitleDiv>
      {chatMessages.map((chat, index) => (
        <ChatbotMessageForm
          key={index.toString()}
          chat={chat}
          unreadChatMessages={unreadChatMessages}
          setUnreadChatMessages={setUnreadChatMessages}
        />
      ))}
      {unreadChatMessages.map((chat, index) => (
        <ChatbotMessageForm
          key={index.toString()}
          chat={chat}
          unreadChatMessages={unreadChatMessages}
          setUnreadChatMessages={setUnreadChatMessages}
        />
      ))}
    </style.Div>
  );
}
