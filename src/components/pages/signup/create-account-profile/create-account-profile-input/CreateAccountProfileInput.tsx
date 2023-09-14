// 로직 작업때 입학년도 스크롤로 수정 예정
import Link from "next/link";
import React, { useState } from "react";
import * as style from "@/components/pages/signup/create-account-profile/create-account-profile-input/CreateAccountProfileInput.style";

export default function CreateAccountProfileInput() {
  return (
    <style.Div>
      <style.HakbunTag>학번</style.HakbunTag>
      <style.HakbunInputArea>
        <style.HakbunInput
          type="text"
          placeholder="학번을 입력해주세요. (ex: 3200000)"
        />
        <style.HakbunButtonDiv>
          <Link href="/">
            <style.HakbunButton>중복 확인</style.HakbunButton>
          </Link>
        </style.HakbunButtonDiv>
      </style.HakbunInputArea>
      <style.HakbunNotice>이미 가입된 학번 정보입니다.</style.HakbunNotice>
      <style.DepartmentTag>학과명</style.DepartmentTag>
      <style.DepartmentInputArea>
        <style.DepartmentInput
          type="text"
          placeholder="학과명을 입력해주세요. (ex: 경영학과) "
        />
      </style.DepartmentInputArea>
      <style.AdmissionTag>입학년도</style.AdmissionTag>
      <style.AdmissionScrollArea>
        <style.AdmissionScroll type="text" placeholder="년도를 선택해주세요." />
      </style.AdmissionScrollArea>
      <style.NicknameTag>닉네임</style.NicknameTag>
      <style.NicknameInputArea>
        <style.NicknameInput
          type="text"
          placeholder="닉네임을 입력해주세요. "
        />
        <style.NicknameButtonDiv>
          <Link href="/">
            <style.NicknameButton>중복 확인</style.NicknameButton>
          </Link>
        </style.NicknameButtonDiv>
      </style.NicknameInputArea>
      <style.NicknameNotice>사용 중인 닉네임이에요!</style.NicknameNotice>
      <style.CheckButtonDiv>
        <Link href="/register/2">
          <style.CheckButton>다음</style.CheckButton>
        </Link>
      </style.CheckButtonDiv>
    </style.Div>
  );
}
