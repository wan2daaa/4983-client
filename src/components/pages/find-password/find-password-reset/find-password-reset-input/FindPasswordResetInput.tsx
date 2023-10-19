import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import * as style from "@/components/pages/find-password/find-password-reset/find-password-reset-input/FindPasswordResetInput.style";
import {
  findPasswordPhoneNumber,
  findPasswordStudentId,
} from "@/recoil/atoms/FindPasswordAtoms";
import { fetchPatchPassword } from "@/apis/findpassword/FindPassword";

const FindPasswordResetInput = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [findPasswordStudentIdAtom] = useRecoilState(findPasswordStudentId);
  const [findPasswordPhoneNumberAtom] = useRecoilState(findPasswordPhoneNumber);

  const router = useRouter();
  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newPasswordValue = event.target.value;
    setNewPassword(newPasswordValue);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
  };

  const onClickSetPassword = () => {
    fetchPatchPassword(
      findPasswordStudentIdAtom,
      findPasswordPhoneNumberAtom,
      newPassword,
    )
      .then(() => {
        router.push("/signin");
      })
      .catch(() => {
        console.log("서버에러");
      });
  };

  useEffect(() => {
    if (newPassword === confirmPassword) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }

    if (newPassword.length < 8 || newPassword.length > 20) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (
      !passwordError &&
      !confirmPasswordError &&
      newPassword === confirmPassword
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [newPassword, confirmPassword]);

  return (
    <style.Div>
      <style.NewPasswordTag>새로운 비밀번호</style.NewPasswordTag>
      <style.NewPasswordInputArea>
        <style.NewPasswordInput
          passwordError={passwordError}
          type="password"
          placeholder="새로운 비밀번호를 입력해주세요."
          onChange={handleNewPasswordChange}
          value={newPassword}
        />
      </style.NewPasswordInputArea>
      <style.NewPasswordNotice>
        최소 8자~최대 20자의 영어, 숫자, 특수문자 가능
      </style.NewPasswordNotice>
      <style.NewPasswordCheckTag>비밀번호 재입력</style.NewPasswordCheckTag>
      <style.NewPasswordCheckInputArea>
        <style.NewPasswordCheckInput
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
        />
        {confirmPassword.length !== 0 && !confirmPasswordError && (
          <style.NewPasswordCheckNotice>
            입력하신 비밀번호와 일치하지 않습니다.
          </style.NewPasswordCheckNotice>
        )}
      </style.NewPasswordCheckInputArea>

      <style.CheckButtonDiv>
        {isButtonDisabled ||
        newPassword.length === 0 ||
        confirmPassword.length === 0 ? (
          <style.CheckButton disabled isDisabled>
            변경
          </style.CheckButton>
        ) : (
          <style.CheckButton isDisabled={false} onClick={onClickSetPassword}>
            변경
          </style.CheckButton>
        )}
      </style.CheckButtonDiv>
    </style.Div>
  );
};
export default FindPasswordResetInput;
