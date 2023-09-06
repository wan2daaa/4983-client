import * as style from "@/components/pages/find-password-reset/findpasswordReset-Input/FindPasswordResetInput.style";
import Link from "next/link";
import React, { useState } from "react";

export default function FindPasswordResetInput() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newPasswordValue = event.target.value;
    setNewPassword(newPasswordValue);

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
      setConfirmPasswordError("입력하신 비밀번호와 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const isButtonDisabled: boolean =
    !!passwordError ||
    !!confirmPasswordError ||
    newPassword !== confirmPassword ||
    newPassword.length === 0 || // 새 비밀번호의 길이가 0인 경우
    confirmPassword.length === 0; // 확인 비밀번호의 길이가 0인 경우

  return (
    <style.Div>
      <style.NewPasswordTag>새로운 비밀번호</style.NewPasswordTag>
      <style.NewPasswordInputArea>
        <style.NewPasswordInput
          type="password"
          placeholder="새로운 비밀번호를 입력해주세요."
          onChange={handleNewPasswordChange}
        />
      </style.NewPasswordInputArea>
      <style.NewPasswordNotice style={{ color: passwordError ? "#f00" : "" }}>
        {passwordError || "최소 8자~최대 20자의 영어, 숫자, 특수문자 가능"}
      </style.NewPasswordNotice>
      <style.NewPasswordCheckTag>비밀번호 재입력</style.NewPasswordCheckTag>
      <style.NewPasswordCheckInputArea>
        <style.NewPasswordCheckInput
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={handleConfirmPasswordChange}
        />
      </style.NewPasswordCheckInputArea>
      <style.NewPasswordCheckNotice
        style={{ display: confirmPasswordError ? "block" : "none" }}
      >
        {confirmPasswordError}
      </style.NewPasswordCheckNotice>
      <style.CheckButtonDiv>
        <Link href="/">
          {isButtonDisabled ? (
            <style.CheckButton disabled isDisabled>
              변경
            </style.CheckButton>
          ) : (
            <style.CheckButton isDisabled={false}>변경</style.CheckButton>
          )}
        </Link>
      </style.CheckButtonDiv>
    </style.Div>
  );
}
