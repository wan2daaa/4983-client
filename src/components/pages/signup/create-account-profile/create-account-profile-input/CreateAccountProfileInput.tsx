import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  marketingAgree,
  nickname,
  password,
  studentId,
} from "@/recoil/atoms/SignupAtoms";
import * as style from "@/components/pages/signup/create-account-profile/create-account-profile-input/CreateAccountProfileInput.style";
import {
  checkNicknameDuplicate,
  checkStudentIdDuplicate,
} from "@/apis/auth/signup/duplicate";

export default function CreateAccountProfileInput() {
  const [studentIds, setStudentIds] = useRecoilState(studentId);
  const [nicknames, setNicknames] = useRecoilState(nickname);
  const [passwords, setPassword] = useRecoilState(password);
  const [marketingAgrees, setMarketingAgrees] = useRecoilState(marketingAgree);

  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isTermsOfUseChecked, setIsTermsOfUseChecked] = useState(false);
  const [isPersonalInformationChecked, setIsPersonalInformationChecked] =
    useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean | null>(null);

  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(true);

  const [isStudentIdDuplicate, setIsStudentIdDuplicate] = useState<
    boolean | null
  >(null);
  const [isHakbunButtonEnabled, setIsHakbunButtonEnabled] =
    useState<boolean>(false);

  const [isNicknameButtonEnabled, setIsNicknameButtonEnabled] =
    useState<boolean>(false);

  // 닉네임 중복 검사용
  const [isNicknameDuplicate, setIsNicknameDuplicate] = useState<
    boolean | null
  >(null);

  const [isCheckButtonEnabled, setIsCheckButtonEnabled] = useState<
    boolean | null
  >(false);

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newPasswordValue = event.target.value;
    setNewPassword(newPasswordValue);
    setPassword(newPasswordValue);

    // FIXME: 비밀번호 틀렸을때 딱히 와닿지가 않는다..?
    if (newPasswordValue.length < 8 || newPasswordValue.length > 20) {
      setPasswordError("최소 8자~최대 20자의 영어, 숫자, 특수문자 가능");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
  };

  useEffect(() => {
    if (confirmPassword !== "" && passwords.length >= 8) {
      if (passwords !== confirmPassword) {
        setIsPasswordMatch(false);
      } else {
        setIsPasswordMatch(true);
      }
    } else {
      setIsPasswordMatch(null);
    }
  }, [passwords, confirmPassword]);

  // 학번 중복 api
  const handleCheckStudentId = async () => {
    try {
      setIsStudentIdDuplicate(await checkStudentIdDuplicate(studentIds));
    } catch (error) {
      setIsStudentIdDuplicate(false);
    }
  };

  // 닉네임 중복 api
  const handleCheckNickname = async () => {
    try {
      setIsNicknameDuplicate(await checkNicknameDuplicate(nicknames));
    } catch (error) {
      setIsNicknameDuplicate(true);
    }
  };

  useEffect(() => {
    if (isTermsOfUseChecked && isPersonalInformationChecked) {
      setIsTermsChecked(true);
    } else {
      setIsTermsChecked(false);
    }
  }, [isTermsOfUseChecked, isPersonalInformationChecked]);

  const toggleTermsCheck = () => {
    // 현재 isTermsChecked 상태에 따라 모든 약관 항목을 해제 또는 체크합니다
    if (isTermsChecked) {
      setIsTermsChecked(false);
      setIsTermsOfUseChecked(false);
      setIsPersonalInformationChecked(false);
      setMarketingAgrees(false);
    } else {
      setIsTermsChecked(true);
      setIsTermsOfUseChecked(true);
      setIsPersonalInformationChecked(true);
      setMarketingAgrees(true);
    }
  };

  const toggleTermsOfUseCheck = () => {
    setIsTermsOfUseChecked(!isTermsOfUseChecked);
  };

  const toggleAdvertisementCheck = () => {
    setMarketingAgrees(!marketingAgrees);
  };

  const togglePersonalInformationCheck = () => {
    setIsPersonalInformationChecked(!isPersonalInformationChecked);
  };

  useEffect(() => {
    const areAllInputsFilled: boolean | null =
      !isStudentIdDuplicate &&
      !isNicknameDuplicate &&
      isPasswordMatch &&
      isTermsOfUseChecked &&
      isPersonalInformationChecked;

    // 모든 input 항목이 채워져야만 isCheckButtonEnabled를 업데이트
    setIsCheckButtonEnabled(areAllInputsFilled);
  }, [
    isStudentIdDuplicate,
    isNicknameDuplicate,
    isPasswordMatch,
    isTermsOfUseChecked,
    isPersonalInformationChecked,
  ]);

  useEffect(() => {
    // studentId가 7자 이상일 경우 버튼 활성화
    if (studentIds.length >= 7) {
      setIsHakbunButtonEnabled(true);
    } else {
      setIsHakbunButtonEnabled(false);
    }
  }, [studentIds]);

  // nickname이 2자 이상일 경우 버튼 활성화
  useEffect(() => {
    if (nicknames.length >= 2) {
      setIsNicknameButtonEnabled(true);
    } else {
      setIsNicknameButtonEnabled(false);
    }
  }, [nicknames]);

  return (
    <style.Div>
      <style.HakbunTag>학번</style.HakbunTag>
      <style.HakbunInputArea>
        <style.HakbunInput
          type="text"
          id="studentIds"
          value={studentIds}
          placeholder="학번을 입력해주세요. (ex: 3200000)"
          onChange={e => setStudentIds(e.target.value)}
        />
        <style.HakbunButtonDiv>
          <style.HakbunButton
            onClick={handleCheckStudentId}
            background={
              isHakbunButtonEnabled ? "rgba(2,184,120,0.80)" : "#d1d1d1"
            }
            fontColor={isHakbunButtonEnabled ? "#FFF" : "#50555c"}
            disabled={!isHakbunButtonEnabled}
          >
            중복 확인
          </style.HakbunButton>
        </style.HakbunButtonDiv>
      </style.HakbunInputArea>
      {isStudentIdDuplicate !== null && (
        <style.HakbunNotice
          fontColor={isStudentIdDuplicate ? "#f61818" : "#02B878"}
        >
          {isStudentIdDuplicate
            ? "이미 가입된 학번 정보입니다."
            : "가입 가능한 학번입니다."}
        </style.HakbunNotice>
      )}
      <style.NicknameTag>닉네임</style.NicknameTag>
      <style.NicknameInputArea>
        <style.NicknameInput
          id="nicknames"
          value={nicknames}
          onChange={e => setNicknames(e.target.value)}
          type="text"
          placeholder="닉네임을 입력해주세요. "
        />
        <style.NicknameButtonDiv>
          <style.NicknameButton
            onClick={handleCheckNickname}
            background={
              isNicknameButtonEnabled ? "rgba(2,184,120,0.80)" : "#d1d1d1"
            }
            fontColor={isNicknameButtonEnabled ? "#FFF" : "#50555c"}
            disabled={!isNicknameButtonEnabled}
          >
            중복 확인
          </style.NicknameButton>
        </style.NicknameButtonDiv>
      </style.NicknameInputArea>
      {isNicknameDuplicate !== null && (
        <>
          {isNicknameDuplicate ? (
            <style.NicknameNotice>사용 중인 닉네임이에요!</style.NicknameNotice>
          ) : (
            <style.NicknameNoticeSuccess>
              사용 가능한 닉네임입니다.
            </style.NicknameNoticeSuccess>
          )}
        </>
      )}
      <style.PasswordBox>
        <style.PasswordInput
          type={isNewPasswordVisible ? "password" : "text"}
          value={passwords}
          placeholder="비밀번호를 입력해주세요."
          onChange={handleNewPasswordChange}
        />
        {isNewPasswordVisible ? (
          <style.SvgAiOutlineEye
            onClick={() => {
              setIsNewPasswordVisible(!isNewPasswordVisible);
            }}
          />
        ) : (
          <style.SvgAiOutlineEyeInvisible
            onClick={() => {
              setIsNewPasswordVisible(!isNewPasswordVisible);
            }}
          />
        )}
        <style.PasswordNotice>
          최소 8자~최대 20자의 영어, 숫자, 특수문자 가능
        </style.PasswordNotice>
      </style.PasswordBox>
      <style.PasswordBox>
        <style.RePasswordInput
          type={isConfirmPasswordVisible ? "password" : "text"}
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={handleConfirmPasswordChange}
        />
        {isConfirmPasswordVisible ? (
          <style.SvgAiOutlineEye
            onClick={() => {
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
            }}
          />
        ) : (
          <style.SvgAiOutlineEyeInvisible
            onClick={() => {
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
            }}
          />
        )}
        {isPasswordMatch !== null && passwords !== "" && (
          <>
            {isPasswordMatch ? (
              <style.RePasswordNotice fontColor="#02b878">
                비밀번호가 일치합니다!
              </style.RePasswordNotice>
            ) : (
              <style.RePasswordNotice fontColor="#f61818">
                비밀번호를 다시 확인해주세요!
              </style.RePasswordNotice>
            )}
          </>
        )}
      </style.PasswordBox>
      <style.TermsDiv>
        <style.TermsAllCheckDiv>
          {isTermsChecked ? (
            <style.OnCircleCheckButtonSvg onClick={toggleTermsCheck} />
          ) : (
            <style.OffCircleCheckButtonSvg onClick={toggleTermsCheck} />
          )}
          <style.TermsAllCheck>모든 약관에 동의합니다.</style.TermsAllCheck>
        </style.TermsAllCheckDiv>
        <style.TermsOfUseCheckDiv>
          {isTermsOfUseChecked ? (
            <style.OnCheckButtonSvg onClick={toggleTermsOfUseCheck} />
          ) : (
            <style.OffCheckButtonSvg onClick={toggleTermsOfUseCheck} />
          )}
          <Link href="/">
            <style.TermsOfUseCheck>[필수] 이용약관</style.TermsOfUseCheck>
          </Link>
        </style.TermsOfUseCheckDiv>
        <style.PersonalInformationCheckDiv>
          {isPersonalInformationChecked ? (
            <style.OnCheckButtonSvg onClick={togglePersonalInformationCheck} />
          ) : (
            <style.OffCheckButtonSvg onClick={togglePersonalInformationCheck} />
          )}
          <Link href="/">
            <style.PersonalInformationCheck>
              [필수] 개인정보 수집 이용동의
            </style.PersonalInformationCheck>
          </Link>
        </style.PersonalInformationCheckDiv>
        <style.AdvertisementCheckDiv>
          {marketingAgrees ? (
            <style.OnCheckButtonSvg onClick={toggleAdvertisementCheck} />
          ) : (
            <style.OffCheckButtonSvg onClick={toggleAdvertisementCheck} />
          )}
          <Link href="/">
            <style.AdvertisementCheck>
              [선택] 홍보 마케팅 동의
            </style.AdvertisementCheck>
          </Link>
        </style.AdvertisementCheckDiv>
      </style.TermsDiv>
      <style.CheckButtonDiv>
        <Link href="/signup/2">
          <style.CheckButton
            style={
              isCheckButtonEnabled
                ? {
                    background: "#02B878",
                    color: "#fff",
                  }
                : { background: "#d1d1d1", color: "#707479" }
            }
            disabled={!isCheckButtonEnabled}
          >
            다음
          </style.CheckButton>
        </Link>
      </style.CheckButtonDiv>
    </style.Div>
  );
}
