import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-terms/mypage-terms-layout/MypageTermsLayout.style";
import MypageTermsContent from "@/components/pages/mypage/mypage-terms/mypage-terms-content/MypageTermsContent";

export default function MypageTermsLayout() {
  return (
    <style.Box>
      <style.TitleDiv>
        <Link href="/mypage">
          <style.TitleBackButton />
        </Link>
        <style.Title>이용약관</style.Title>
      </style.TitleDiv>
      <MypageTermsContent />
    </style.Box>
  );
}
