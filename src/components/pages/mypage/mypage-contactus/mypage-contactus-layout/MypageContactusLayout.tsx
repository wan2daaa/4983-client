import Link from "next/link";
import { useEffect, useState } from "react";
import * as style from "@/components/pages/mypage/mypage-contactus/mypage-contactus-layout/MypageContactusLayout.style";
import MypageContactusButton from "@/components/pages/mypage/mypage-contactus/mypaeg-contactus-button/MypageContactusButton";

export default function MypageContactusLayout() {
  const [targetPath, setTargetPath] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const path = accessToken ? "/mypage" : "/findpassword";
    setTargetPath(path);
  }, []);

  return (
    <style.Div>
      <style.TitleDiv>
        <Link href={targetPath}>
          <style.TitleBackButton />
        </Link>
        <style.Title>문의하기</style.Title>
      </style.TitleDiv>
      <MypageContactusButton />
    </style.Div>
  );
}
