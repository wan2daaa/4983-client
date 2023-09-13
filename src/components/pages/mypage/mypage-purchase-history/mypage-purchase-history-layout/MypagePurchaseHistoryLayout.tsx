import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-purchase-history/mypage-purchase-history-layout/MypagePurchaseHistoryLayout.style";
import MypagePurchaseNothing from "@/components/pages/mypage/mypage-purchase-history/mypage-purchase-nothing/MypagePurchaseNothing";

export default function MypagePurchaseHistoryLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
        <style.Title>구매 내역</style.Title>
      </style.TitleDiv>
      <MypagePurchaseNothing />
    </style.Div>
  );
}
