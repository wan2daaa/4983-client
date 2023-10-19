import { useRouter } from "next/router";
import React, { SetStateAction, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ChatbotLocker } from "@/apis/chatbot/Chatbot";
import { lockerNumberState } from "@/recoil/atoms/ChatAtoms";
import * as style from "@/components/pages/chatbot/chatbot-locker/chatbot-locker-list-box/ChatbotLockerListBox.style";

interface chatLockerProps {
  lockerNumber: number;
  isExists: boolean;
}

interface ChatbotLockerListBoxProps {
  setisLockerClicked: React.Dispatch<SetStateAction<boolean>>;
}

export default function ChatbotLockerListBox({
  setisLockerClicked,
}: ChatbotLockerListBoxProps) {
  const router = useRouter();
  const { chatRoomId } = router.query;
  const [chatLockerNumber, setChatLockerNumber] = useState<chatLockerProps[]>(
    [],
  );
  const [_, setSelectLockerNumber] = useRecoilState<number>(lockerNumberState);

  useEffect(() => {
    const fetchData = async () => {
      if (chatRoomId) {
        try {
          const response = await ChatbotLocker(Number(chatRoomId));
          console.log("채팅 메시지 조회 성공", response);
          setChatLockerNumber(response);
        } catch (error) {
          console.error("채팅 메시지 조회 실패", error);
        }
      }
    };

    fetchData();
  }, [chatRoomId]);

  const handleListBoxButtonClick = (lockerNumber: number) => {
    if (chatLockerNumber[lockerNumber - 1].isExists) {
      setisLockerClicked(false);
      console.log("=======", lockerNumber);
    } else {
      setSelectLockerNumber(lockerNumber);
      setisLockerClicked(true);
      console.log("=======", lockerNumber);
    }
  };

  return (
    <style.Box>
      {chatLockerNumber.map((chatLocker, index) => (
        <style.Button
          onClick={() => handleListBoxButtonClick(chatLocker.lockerNumber)}
        >
          <style.ListBoxDiv isExists={chatLocker.isExists}>
            <style.ListBoxButton>
              {chatLocker.lockerNumber < 10
                ? `0${chatLocker.lockerNumber}`
                : chatLocker.lockerNumber}
            </style.ListBoxButton>
          </style.ListBoxDiv>
        </style.Button>
      ))}
    </style.Box>
  );
}
