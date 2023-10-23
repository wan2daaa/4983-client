import Link from "next/link";
import React from "react";
import * as style from "@/components/pages/mypage/mypage/mypage-profile-section/MypageProfile.style";

interface MypageProfileProps {
  imageUrl: string;
  nickname: string;
}

const MypageProfile = ({ imageUrl, nickname }: MypageProfileProps) => (
  <style.Div>
    <style.ProfileArea>
      <style.ProfileImage
        src={imageUrl}
        width={8.4}
        height={8.4}
        alt="Profile"
      />
      <style.ProfileNameTag>{nickname}</style.ProfileNameTag>
      <style.ProfileEditButtonDiv>
        <Link href="/mypageeditprofile">
          <style.ProfileEditButton>수정하기</style.ProfileEditButton>
        </Link>
      </style.ProfileEditButtonDiv>
    </style.ProfileArea>
  </style.Div>
);
export default MypageProfile;
