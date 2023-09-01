import * as style from "@/components/pages/main/main-sell-button/MainSellButton.style";
import Link from "next/link";

export default function MainSellButton() {
  return (
    <style.SellBox>
      <Link href="/">
        <style.SellButton>판매하기</style.SellButton>
      </Link>
    </style.SellBox>
  );
}
