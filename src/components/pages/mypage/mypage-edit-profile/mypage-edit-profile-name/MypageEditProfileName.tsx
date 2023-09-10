import * as style from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-name/MypageEditProfileName.style";
import Image from "next/image";
import Link from "next/link";

export default function MypageEditProfileName() {
  return (
    <style.Div>
      <style.NameTag>닉네임</style.NameTag>
      <style.InputNameArea>
        <style.InputName
          type="text"
          placeholder="변경할 닉네임을 작성해 주세요."
        />
        <Link href="/">
          <style.DuplicateButton>중복 확인</style.DuplicateButton>
        </Link>
      </style.InputNameArea>
      <style.EditNameNotice>사용 중인 닉네임이에요!</style.EditNameNotice>
    </style.Div>
  );
}
