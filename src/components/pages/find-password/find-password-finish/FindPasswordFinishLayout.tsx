import Link from "next/link";
import React from "react";
import * as style from "@/components/pages/find-password/find-password-finish/FindPasswordFinishLayout.style";

export default function FindPasswordFinishLayout() {
  return (
    <style.Div>
      <style.CheckImage
        src="/assets/image/GreenCircleCheck.png"
        loader={() => "/assets/image/GreenCircleCheck.png"}
        width={10.5}
        height={10.5}
        alt="Finish-Page"
      />
      <style.Title>비밀번호 변경이 완료되었습니다!</style.Title>
      <style.Content>다시 로그인을 해주세요.</style.Content>

      <Link href="/signin">
        <style.CheckButton>로그인 하러 가기</style.CheckButton>
      </Link>
    </style.Div>
  );
}
