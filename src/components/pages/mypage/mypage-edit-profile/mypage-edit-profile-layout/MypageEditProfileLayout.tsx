import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-layout/MypageEditProfileLayout.style";
import MypageEditProfilePicture from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-picture/MypageEditProfilePicture";
import MypageEditProfileName from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-name/MypageEditProfileName";
import MypageEditBankAccount from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-bank-acount/MypageEditBankAccount";
import MypageEditPhone from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-phone/MypageEditPhone";
import MypageEditPassword from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-password/MypageEditPassword";

export default function MypageEditProfileLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>프로필 수정</style.Title>
        <Link href="/">
          <style.RegistButton>등록하기</style.RegistButton>
        </Link>
      </style.TitleDiv>
      <MypageEditProfilePicture />
      <MypageEditProfileName />
      <MypageEditBankAccount />
      <MypageEditPhone />
      <MypageEditPassword />
    </style.Div>
  );
}
