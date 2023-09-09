import { useRouter } from "next/router";
import { useState } from "react";
import MypageLayout from "@/components/pages/mypage/mypage/mypage-layout/MypageLayout";

export default function Register() {
  const router = useRouter();
  const id = String(router.query.id);

  if (id === "1") {
    return <MypageLayout />;
  }
}
