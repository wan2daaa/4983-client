import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as style from "@/components/pages/mypage/mypage/mypage-layout/MypageLayout.style";
import MypageProfile from "@/components/pages/mypage/mypage/mypage-profile-section/MypageProfile";
import MypageTransactionHistory from "@/components/pages/mypage/mypage/mypage-transaction-history-section/MypageTransactionHistory";
import MypageInquiry from "@/components/pages/mypage/mypage/mypage-inquiry-section/MypageInquiry";
import MypageLoginActivity from "@/components/pages/mypage/mypage/mypage-login-activity/MypageLoginActivity";
import { getMemberInfo } from "@/apis/mypage/MyPage";

const MyPageLayout = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [nickname, setNickname] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    getMemberInfo().then(res => {
      setImageUrl(res.imageUrl);
      setNickname(res.nickname);
    });
  }, [router.isReady, router]);

  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>마이페이지</style.Title>
      </style.TitleDiv>
      <MypageProfile imageUrl={imageUrl} nickname={nickname} />
      <MypageTransactionHistory />
      <MypageInquiry />
      <MypageLoginActivity />
    </style.Div>
  );
};
export default MyPageLayout;
