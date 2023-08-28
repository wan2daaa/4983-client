import * as style from "@/components/pages/chatbot/chatbot-locker-password/chatbot-locker-password-input-form/ChatbotLockerPasswordInputForm.style";

export default function ChatbotLockerPasswordInputForm() {
  return (
    <style.ContentBoldDiv>
      <style.ContentBold>사물함 비밀번호 설정 (4자리 기입)</style.ContentBold>
      <style.LockerPasswordDiv>
        <style.LockerPasswordInput />
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
