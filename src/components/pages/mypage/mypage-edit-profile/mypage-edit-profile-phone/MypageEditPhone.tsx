import * as style from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-phone/MypageEditPhone.style";
import Image from "next/image";
import Link from "next/link";

export default function MypageEditPhone() {
  return (
    <style.Div>
      <style.PhoneTag>전화번호</style.PhoneTag>
      <style.InputPhoneArea>
        <style.InputPhone type="text" placeholder="010-4487-3122" />
        <Link href="/">
          <style.SendButton>전송</style.SendButton>
        </Link>
      </style.InputPhoneArea>
      <style.CertificationTag>인증번호</style.CertificationTag>
      <style.InputCertificationArea>
        <style.InputCertification
          type="text"
          placeholder="인증 번호를 입력해주세요."
        />
        <Link href="/">
          <style.CheckButton>확인</style.CheckButton>
        </Link>
      </style.InputCertificationArea>
      <style.CertificationNotice>
        인증번호가 올바르지 않습니다.
      </style.CertificationNotice>
    </style.Div>
  );
}
