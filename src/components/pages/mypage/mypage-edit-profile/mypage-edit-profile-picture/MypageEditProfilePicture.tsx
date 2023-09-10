import * as style from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-picture/MypageEditProfilePicture.style";
import Link from "next/link";
import React from "react";
import image from "next/image";

export default function MypageEditProfilePicture() {
  return (
    <style.Div>
      <Link href="/">
        <style.ProfileImage
          src="/assets/image/mypage/DefaultEditProfile.png"
          loader={() => "/assets/image/mypage/DefaultEditProfile.png"}
          width={8.4}
          height={8.4}
          alt="Profile"
        />
      </Link>
      <style.UserNameTag>강낭콩 민콩</style.UserNameTag>
    </style.Div>
  );
}
