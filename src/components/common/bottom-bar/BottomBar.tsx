import Link from "next/link";
import * as style from "@/components/common/bottom-bar/BottomBar.style";
// import { useRouter } from "next/router";

export default function BottomBar() {
  // const router = useRouter();
  //
  // const hideBar =
  //   router.pathname === "/main" ||
  //   router.pathname === "/chat" ||
  //   router.pathname === "/help" ||
  //   router.pathname === "/search" ||
  //   router.pathname === "/mypage";

  return (
    <style.BottomDiv>
      <Link href="/main">
        <style.Home />
      </Link>
      <Link href="/chat">
        <style.NonClickChat />
      </Link>
      {/* <Link href="/help"> */}
      {/*  <style.NonClickHelp /> */}
      {/* </Link> */}
      <Link href="/search">
        <style.NonClickSearch />
      </Link>
      <Link href="/mypage">
        <style.NonClickMyPage />
      </Link>
    </style.BottomDiv>
  );
}
