import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { ChatLockerReservation } from "@/apis/chatbot/Chatbot";
import * as style from "@/components/pages/chatbot/chatbot-locker-password/chatbot-locker-password-button/ChatbotLockerPasswordButton.style";
import {
  lockerNumberState,
  lockerPasswordState,
} from "@/recoil/atoms/ChatAtoms";

interface ChatbotLockerPasswordProps {
  isPassword: boolean;
}

export default function ChatbotLockerPasswordButton({
  isPassword,
}: ChatbotLockerPasswordProps) {
  const router = useRouter();
  const { chatRoomId } = router.query;
  const [lockerNumber, setLockerNumber] = useRecoilState(lockerNumberState);
  const [password, setPassword] = useRecoilState(lockerPasswordState);

  const handleButtonClick = async () => {
    try {
      await ChatLockerReservation(lockerNumber, password, Number(chatRoomId));
      router.push(`/chatbot?chatRoomId=${chatRoomId}`);
    } catch (error) {
      console.error("ChatLockerReservation 실패", error);
    }
  };
  return (
    <style.Div>
      <style.Button>
        <style.ButtonDiv
          isPassword={isPassword}
          onClick={() => {
            if (isPassword) {
              handleButtonClick();
            }
          }}
        >
          <style.ButtonContent isPassword={isPassword}>
            입력완료
          </style.ButtonContent>
        </style.ButtonDiv>
      </style.Button>
    </style.Div>
  );
}
