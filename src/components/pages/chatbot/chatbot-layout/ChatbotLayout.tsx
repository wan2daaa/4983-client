import Link from "next/link";
import * as style from "@/components/pages/chatbot/chatbot-layout/ChatbotLayout.style";
import ChatbotMessageForm from "@/components/pages/chatbot/chatbot-message-form/ChatbotMessageForm";

export default function ChatbotLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>거래 채팅봇</style.Title>
      </style.TitleDiv>
      <ChatbotMessageForm />
    </style.Div>
  );
}
