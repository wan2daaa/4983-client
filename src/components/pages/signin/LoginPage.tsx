import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import * as style from "@/components/pages/signin/LoginPage.style";
import { Signin } from "@/apis/auth/signin/Signin";

export default function LoginPage() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputStudentId = studentId;
    const inputPassword = password;

    await Signin(inputStudentId, inputPassword).catch(error => {
      setLoginError(true);
      setErrorMsg(error);
    });
  };
  return (
    <style.Container>
      <style.TitleDiv>
        <style.Title>로그인</style.Title>
      </style.TitleDiv>
      <style.Image>
        <Image
          src="/assets/image/LoginRabbit.png"
          loader={() => "/assets/image/LoginRabbit.png"}
          width={124}
          height={183}
          alt="Rabbit"
        />
      </style.Image>
      <form onSubmit={handleLogin}>
        <style.HakbunTag>학번</style.HakbunTag>
        <style.InputHakbunArea>
          <style.InputHakbun
            id="studentId"
            type="text"
            placeholder="학번을 입력해주세요"
            value={studentId}
            onChange={e => setStudentId(e.target.value)}
          />
        </style.InputHakbunArea>
        <style.PasswordTag>비밀번호</style.PasswordTag>
        <style.InputPasswordArea>
          <style.InputPassword
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </style.InputPasswordArea>
        {loginError && <style.WrongPassword>{errorMsg}</style.WrongPassword>}
        <style.Button type="submit">로그인</style.Button>
      </form>
      <style.FindPasswordRegisterDiv>
        <Link href="/findpassword">
          <style.FindPassword>비밀번호 찾기</style.FindPassword>
        </Link>
        <style.etc>|</style.etc>
        <Link href="/signup/1">
          <style.Register>회원가입</style.Register>
        </Link>
      </style.FindPasswordRegisterDiv>
    </style.Container>
  );
}
