import Image from "next/image";
import { useRouter } from "next/router";
import * as style from "@/components/pages/chatbot/chatbot-locker/chatbot-locker-button/ChatbotLockerButton.style";

interface ChatbotLockerButtonProps {
  isLockerClicked: boolean;
}

export default function ChatbotLockerButton({
  isLockerClicked,
}: ChatbotLockerButtonProps) {
  const router = useRouter();
  const { chatRoomId } = router.query;

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
      <style.Button>
        <style.ButtonDiv
          isLockerClicked={isLockerClicked}
          onClick={() => {
            if (isLockerClicked) {
              router.push(`/chatbotLockerPassword/${chatRoomId}`);
            }
          }}
        >
          <style.ButtonContent isLockerClicked={isLockerClicked}>
            선택완료
          </style.ButtonContent>
        </style.ButtonDiv>
      </style.Button>
    </style.Div>
  );
}
