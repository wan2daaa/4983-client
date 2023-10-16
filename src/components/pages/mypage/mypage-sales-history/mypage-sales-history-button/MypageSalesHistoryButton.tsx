import React, { useState } from "react";
import * as style from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-button/MypageSalesHistoryButton.style";
import MypageSalesHistorySale from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-sale/MypageSalesHistorySale";
import MypageSalesHistoryTransaction from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-transaction/MypageSalesHistoryTransaction";

type ButtonState = "sale" | "transaction";

export default function MypageSalesHistoryButton() {
  const [activeButton, setActiveButton] = useState<ButtonState>("sale"); // 현재 활성화된 버튼을 추적합니다.

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
      {activeButton === "sale" && <MypageSalesHistorySale />}
      {activeButton === "transaction" && <MypageSalesHistoryTransaction />}
    </style.Div>
  );
}
