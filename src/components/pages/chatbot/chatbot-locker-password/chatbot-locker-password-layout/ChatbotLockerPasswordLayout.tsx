import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as style from "@/components/pages/chatbot/chatbot-locker-password/chatbot-locker-password-layout/ChatbotLockerPasswordLayout.style";
import ChatbotLockerPasswordInputForm from "@/components/pages/chatbot/chatbot-locker-password/chatbot-locker-password-input-form/ChatbotLockerPasswordInputForm";
import ChatbotLockerPasswordButton from "@/components/pages/chatbot/chatbot-locker-password/chatbot-locker-password-button/ChatbotLockerPasswordButton";

export default function ChatbotLockerPasswordLayout() {
  const router = useRouter();
  const { chatRoomId } = router.query;
  const [isPassword, setIsPassword] = useState(false);

  return (
    <style.Div>
      <style.TitleDiv>
        <Link href={`/chatbotLocker/${chatRoomId}`}>
          <style.TitleBackButton />
        </Link>
        <style.Title>사물함 비밀번호 입력</style.Title>
      </style.TitleDiv>
      <ChatbotLockerPasswordInputForm setisPassword={setIsPassword} />
      <ChatbotLockerPasswordButton isPassword={isPassword} />
    </style.Div>
  );
}
