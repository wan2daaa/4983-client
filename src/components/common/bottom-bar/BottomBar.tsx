import Link from "next/link";
import * as style from "@/components/common/bottom-bar/BottomBar.style";

const BottomBar = () => (
  <style.BottomDiv>
    <Link href="/main">
      <style.Home />
    </Link>
    <Link href="/chat">
      <style.NonClickChat />
    </Link>
    <Link href="/help">
      <style.NonClickHelp />
    </Link>
    <Link href="/search">
      <style.NonClickSearch />
    </Link>
    <Link href="/mypage">
      <style.NonClickMyPage />
    </Link>
  </style.BottomDiv>
);
export default BottomBar;
