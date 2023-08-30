// FIXME 12번 나중에 수정 가능성 있음

import * as style from "@/components/pages/login-page/LoginPage.style";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <style.Container>
      <style.TitleDiv>
        <style.Title>로그인</style.Title>
      </style.TitleDiv>
      <hr />
      <style.Image>
        <Image
          src="/assets/image/LoginRabbit.png"
          loader={() => "/assets/image/LoginRabbit.png"}
          width={124}
          height={183}
          alt="Rabbit"
        />
      </style.Image>
      <style.HakbunTag>학번</style.HakbunTag>
      <style.InputHakbunArea>
        <style.InputHakbun type="text" placeholder="학번을 입력해주세요" />
      </style.InputHakbunArea>
      <style.PasswordTag>비밀번호</style.PasswordTag>
      <style.InputPasswordArea>
        <style.InputPassword
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
      </style.InputPasswordArea>
      <style.WrongPassword>잘못된 비밀번호입니다!</style.WrongPassword>
      <Link href="/">
        <style.ButtonDiv>
          <style.Button>로그인</style.Button>
        </style.ButtonDiv>
      </Link>
      <style.FindPasswordRegisterDiv>
        <Link href="/">
          <style.FindPassword>비밀번호 찾기</style.FindPassword>
        </Link>
        <Link href="/">
          <style.Register>회원가입</style.Register>
        </Link>
      </style.FindPasswordRegisterDiv>
    </style.Container>
  );
}
