import Link from "next/link";
import { useState } from "react";
import * as style from "@/components/pages/find-password/findpassword-Phone/FindPasswordPhone.style";

export default function FindPasswordPhone() {
  const [certificationCode, setCertificationCode] = useState("");

  const handleCertificationInputChange = (e: { target: { value: any } }) => {
    const inputValue = e.target.value;
    setCertificationCode(inputValue);
  };

  const isInputValid = certificationCode.length >= 4;
  return (
    <style.FindPasswordPhone>
      <style.PhoneWord>휴대폰번호</style.PhoneWord>
      <style.InputPhoneArea>
        <style.InputPhone type="text" placeholder=" 번호를 입력해주세요." />
        <style.PhoneButtonDiv>
          <Link href="/">
            <style.PhoneButton>인증번호</style.PhoneButton>
          </Link>
        </style.PhoneButtonDiv>
      </style.InputPhoneArea>
      <style.WrongPhone>
        휴대폰 번호가 올바르지 않습니다. 다시 입력해주세요.
      </style.WrongPhone>
      <style.InputCertificationArea>
        <style.InputCertification
          type="text"
          placeholder=" 인증번호를 입력해주세요."
          value={certificationCode}
          onChange={handleCertificationInputChange}
        />
      </style.InputCertificationArea>
      <style.CheckButtonDiv>
        <Link href="/">
          <style.CheckButton
            style={{
              background: isInputValid ? "#02B878" : "#d1d1d1",
              color: isInputValid ? "#FFF" : "#707479",
            }}
            disabled={!isInputValid}
          >
            확인
          </style.CheckButton>
        </Link>
      </style.CheckButtonDiv>
      <style.HelpButtonDiv>
        <Link href="/">
          <style.HelpButton>도움이 필요하세요?</style.HelpButton>
        </Link>
      </style.HelpButtonDiv>
    </style.FindPasswordPhone>
  );
}
