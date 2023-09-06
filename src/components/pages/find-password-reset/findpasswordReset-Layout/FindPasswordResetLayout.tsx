import * as style from "@/components/pages/find-password-reset/findpasswordReset-Layout/FindPasswordResetLayout.style";
import Link from "next/link";
import FindPasswordResetInput from "@/components/pages/find-password-reset/findpasswordReset-Input/FindPasswordResetInput";

export default function FindPasswordResetLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
      </style.TitleDiv>
      <style.Title>
        비밀번호를 <style.GreenP>재설정</style.GreenP>해주세요.
      </style.Title>
      <FindPasswordResetInput />
    </style.Div>
  );
}
