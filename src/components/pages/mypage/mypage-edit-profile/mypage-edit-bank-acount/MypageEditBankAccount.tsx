import Image from "next/image";
import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-bank-acount/MypageEditBankAccount.style";

export default function MypageEditBankAccount() {
  return (
    <style.Div>
      <style.BankAccountTag>계좌등록</style.BankAccountTag>
      <style.BankAccountArea>
        <style.InputBankAccount type="text" placeholder="우리은행" />
        <style.ScrollButton />
        <style.BankAccountNumber type="text" placeholder="00000000000000" />
      </style.BankAccountArea>
    </style.Div>
  );
}
