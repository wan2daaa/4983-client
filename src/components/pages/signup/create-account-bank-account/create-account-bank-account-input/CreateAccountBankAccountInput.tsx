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

  const banks = [
    { id: 1, name: "우리은행", enName: "WOORI" },
    { id: 2, name: "기업은행", enName: "IBK" },
    { id: 3, name: "국민은행", enName: "KB" },
    { id: 4, name: "카카오뱅크", enName: "KAKAO" },
    { id: 5, name: "농협은행", enName: "NH" },
    { id: 6, name: "신함은행", enName: "SHINHAN" },
    { id: 7, name: "하나은행", enName: "KEBHANA" },
    { id: 8, name: "새마을금고", enName: "KFCC" },
    { id: 9, name: "우체국", enName: "EPOST" },
    { id: 10, name: "SC제일은행", enName: "SC" },
    { id: 11, name: "대구은행", enName: "DGB" },
    { id: 12, name: "부산은행", enName: "BUSAN" },
    { id: 13, name: "경남은행", enName: "KN" },
    { id: 14, name: "광주은행", enName: "KJ" },
    { id: 15, name: "신협", enName: "SHINHYUP" },
    { id: 16, name: "수협은행", enName: "SUHYUP" },
    { id: 17, name: "산업은행", enName: "KDB" },
    { id: 18, name: "전북은행", enName: "JB" },
    { id: 19, name: "제주은행", enName: "JEJU" },
    { id: 20, name: "씨티은행", enName: "CITI" },
    { id: 21, name: "케이뱅크", enName: "K" },
    { id: 22, name: "토스뱅크", enName: "TOSS" },
  ];

  const handleBankClick = (bank: {
    id: number;
    name: string;
    enName: string;
  }) => {
    setAccountBanks(bank.enName);
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
          placeholder="은행을 선택해 주세요."
          value={selectedBank || "은행을 선택해 주세요."}
          onClick={toggleList}
          // onChange={e => setAccountBanks(e.target.value)}
        />
        <button onClick={toggleList}>
          <style.DownArrow />
        </button>
        {isListVisible && (
          <style.BankList className="bank-list">
            {banks.map(bank => (
              <style.PureBankList
                key={bank.id}
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
          placeholder="계좌번호를 입력해 주세요."
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
