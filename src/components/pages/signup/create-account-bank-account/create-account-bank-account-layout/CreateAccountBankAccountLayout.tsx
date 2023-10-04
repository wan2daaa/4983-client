import Link from "next/link";
import * as style from "@/components/pages/signup/create-account-bank-account/create-account-bank-account-layout/CreateAccountBankAccountLayout.style";
import CreateAccountBankAccountInput from "@/components/pages/signup/create-account-bank-account/create-account-bank-account-input/CreateAccountBankAccountInput";

export default function CreateAccountBankAccountLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/signup/2">
          <style.TitleBackButton />
        </Link>
      </style.TitleDiv>
      <style.Title>
        거래 시 이용할
        <style.Br />
        <style.GreenP>계좌번호</style.GreenP>를 기입해 주세요.
      </style.Title>
      <CreateAccountBankAccountInput />
    </style.Div>
  );
}
