import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  accountHolder,
  accountBank,
  accountNumber,
} from "@/recoil/atoms/SignupAtoms";
import * as style from "@/components/pages/signup/create-account-bank-account/create-account-bank-account-input/CreateAccountBankAccountInput.style";

export default function CreateAccountBankAccountInput() {
  const [accountHolders, setAccountHolders] = useRecoilState(accountHolder);
  const [accountBanks, setAccountBanks] = useRecoilState(accountBank);
  const [accountNumbers, setAccountNumber] = useRecoilState(accountNumber);

  const [isListVisible, setListVisible] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

  // 각 은행에 고유한 ID 또는 식별자를 포함한 배열
  const banks = [
    { id: 1, name: "우리은행" },
    { id: 2, name: "기업은행" },
    { id: 3, name: "국민은행" },
    { id: 4, name: "카카오뱅크" },
    { id: 5, name: "농협은행" },
    { id: 6, name: "신함은행" },
    { id: 7, name: "하나은행" },
    { id: 8, name: "새마을금고" },
    { id: 9, name: "우체국" },
    { id: 10, name: "SC제일은행" },
    { id: 11, name: "대구은행" },
    { id: 12, name: "부산은행" },
    { id: 13, name: "경남은행" },
    { id: 14, name: "광주은행" },
    { id: 15, name: "신협" },
    { id: 16, name: "수협은행" },
    { id: 17, name: "산업은행" },
    { id: 18, name: "전북은행" },
    { id: 19, name: "제주은행" },
    { id: 20, name: "씨티은행" },
    { id: 21, name: "케이뱅크" },
    { id: 22, name: "토스뱅크" },
  ];

  const handleBankClick = (bank: { id?: number; name: any }) => {
    setSelectedBank(bank.name);
    setListVisible(false);
  };

  const toggleList = () => {
    setListVisible(!isListVisible);
  };

  const [isButtonActive, setButtonActive] = useState(false);

  const checkButtonActivation = () => {
    if (accountHolders && selectedBank && accountNumbers) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  };

  useEffect(() => {
    checkButtonActivation();
  }, [accountHolders, selectedBank, accountNumbers]);

  return (
    <style.Div>
      <style.DepositorTag>예금주명</style.DepositorTag>
      <style.DepositorInputArea>
        <style.DepositorInput
          id="accountHolders"
          type="text"
          value={accountHolders}
          placeholder="본인 명의의 예금주를 작성해 주세요."
          onChange={e => setAccountHolders(e.target.value)}
        />
      </style.DepositorInputArea>
      <style.BankTag>계좌은행</style.BankTag>
      <style.BankInputArea>
        <style.BankInput
          id="accountBanks"
          type="text"
          placeholder="은행을 선택해주세요."
          value={selectedBank || "은행을 선택해주세요."}
          onClick={toggleList}
          onChange={e => setAccountBanks(e.target.value)}
        />
        <button onClick={toggleList}>
          <style.DownArrow />
        </button>
        {isListVisible && (
          <style.BankList className="bank-list">
            {banks.map(bank => (
              <style.PureBankList
                key={bank.id} // 고유한 ID를 key로 사용
                onClick={() => handleBankClick(bank)}
                className={bank.name === selectedBank ? "selected" : ""}
              >
                {bank.name}
              </style.PureBankList>
            ))}
          </style.BankList>
        )}
      </style.BankInputArea>
      <style.BankAccountTag>계좌번호</style.BankAccountTag>
      <style.BankAccountInputArea>
        <style.BankAccountInput
          id="accountNumbers"
          value={accountNumbers}
          type="text"
          placeholder="계좌번호를 입력해주세요."
          onChange={e => setAccountNumber(e.target.value)}
        />
      </style.BankAccountInputArea>
      <style.CheckButtonArea>
        <Link href="/signup/4">
          <style.CheckButton
            style={{
              background: isButtonActive ? "#02b878" : "#d1d1d1",
              color: isButtonActive ? "#fff" : "#707479",
            }}
            disabled={!isButtonActive}
          >
            다음
          </style.CheckButton>
        </Link>
      </style.CheckButtonArea>
    </style.Div>
  );
}
