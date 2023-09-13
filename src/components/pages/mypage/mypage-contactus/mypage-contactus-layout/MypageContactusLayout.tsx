import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-contactus/mypage-contactus-layout/MypageContactusLayout.style";
import MypageContactusButton from "@/components/pages/mypage/mypage-contactus/mypaeg-contactus-button/MypageContactusButton";

export default function MypageContactusLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>문의하기</style.Title>
      </style.TitleDiv>
      <MypageContactusButton />
    </style.Div>
  );
}
