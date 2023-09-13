import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-purchase-history/mypage-purchase-nothing/MypagePurchaseNothing.style";

export default function MypagePurchaseNothing() {
  return (
    <style.Div>
      <style.Title>
        아직 구매 이력이 없어요!
        <style.Br />
        전공서적을 저렴하게 구매해보세요!
      </style.Title>
      <Link href="/">
        <style.GoSalesButton>구매하러 가기</style.GoSalesButton>
      </Link>
    </style.Div>
  );
}
