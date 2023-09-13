import Image from "next/image";
import * as style from "@/components/pages/chatbot/chatbot-message-form/ChatbotMessageForm.style";

export default function ChatbotMessageForm() {
  return (
    <style.Box>
      <style.ChatbotProfileDiv>
        <Image
          src="/assets/image/Profile.png"
          loader={() => "/assets/image/Profile.png"}
          width={43}
          height={43}
          alt="profile"
        />
      </style.ChatbotProfileDiv>
      <style.ChatbotName>사고파삼</style.ChatbotName>
      <style.ChabotMessageDiv>메시지 들어갈 예정</style.ChabotMessageDiv>
    </style.Box>
  );
}
