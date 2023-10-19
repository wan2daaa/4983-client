import { useRecoilState } from "recoil";
import React, { SetStateAction } from "react";
import { lockerPasswordState } from "@/recoil/atoms/ChatAtoms";
import * as style from "@/components/pages/chatbot/chatbot-locker-password/chatbot-locker-password-input-form/ChatbotLockerPasswordInputForm.style";

interface ChatbotLockerPasswordProps {
  setisPassword: React.Dispatch<SetStateAction<boolean>>;
}

export default function ChatbotLockerPasswordInputForm({
  setisPassword,
}: ChatbotLockerPasswordProps) {
  const [password, setPassword] = useRecoilState<string | null>(
    lockerPasswordState,
  );
  const maxLength = 4;

  const handlePasswordChange = (e: any) => {
    let newPassword = e.target.value;

    if (newPassword.length < maxLength) {
      setisPassword(false);
    } else {
      newPassword = newPassword.slice(0, maxLength);
      setisPassword(true);
    }

    newPassword = newPassword.replace(/[^0-9]/g, "");
    setPassword(newPassword);
  };

  return (
    <style.ContentBoldDiv>
      <style.ContentBold>사물함 비밀번호 설정 (4자리 기입)</style.ContentBold>
      <style.LockerPasswordDiv>
        <style.LockerPasswordInput
          type="text"
          value={password === null ? "" : password.toString()}
          placeholder="비밀번호를 입력해주세요."
          onChange={handlePasswordChange}
        />
      </style.LockerPasswordDiv>
      <style.ContentDiv>
        <style.Content>
          * 해당 비밀번호는 꼭 기억해주세요.
          <style.ContentBr />
          다른 비밀번호로 설정 시, 이후 거래에 불이익이 있습니다.
        </style.Content>
      </style.ContentDiv>
    </style.ContentBoldDiv>
  );
}
