import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import * as style from "@/components/pages/find-password/findpassword-Phone/FindPasswordPhone.style";
import { fetchCertificationNumber } from "@/apis/findpassword/FindPassword";
import {
  findPasswordPhoneNumber,
  findPasswordStudentId,
} from "@/recoil/atoms/FindPasswordAtoms";

interface FindPasswordPhoneProps {
  phoneNumberValue: string;
  setPhoneNumberValue: Dispatch<SetStateAction<string>>;
  certificationCode: string;
  setCertificationCode: Dispatch<SetStateAction<string>>;
  studentId: string;
  isStudentIdValid: boolean;
  setIsStudentIdValid: Dispatch<SetStateAction<boolean>>;
  setIsApiCalled: Dispatch<SetStateAction<boolean>>;
}

const FindPasswordPhone = ({
  phoneNumberValue,
  setPhoneNumberValue,
  setCertificationCode,
  certificationCode,
  studentId,
  isStudentIdValid,
  setIsStudentIdValid,
  setIsApiCalled,
}: FindPasswordPhoneProps) => {
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isLeftTimeEnabled, setIsLeftTimeEnabled] = useState(false);
  const [leftTime, setLeftTime] = useState(180);
  const [compareCertificationNumber, setCompareCertificationNumber] =
    useState("");
  const [, setFindPasswordStudentId] = useRecoilState(findPasswordStudentId);
  const [, setFindPasswordPhoneNumber] = useRecoilState(
    findPasswordPhoneNumber,
  );

  const router = useRouter();

  const intervalref = useRef<number | null>(null);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  const minutes = Math.floor(leftTime / 60);
  const seconds = formatTime(leftTime % 60);

  const isCertificationCorrect =
    compareCertificationNumber === certificationCode;

  const handleCertificationInputChange = (e: { target: { value: any } }) => {
    setCertificationCode(e.target.value);
  };

  const handlePhoneNumber = (e: { target: { value: string } }) => {
    const regex = /^[0-9]+$/;
    if (regex.test(e.target.value)) {
      setPhoneNumberValue(e.target.value);
    } else if (e.target.value === "") {
      setPhoneNumberValue("");
    }
  };

  const handleCertificationNumber = async () => {
    if (isPhoneNumberValid) {
      const data = await fetchCertificationNumber(
        studentId,
        phoneNumberValue,
      ).catch(() => {
        setIsStudentIdValid(false);
        setIsApiCalled(true);
      });

      setIsStudentIdValid(true);
      setIsApiCalled(false);
      setCompareCertificationNumber(String(data));

      const LEFT_SEC = 180;
      setLeftTime(LEFT_SEC);

      setIsLeftTimeEnabled(true);
    }
  };

  useEffect(
    () => () => {
      if (intervalref.current !== null) {
        window.clearInterval(intervalref.current);
      }
    },
    [],
  );

  useEffect(() => {
    if (phoneNumberValue.length === 11 && phoneNumberValue) {
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  }, [phoneNumberValue]);

  useEffect(() => {
    if (isLeftTimeEnabled) {
      if (intervalref.current !== null) return;
      intervalref.current = window.setInterval(() => {
        setLeftTime(time => (time > 0 ? time - 1 : 0));
      }, 1000);
    }
  }, [isLeftTimeEnabled]);

  return (
    <style.FindPasswordPhone>
      <style.PhoneWord>휴대폰번호</style.PhoneWord>
      <style.InputPhoneArea>
        <style.InputPhone
          type="text"
          placeholder="번호를 입력해 주세요."
          maxLength={11}
          value={phoneNumberValue}
          onChange={handlePhoneNumber}
        />
        <style.PhoneButtonDiv>
          <style.PhoneButton
            isPhoneNumberValid={isPhoneNumberValid}
            onClick={handleCertificationNumber}
          >
            인증번호
          </style.PhoneButton>
        </style.PhoneButtonDiv>
      </style.InputPhoneArea>
      {!isPhoneNumberValid && phoneNumberValue.length !== 0 && (
        <style.WrongPhoneNumberMessage>
          휴대폰 번호가 올바르지 않습니다. 다시 입력해주세요.
        </style.WrongPhoneNumberMessage>
      )}
      <style.InputCertificationArea>
        <style.InputCertification
          type="text"
          placeholder="인증번호를 입력해 주세요."
          value={certificationCode}
          onChange={handleCertificationInputChange}
        />
        {isLeftTimeEnabled && (
          <style.LeftTimeSpan>
            남은시간 {minutes}:{seconds}
          </style.LeftTimeSpan>
        )}
      </style.InputCertificationArea>
      <style.CheckButtonDiv>
        <style.CheckButton
          isCertificationCorrect={isCertificationCorrect}
          disabled={!isCertificationCorrect}
          onClick={() => {
            setFindPasswordStudentId(studentId);
            setFindPasswordPhoneNumber(phoneNumberValue);
            router.push("/find-password-reset");
          }}
        >
          확인
        </style.CheckButton>
      </style.CheckButtonDiv>
      <style.HelpButtonDiv>
        <Link href="/contactus">
          <style.HelpButton>도움이 필요하세요?</style.HelpButton>
        </Link>
      </style.HelpButtonDiv>
    </style.FindPasswordPhone>
  );
};
export default FindPasswordPhone;
