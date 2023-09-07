import * as style from "@/components/pages/create-account-detail-profile/create-account-detail-profile-layout/CreateAccountDetailProfileLayout.style";
import Link from "next/link";
import CreateAccountDetailProfileInput from "@/components/pages/create-account-detail-profile/create-account-detail-profile-input/CreateAccountDetailProfileInput";

export default function CreateAccountProfileLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
      </style.TitleDiv>
      <style.Title>
        <style.GreenP>회원정보 입력</style.GreenP> 및
        <style.GreenP> 본인인증</style.GreenP>
        을 <style.Br />
        진행해 주세요.
      </style.Title>
      <CreateAccountDetailProfileInput />
    </style.Div>
  );
}
