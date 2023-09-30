import Image from "next/image";
import * as style from "@/components/pages/chatbot/chatbot-message-form/ChatbotMessageForm.style";

interface ChatbotMessageFormProps {
  // message: string;
  // contentType: string;
  // createdAt: string;
  chatMessages: any[];
}

export default function ChatbotMessageForm(props: ChatbotMessageFormProps) {
  // const { message, contentType, createdAt } = props;
  const { chatMessages } = props;

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
      {chatMessages.map(chat => (
        <div key={chat.id}>
          <style.ChabotMessageDiv>
            {chat.message}
            <style.RequestButtonContainer>
              <style.RefuseButton>거절하기</style.RefuseButton>
              <style.AcceptButton>수락하기</style.AcceptButton>
            </style.RequestButtonContainer>
          </style.ChabotMessageDiv>
        </div>
      ))}
    </style.Box>
  );
}
