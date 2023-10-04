import Link from "next/link";
import * as style from "@/components/pages/signup/create-account-detail-profile/create-account-detail-profile-layout/CreateAccountDetailProfileLayout.style";
import CreateAccountDetailProfileInput from "@/components/pages/signup/create-account-detail-profile/create-account-detail-profile-input/CreateAccountDetailProfileInput";

export default function CreateAccountDetailProfileLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/signup/1">
          <style.TitleBackButton />
        </Link>
      </style.TitleDiv>
      <style.Title>
        <style.GreenP>휴대폰 본인인증</style.GreenP>
        을 <style.Br />
        진행해 주세요.
      </style.Title>
      <CreateAccountDetailProfileInput />
    </style.Div>
  );
}
