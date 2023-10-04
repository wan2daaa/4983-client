import Link from "next/link";
import * as style from "@/components/pages/signup/create-account-profile/create-account-profile-layout/CreateAccountProfileLayout.style";
import CreateAccountProfileInput from "@/components/pages/signup/create-account-profile/create-account-profile-input/CreateAccountProfileInput";

export default function CreateAccountProfileLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/signin">
          <style.TitleBackButton />
        </Link>
      </style.TitleDiv>
      <style.Title>
        편리한 서비스 제공을 위한
        <style.GreenP>
          <style.Br />
          프로필 정보
        </style.GreenP>
        를 입력해 주세요.
      </style.Title>
      <CreateAccountProfileInput />
    </style.Div>
  );
}
