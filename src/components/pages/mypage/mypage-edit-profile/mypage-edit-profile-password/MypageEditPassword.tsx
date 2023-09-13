import Image from "next/image";
import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-password/MypageEditPassword.style";

export default function MypageEditPassword() {
  return (
    <style.Div>
      <style.ChangePasswordTag>비밀번호 변경</style.ChangePasswordTag>
      <style.InputPasswrodArea>
        <style.InputPassword
          type="text"
          placeholder="현재 비밀번호를 입력해주세요."
        />
        <Link href="/">
          <style.CheckPasswordButton>확인</style.CheckPasswordButton>
        </Link>
      </style.InputPasswrodArea>
      <style.ChangePasswordNotice>
        비밀번호가 올바르지 않습니다.
      </style.ChangePasswordNotice>
      <style.InputNewPasswordArea>
        <style.InputNewPassword
          type="text"
          placeholder="새로운 비밀번호를 입력해 주세요."
        />
        <Link href="/">
          <style.CheckNewPasswordButton>확인</style.CheckNewPasswordButton>
        </Link>
      </style.InputNewPasswordArea>
      <style.NewPasswordNotice>
        최소 8자~최대 20자의 영어, 숫자, 특수문자 가능
      </style.NewPasswordNotice>
      <style.FinishNewPasswordNotice>
        비밀번호가 변경되었습니다.
      </style.FinishNewPasswordNotice>
    </style.Div>
  );
}
