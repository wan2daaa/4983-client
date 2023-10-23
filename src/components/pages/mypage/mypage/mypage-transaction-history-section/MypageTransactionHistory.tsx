import Link from "next/link";
import React from "react";
import * as style from "@/components/pages/mypage/mypage/mypage-transaction-history-section/MypageTransactionHistory.style";

export default function MypageTransactionHistory() {
  return (
    <style.Div>
      <style.Title>나의 거래</style.Title>
      <style.TransactionHistoryArea>
        <Link href="/sales-history">
          <style.SalesHistoryButtonDiv>
            <style.SalesHistoryButton
              src="/assets/image/mypage/Sell.svg"
              width={3}
              height={3}
              alt="Finish-Page"
            />
            <style.SalesHistoryTag>판매 내역</style.SalesHistoryTag>
          </style.SalesHistoryButtonDiv>
        </Link>
        <Link href="/purchase-history">
          <style.PurchaseHistoryButtonDiv>
            <style.PurchaseHistoryButton
              src="/assets/image/mypage/Buy.svg"
              width={3}
              height={3}
              alt="Finish-Page"
            />
            <style.PurchaseHistoryTag>구매 내역</style.PurchaseHistoryTag>
          </style.PurchaseHistoryButtonDiv>
        </Link>
      </style.TransactionHistoryArea>
    </style.Div>
  );
}
