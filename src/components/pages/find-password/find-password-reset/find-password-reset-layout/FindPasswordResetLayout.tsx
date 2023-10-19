import { useRouter } from "next/router";
import * as style from "@/components/pages/find-password/find-password-reset/find-password-reset-layout/FindPasswordResetLayout.style";
import FindPasswordResetInput from "@/components/pages/find-password/find-password-reset/find-password-reset-input/FindPasswordResetInput";

const FindPasswordResetLayout = () => {
  const router = useRouter();

  return (
    <style.Div>
      <style.TitleDiv>
        <button
          onClick={() => {
            router.back();
          }}
        >
          <style.TitleBackButton />
        </button>
      </style.TitleDiv>
      <style.Title>
        비밀번호를 <style.GreenP>재설정</style.GreenP>해주세요.
      </style.Title>
      <FindPasswordResetInput />
    </style.Div>
  );
};
export default FindPasswordResetLayout;
