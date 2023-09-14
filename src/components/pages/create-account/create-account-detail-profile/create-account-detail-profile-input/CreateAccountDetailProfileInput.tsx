import Link from "next/link";
import React from "react";
import * as style from "@/components/pages/create-account/create-account-detail-profile/create-account-detail-profile-input/CreateAccountDetailProfileInput.style";

export default function CreateAccountProfileInput() {
  return (
    <style.Div>
      <style.PasswordTag>비밀번호</style.PasswordTag>
      <style.PasswordInputArea>
        <style.PasswordInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </style.PasswordInputArea>
      <style.PasswordNotice>
        최소 8자~최대 20자의 영어, 숫자, 특수문자 가능
      </style.PasswordNotice>
      <style.CheckPasswordTag>비밀번호 재입력</style.CheckPasswordTag>
      <style.CheckPasswordInputArea>
        <style.CheckPasswordInput
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
        />
      </style.CheckPasswordInputArea>
      <style.CheckPasswordNotice>
        비밀번호를 다시 확인해주세요!
      </style.CheckPasswordNotice>
      <style.InputPhoneTag>휴대폰 번호</style.InputPhoneTag>
      <style.InputPhoneArea>
        <style.InputPhone type="text" placeholder="번호를 입력해주세요." />
        <style.PhoneButtonDiv>
          <Link href="/">
            <style.PhoneButton>전송</style.PhoneButton>
          </Link>
        </style.PhoneButtonDiv>
      </style.InputPhoneArea>
      <style.CertificationTag>인증번호</style.CertificationTag>
      <style.CertificationInputArea>
        <style.CertificationInput
          type="text"
          placeholder="인증 번호를 입력해주세요."
        />
        <style.CertificationButtonDiv>
          <Link href="/">
            <style.CertificationButton>확인</style.CertificationButton>
          </Link>
        </style.CertificationButtonDiv>
      </style.CertificationInputArea>
      <style.CertificationNotice>
        인증번호가 올바르지 않습니다.
      </style.CertificationNotice>
      <Link href="/register/3">
        <style.CheckButton>다음</style.CheckButton>
      </Link>
    </style.Div>
  );
}
