import Link from "next/link";
import React from "react";
import * as style from "@/components/pages/mypage/mypage/mypage-login-activity/MypageLoginActivity.style";

export default function MypageLoginActivity() {
  return (
    <style.Div>
      <style.Title>로그인 활동</style.Title>
      <style.LoginActivityArea>
        <style.LogoutArea>
          <Link href="/">
            <style.LogoutButtonDiv>
              <style.LogoutButton
                src="/assets/image/mypage/Logout.png"
                loader={() => "/assets/image/mypage/Logout.png"}
                width={3.1}
                height={3}
                alt="Finish-Page"
              />
              <style.LogoutTag>로그아웃</style.LogoutTag>
            </style.LogoutButtonDiv>
          </Link>
        </style.LogoutArea>
        <style.secedeArea>
          <Link href="/">
            <style.secedeButtonDiv>
              <style.secedeButton
                src="/assets/image/mypage/Secede.png"
                loader={() => "/assets/image/mypage/Secede.png"}
                width={3}
                height={3}
                alt="Finish-Page"
              />
              <style.secedeTag>탈퇴하기</style.secedeTag>
            </style.secedeButtonDiv>
          </Link>
        </style.secedeArea>
      </style.LoginActivityArea>
    </style.Div>
  );
}
