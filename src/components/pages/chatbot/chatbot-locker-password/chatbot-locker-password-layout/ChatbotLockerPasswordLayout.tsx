import Link from "next/link";
import * as style from "@/components/pages/chatbot/chatbot-locker-password/chatbot-locker-password-layout/ChatbotLockerPasswordLayout.style";
import ChatbotLockerPasswordInputForm from "@/components/pages/chatbot/chatbot-locker-password/chatbot-locker-password-input-form/ChatbotLockerPasswordInputForm";
import ChatbotLockerPasswordButton from "@/components/pages/chatbot/chatbot-locker-password/chatbot-locker-password-button/ChatbotLockerPasswordButton";

export default function ChatbotLockerPasswordLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>사물함 비밀번호 입력</style.Title>
      </style.TitleDiv>
      <ChatbotLockerPasswordInputForm />
      <ChatbotLockerPasswordButton />
    </style.Div>
  );
}
