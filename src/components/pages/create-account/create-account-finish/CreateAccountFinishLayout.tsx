import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as style from "@/components/pages/create-account/create-account-finish/CreateAccountFinishLayout.style";

export default function CreateAccountFinishLayout() {
  return (
    <style.Div>
      <style.CheckImage
        src="/assets/image/GreenCircleCheck.png"
        loader={() => "/assets/image/GreenCircleCheck.png"}
        width={10.5}
        height={10.5}
        alt="Finish-Page"
      />
      <style.Title>회원가입이 완료되었습니다!</style.Title>
      <Link href="/help">
        <style.CheckButton>사용법 보러 가기</style.CheckButton>
      </Link>
    </style.Div>
  );
}
