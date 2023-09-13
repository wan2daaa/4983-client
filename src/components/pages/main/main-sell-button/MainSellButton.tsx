import Link from "next/link";
import * as style from "@/components/pages/main/main-sell-button/MainSellButton.style";

export default function MainSellButton() {
  return (
    <style.SellBox>
      <Link href="/sell">
        <style.SellButton>판매하기</style.SellButton>
      </Link>
    </style.SellBox>
  );
}
