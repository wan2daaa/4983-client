import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import * as style from "@/components/pages/chatbot/chatbot-locker/chatbot-locker-layout/ChatbotLockerLayout.style";
import ChatbotLockerContent from "@/components/pages/chatbot/chatbot-locker/chatbot-locker-content/ChatbotLockerContent";
import ChatbotLockerListBox from "@/components/pages/chatbot/chatbot-locker/chatbot-locker-list-box/ChatbotLockerListBox";
import ChatbotLockerButton from "@/components/pages/chatbot/chatbot-locker/chatbot-locker-button/ChatbotLockerButton";

export default function ChatbotLockerLayout() {
  const router = useRouter();
  const { chatRoomId } = router.query;
  const [isLockerClicked, setIsLockerClicked] = useState(false);

  return (
    <style.Div>
      <style.TitleDiv>
        <Link href={`/chatbot?chatRoomId=${chatRoomId}`}>
          <style.TitleBackButton />
        </Link>
        <style.Title>사물함 선택</style.Title>
      </style.TitleDiv>
      <ChatbotLockerContent />
      <ChatbotLockerListBox setisLockerClicked={setIsLockerClicked} />
      <ChatbotLockerButton isLockerClicked={isLockerClicked} />
    </style.Div>
  );
}
