import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  studentId,
  nickname,
  password,
  marketingAgree,
} from "@/recoil/atoms/SignupAtoms";
import * as style from "@/components/pages/signup/create-account-profile/create-account-profile-input/CreateAccountProfileInput.style";
import {
  checkstudentIdDuplicate,
  checkNicknameDuplicate,
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

  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  // 비밀번호 일치 검사용
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // 학번 중복 검사용
  const [duplicatestudentIdStatus, setDuplicatestudentIdStatus] = useState<{
    isDuplicatestudentId: boolean;
  } | null>(null);

  // 닉네임 중복 검사용
  const [duplicateNicknameStatus, setDuplicateNicknameStatus] = useState<{
    isDuplicateNickname: boolean;
  } | null>(null);

  // 비밀번호 일치 검사
  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newPasswordValue = event.target.value;
    setNewPassword(newPasswordValue);
    setPassword(newPasswordValue); // 리코일 잘 담기는지 확인해야함

    // 비밀번호 길이 검사
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

    // 비밀번호 확인 검사
    if (newPassword !== confirmPasswordValue) {
      setConfirmPasswordError("비밀번호를 다시 확인해주세요!");
    } else {
      setConfirmPasswordError("");
    }
  };

  // 학번 중복 api
  const handleCheckStudentId = async () => {
    const inputStudentId = studentIds;
    try {
      const { isDuplicatestudentId } =
        await checkstudentIdDuplicate(inputStudentId);
      setDuplicatestudentIdStatus({ isDuplicatestudentId });
    } catch (error) {
      setDuplicatestudentIdStatus({
        isDuplicatestudentId: true,
      });
    }
  };

  // 닉네임 중복 api
  const handleCheckNickname = async () => {
    const inputNickname = nicknames;
    try {
      const { isDuplicateNickname } =
        await checkNicknameDuplicate(inputNickname);

      setDuplicateNicknameStatus({ isDuplicateNickname });
      if (!isDuplicateNickname) {
        setIsNicknameAvailable(true); // 중복되지 않으면 성공 메시지를 표시
      }
    } catch (error) {
      setDuplicateNicknameStatus({
        isDuplicateNickname: true,
      });
    }
  };

  useEffect(() => {
    // isTermsOfUseChecked, isPersonalInformationChecked, marketingAgrees
    // 이 3개가 모두 체크되면 isTermsChecked도 체크되도록 처리합니다
    if (
      isTermsOfUseChecked &&
      isPersonalInformationChecked &&
      marketingAgrees
    ) {
      setIsTermsChecked(true);
    } else {
      setIsTermsChecked(false);
    }
  }, [isTermsOfUseChecked, isPersonalInformationChecked, marketingAgrees]);

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

  const areAllInputsFilled = () =>
    (studentIds.length > 0 &&
      nicknames.length > 0 &&
      passwords.length > 0 &&
      newPassword.length >= 8 &&
      confirmPassword.length >= 8 &&
      newPassword === confirmPassword &&
      isTermsOfUseChecked &&
      isPersonalInformationChecked &&
      marketingAgrees) ||
    (studentIds.length > 0 &&
      nicknames.length > 0 &&
      passwords.length > 0 &&
      newPassword.length >= 8 &&
      confirmPassword.length >= 8 &&
      newPassword === confirmPassword &&
      isTermsOfUseChecked &&
      isPersonalInformationChecked);

  // 모든 input 항목이 채워져야만 isCheckButtonEnabled를 업데이트
  const isCheckButtonEnabled = areAllInputsFilled();

  // 학번 7자 이상일때만 검사 버튼 활성화
  const [isHakbunButtonEnabled, setIsHakbunButtonEnabled] =
    useState<boolean>(false);

  useEffect(() => {
    // studentId가 7자 이상일 경우 버튼 활성화
    if (studentIds.length >= 7) {
      setIsHakbunButtonEnabled(true);
    } else {
      setIsHakbunButtonEnabled(false);
    }
  }, [studentIds]);

  // 닉네임 2글자 이상일때만 검사버튼 활성화
  const [isNicknameButtonEnabled, setIsNicknameButtonEnabled] =
    useState<boolean>(false);

  useEffect(() => {
    // nickname이 2자 이상일 경우 버튼 활성화
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
            style={
              isHakbunButtonEnabled
                ? { background: "rgba(2,184,120,0.80)", color: "#FFF" }
                : { background: "#d1d1d1", color: "#50555c" }
            }
            disabled={!isHakbunButtonEnabled} // 수정된 부분
          >
            중복 확인
          </style.HakbunButton>
        </style.HakbunButtonDiv>
      </style.HakbunInputArea>
      {duplicatestudentIdStatus !== null &&
        duplicatestudentIdStatus.isDuplicatestudentId && (
          <style.HakbunNotice>이미 가입된 학번 정보입니다.</style.HakbunNotice>
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
            style={
              isNicknameButtonEnabled
                ? { background: "rgba(2,184,120,0.80)", color: "#FFF" }
                : { background: "#d1d1d1", color: "#50555c" }
            }
            disabled={!isNicknameButtonEnabled} // 수정된 부분
          >
            중복 확인
          </style.NicknameButton>
        </style.NicknameButtonDiv>
      </style.NicknameInputArea>
      {isNicknameAvailable && (
        <style.NicknameNoticeSuccess>
          사용 가능한 닉네임입니다.
        </style.NicknameNoticeSuccess>
      )}
      {duplicateNicknameStatus !== null &&
        duplicateNicknameStatus?.isDuplicateNickname && (
          <style.NicknameNotice>사용 중인 닉네임이에요!</style.NicknameNotice>
        )}
      <style.PassworndInput
        type="password"
        value={passwords}
        placeholder="비밀번호를 입력해주세요."
        onChange={handleNewPasswordChange}
      />
      <style.PasswordNotice>
        최소 8자~최대 20자의 영어, 숫자, 특수문자 가능
      </style.PasswordNotice>
      <style.RepasswordInput
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        onChange={handleConfirmPasswordChange}
      />
      <style.RepasswordNotice
        style={{ display: confirmPasswordError ? "block" : "none" }}
      >
        {confirmPasswordError}
      </style.RepasswordNotice>
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
