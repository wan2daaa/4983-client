import * as style from "@/components/pages/chatbot/chatbot-layout/ChatbotLayout.style";
import Link from "next/link";
import ChatbotMessageForm from "@/components/pages/chatbot/chatbot-message-form/ChatbotMessageForm";

export default function ChatbotLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.TitleA>거래 채팅봇</style.TitleA>
      </style.TitleDiv>
      <ChatbotMessageForm />
    </style.Div>
  );
}
