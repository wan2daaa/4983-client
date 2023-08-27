import * as style from "@/components/pages/chatbot/chatbot-locker/chatbot-locker-button/ChatbotLockerButton.style";
import Image from "next/image";

export default function ChatbotLockerButton() {
  return (
    <style.Div>
      <style.MarkWrapper>
        <Image
          src="/assets/image/Locker.svg"
          loader={() => "/assets/image/Locker.svg"}
          width={168}
          height={21}
          alt="profile"
        />
      </style.MarkWrapper>
      <style.ButtonDiv>
        <style.Button>선택완료</style.Button>
      </style.ButtonDiv>
    </style.Div>
  );
}
