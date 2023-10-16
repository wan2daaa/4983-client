import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-layout/MypageSalesHistoryLayout.style";
import MypageSalesHistoryButton from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-button/MypageSalesHistoryButton";

export default function MypageSalesHistoryLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/saleshistory">
          <style.TitleBackButton />
        </Link>
        <style.Title>판매 내역</style.Title>
      </style.TitleDiv>
      <MypageSalesHistoryButton />
    </style.Div>
  );
}
