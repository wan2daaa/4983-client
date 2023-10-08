import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import * as style from "@/components/pages/signup/create-account-detail-profile/create-account-detail-profile-input/CreateAccountDetailProfileInput.style";
import { certificationPhoneNumber } from "@/apis/auth/signup/sms";
import { phoneNumber } from "@/recoil/atoms/SignupAtoms";

export default function CreateAccountDetailProfileInput() {
  const [phoneNumbers, setPhoneNumbers] = useRecoilState(phoneNumber);

  const [verificationCode, setVerificationCode] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [inputVerificationCode, setInputVeificationCode] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [phoneNumberFormatError, setPhoneNumberFormatError] = useState(false);
  const [timerVisible, setTimerVisible] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const MINUTES_IN_MS = 3 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2);
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  // 전화번호 정규식
  const phoneNumberRegEx = /^[0-9]{11}$/;

  // const isPhoneValid = phoneNumber.length >= 11;

  const startResendTimer = () => {
    setVerificationSent(true);
  };

  const handleSendVerificationCode = async () => {
    if (!phoneNumberRegEx.test(phoneNumbers)) {
      setPhoneNumberFormatError(true);
      return;
    }

    const code = await certificationPhoneNumber(phoneNumbers);
    setVerificationCode(code);
    setVerificationSent(true); // 타이머 시작
    setPhoneNumberFormatError(false);
    // 타이머가 시작되면 타이머를 보이게 설정
    setTimerVisible(true);

    // 남은 시간 설정
    setTimeLeft(MINUTES_IN_MS);
  };

  const handleVerifyCode = () => {
    setButtonClicked(true);
    if (String(verificationCode) === inputVerificationCode) {
      setVerificationSuccess(true);
      setVerificationCode("");
      setIsSuccessMessageVisible(true);
    } else {
      setVerificationSuccess(false);
      setIsSuccessMessageVisible(false);
    }
  };

  return (
    <style.Div>
      <style.InputPhoneTag>휴대폰 번호</style.InputPhoneTag>
      <style.InputPhoneArea>
        <style.InputPhone
          id="phonenumbers"
          type="text"
          placeholder="번호를 입력해주세요."
          value={phoneNumbers}
          onChange={e => setPhoneNumbers(e.target.value)}
        />
        <style.PhoneButton
          style={
            !phoneNumberRegEx || phoneNumbers === ""
              ? {}
              : {
                  background: "rgba(2, 184, 120, 0.80)",
                  color: "#FFF",
                }
          }
          disabled={!phoneNumberRegEx || phoneNumbers === ""}
          onClick={handleSendVerificationCode}
        >
          전송
        </style.PhoneButton>
      </style.InputPhoneArea>
      <style.CertificationArea2>
        <style.CertificationInputArea>
          <style.CertificationInput
            id="sms"
            type="text"
            value={inputVerificationCode}
            placeholder="인증 번호를 입력해주세요."
            onChange={e => setInputVeificationCode(e.target.value)}
          />
          {timerVisible && (
            <style.CertificationTimer>
              남은 시간 {minutes}:{second}
            </style.CertificationTimer>
          )}
        </style.CertificationInputArea>
        <style.CertificationButton
          onClick={handleVerifyCode}
          style={
            inputVerificationCode.length >= 6
              ? {
                  background: "rgba(2, 184, 120, 0.80)",
                  color: "#FFF",
                }
              : {}
          }
        >
          확인
        </style.CertificationButton>
      </style.CertificationArea2>
      {verificationSuccess && (
        <style.SuccessMessage>인증 완료 되었습니다.</style.SuccessMessage>
      )}
      {buttonClicked && !verificationSuccess && verificationCode && (
        <style.ErrorMessage>인증번호가 올바르지 않습니다.</style.ErrorMessage>
      )}
      <style.CheckButtonDiv>
        <Link href="/signup/3">
          <style.CheckButton
            // SuccessMessage가 나타날 때만 CheckButton을 활성화하고 스타일을 조절합니다.
            style={
              isSuccessMessageVisible
                ? {
                    background: "#02B878",
                    color: "#FFF",
                  }
                : {}
            }
            disabled={!isSuccessMessageVisible}
          >
            다음
          </style.CheckButton>
        </Link>
      </style.CheckButtonDiv>
    </style.Div>
  );
}
