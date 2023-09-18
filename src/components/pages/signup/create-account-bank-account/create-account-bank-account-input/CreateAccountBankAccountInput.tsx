import Link from "next/link";
import React from "react";
import * as style from "@/components/pages/signup/create-account-bank-account/create-account-bank-account-input/CreateAccountBankAccountInput.style";

export default function CreateAccountBankAccountInput() {
  return (
    <style.Div>
      <style.DepositorTag>예금주명</style.DepositorTag>
      <style.DepositorInpuArea>
        <style.DepositorInput
          type="text"
          placeholder="본인 명의의 예금주를 작성해 주세요."
        />
      </style.DepositorInpuArea>
      <style.BankTag>계좌은행</style.BankTag>
      <style.BankInputArea>
        <style.BankInput type="text" placeholder="은행을 선택해주세요." />
      </style.BankInputArea>
      <style.BankAccountTag>계좌번호</style.BankAccountTag>
      <style.BankAccountInputArea>
        <style.BankAccountInput
          type="text"
          placeholder="계좌번호를 입력해주세요."
        />
      </style.BankAccountInputArea>
      <Link href="/signup/4">
        <style.CheckButton>가입 완료</style.CheckButton>
      </Link>
    </style.Div>
  );
}
