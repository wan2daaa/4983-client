import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-transaction/MypageSalesHistoryTransaction.style";

const MyPageSalesHistorySale = () => (
  <style.Div>
    <style.Title>
      아직 거래 이력이 없어요!
      <style.Br />
      상경관에서 쉽게 전공서적을 거래해보세요!
    </style.Title>
    <Link href="/">
      <style.GoSalesButton>판매하러 가기</style.GoSalesButton>
    </Link>
  </style.Div>
);
export default MyPageSalesHistorySale;
