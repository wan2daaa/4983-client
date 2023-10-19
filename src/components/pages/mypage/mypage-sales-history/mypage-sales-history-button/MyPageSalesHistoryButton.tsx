import React, { useState } from "react";
import * as style from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-button/MypageSalesHistoryButton.style";
import MyPageSalesHistorySale from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-sale/MyPageSalesHistorySale";
import MyPageSalesHistoryTransaction from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-transaction/MypageSalesHistoryTransaction";

type ButtonState = "sale" | "transaction";

interface MyPageSalesHistoryButtonProps {
  activeButton: ButtonState;
  setActiveButton: React.Dispatch<React.SetStateAction<ButtonState>>;
}

const MyPageSalesHistoryButton = ({
  activeButton,
  setActiveButton,
}: MyPageSalesHistoryButtonProps) => {
  const handleButtonClick = (button: ButtonState) => {
    setActiveButton(button);
  };

  const SaleButton =
    activeButton === "sale" ? style.SaleButtonOn : style.SaleButtonOff;
  const TransactionButton =
    activeButton === "transaction"
      ? style.TransactionButtonOn
      : style.TransactionButtonOff;

  return (
    <style.Div>
      <style.ButtonDiv>
        <style.SaleButtonDiv>
          <SaleButton
            onClick={() => handleButtonClick("sale")}
            className={activeButton === "sale" ? "active" : ""}
          >
            판매 중
          </SaleButton>
        </style.SaleButtonDiv>
        <style.TransactionButtonDiv>
          <TransactionButton
            onClick={() => handleButtonClick("transaction")}
            className={activeButton === "transaction" ? "active" : ""}
          >
            거래 완료
          </TransactionButton>
        </style.TransactionButtonDiv>
      </style.ButtonDiv>
    </style.Div>
  );
};
export default MyPageSalesHistoryButton;
