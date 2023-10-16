import Link from "next/link";
import React from "react";
import * as style from "@/components/pages/mypage/mypage/mypage-profile-section/MypageProfile.style";
import { ProfileEditButtonDiv } from "@/components/pages/mypage/mypage/mypage-profile-section/MypageProfile.style";

export default function MypageProfile() {
  return (
    <style.Div>
      <style.ProfileArea>
        <style.ProfileImage
          src="/assets/image/mypage/DefaultProfile.png"
          loader={() => "/assets/image/mypage/DefaultProfile.png"}
          width={8.4}
          height={8.4}
          alt="Profile"
        />
        <style.ProfileNameTag>강낭콩 민콩</style.ProfileNameTag>
        <style.ProfileEditButtonDiv>
          <Link href="/mypageeditprofile">
            <style.ProfileEditButton>수정하기</style.ProfileEditButton>
          </Link>
        </style.ProfileEditButtonDiv>
      </style.ProfileArea>
    </style.Div>
  );
}
