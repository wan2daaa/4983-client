import Link from "next/link";
import clipboardCopy from "clipboard-copy";
import * as style from "@/components/pages/mypage/mypage-contactus/mypaeg-contactus-button/MypageContactusButton.style";
import Faq from "@/components/pages/mypage/mypage-contactus/faq/Faq";

export default function MypageContactusButton() {
  const handleCopyEmail = () => {
    const emailInput = document.querySelector(
      "#inputEmail",
    ) as HTMLInputElement;
    if (emailInput) {
      clipboardCopy(emailInput.placeholder);
    }
  };

  const handleCopyPhone = () => {
    const phoneInput = document.querySelector(
      "#inputPhone",
    ) as HTMLInputElement;
    if (phoneInput) {
      clipboardCopy(phoneInput.placeholder);
    }
  };

  return (
    <style.Box>
      <Faq />
      <style.Container>
        <style.HowToUseTag>사용 방법이 궁금해요!</style.HowToUseTag>
        <Link href="/help">
          <style.HowToUseButton>도움말 보기</style.HowToUseButton>
        </Link>
        <style.ContactusTag>이메일로 문의하기</style.ContactusTag>
        <style.InputEmailArea>
          <style.InputEmail
            id="inputEmail"
            type="text"
            placeholder="4983service@gmail.com"
            readOnly
          />
          <style.CopyEmailButton onClick={handleCopyEmail}>
            복사하기
          </style.CopyEmailButton>
        </style.InputEmailArea>
        <style.EmailNotice>
          *이메일 문의 시, 응답은 최소 1-2일 소요될 수 있습니다.
        </style.EmailNotice>
        <style.PhoneTag>전화로 문의하기</style.PhoneTag>
        <style.InputPhoneArea>
          <style.InputPhone
            id="inputPhone"
            type="text"
            placeholder="010-4487-3122"
            readOnly
          />
          <style.CopyPhoneButton onClick={handleCopyPhone}>
            복사하기
          </style.CopyPhoneButton>
        </style.InputPhoneArea>
      </style.Container>
    </style.Box>
  );
}
