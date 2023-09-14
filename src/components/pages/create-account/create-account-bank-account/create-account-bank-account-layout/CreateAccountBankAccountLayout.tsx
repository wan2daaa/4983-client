import Link from "next/link";
import * as style from "@/components/pages/create-account/create-account-detail-profile/create-account-detail-profile-layout/CreateAccountDetailProfileLayout.style";
import CreateAccountBankAccountInput from "@/components/pages/create-account/create-account-bank-account/create-account-bank-account-input/CreateAccountBankAccountInput";

export default function CreateAccountBankAccountLayout() {
  return (
    <style.Div>
      <style.TitleDiv>
        <Link href="/">
          <style.TitleBackButton />
        </Link>
      </style.TitleDiv>
      <style.Title>
        거래 시 이용할
        <style.Br />
        <style.GreenP>계좌번호</style.GreenP>를 기입해주세요
      </style.Title>
      <CreateAccountBankAccountInput />
    </style.Div>
  );
}
