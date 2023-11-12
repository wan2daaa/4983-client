import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import * as style from "@/components/pages/signin/LoginPage.style";
import { Signin } from "@/apis/auth/signin/Signin";

export default function LoginPage() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [rememberMeChecked, setRememberMeChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const inputStudentId = studentId;
    const inputPassword = password;

    await Signin(inputStudentId, inputPassword).catch(error => {
      setLoginError(true);
      setErrorMsg(error);
    });
  };

  const toggleRememberMe = () => {
    setRememberMeChecked(!rememberMeChecked);
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
          loading="lazy"
          alt="Rabbit"
        />
      </style.Image>
      <div>
        <style.HakbunBox>
          <style.HakbunTag>학번</style.HakbunTag>
          <style.InputHakbun
            id="studentId"
            type="text"
            placeholder="학번을 입력해 주세요."
            value={studentId}
            onChange={e => setStudentId(e.target.value)}
          />
        </style.HakbunBox>

        <style.PasswordBox>
          <style.PasswordTag>비밀번호</style.PasswordTag>
          <style.PasswordContainer>
            <style.InputPassword
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <style.PasswordImageButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Image
                src={
                  showPassword
                    ? "/assets/image/PasswordViewOn.svg"
                    : "/assets/image/PasswordViewOff.svg"
                }
                loader={() =>
                  showPassword
                    ? "/assets/image/PasswordViewOn.svg"
                    : "/assets/image/PasswordViewOff.svg"
                }
                width={26}
                height={26}
                loading="lazy"
                alt={showPassword ? "passwordViewOn" : "passwordViewOff"}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                }}
              />
            </style.PasswordImageButton>
          </style.PasswordContainer>
        </style.PasswordBox>

        {loginError && <style.WrongPassword>{errorMsg}</style.WrongPassword>}

        <style.RemembermeBox>
          <style.RemembermeImage onClick={toggleRememberMe}>
            <Image
              src={
                rememberMeChecked
                  ? "/assets/image/RemembermeSigninButton_Check.svg"
                  : "/assets/image/RemembermeSigninButton_UnCheck.svg"
              }
              loader={() =>
                rememberMeChecked
                  ? "/assets/image/RemembermeSigninButton_Check.svg"
                  : "/assets/image/RemembermeSigninButton_UnCheck.svg"
              }
              width={20}
              height={20}
              loading="lazy"
              alt={rememberMeChecked ? "Checked" : "UnChecked"}
            />
          </style.RemembermeImage>
          <style.RemembermeContent>자동 로그인</style.RemembermeContent>
        </style.RemembermeBox>
        <style.Button onClick={handleLogin}>로그인</style.Button>
      </div>
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
