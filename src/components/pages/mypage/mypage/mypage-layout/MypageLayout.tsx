import * as style from "@/components/pages/mypage/mypage/mypage-layout/MypageLayout.style";
import Link from "next/link";
import MypageProfile from "@/components/pages/mypage/mypage/mypage-profile-section/MypageProfile";
import MypageTransactionHistory from "@/components/pages/mypage/mypage/mypage-transaction-history-section/MypageTransactionHistory";
import MypageInquiry from "@/components/pages/mypage/mypage/mypage-inquiry-section/MypageInquiry";
import MypageLoginActivity from "@/components/pages/mypage/mypage/mypage-login-activity/MypageLoginActivity";

export default function MypageLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>마이페이지</style.Title>
      </style.TitleDiv>
      <MypageProfile />
      <MypageTransactionHistory />
      <MypageInquiry />
      <MypageLoginActivity />
    </style.Div>
  );
}
