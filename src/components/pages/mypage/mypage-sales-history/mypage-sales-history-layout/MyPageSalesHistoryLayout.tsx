import React, { useEffect, useState } from "react";
import * as style from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-layout/MypageSalesHistoryLayout.style";
import MyPageSalesHistoryButton from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-button/MyPageSalesHistoryButton";
import {
  getPurchaseUsedBookList,
  getSalesUsedBookList,
} from "@/apis/mypage/PurchaseSellUsedBookList";
import MainContents from "@/components/pages/main/main-contents/MainContents";
import MyPageSalesHistorySale from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-sale/MyPageSalesHistorySale";
import MyPageSalesHistoryTransaction from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-transaction/MypageSalesHistoryTransaction";
import MypagePurchaseNothing from "@/components/pages/mypage/mypage-purchase-history/mypage-purchase-nothing/MypagePurchaseNothing";

type ButtonState = "sale" | "transaction";

interface Book {
  imageUrl: string;
  bookStatus: string;
  name: string;
  tradeAvailableDatetime: string;
  createdAt: string;
  price: number;
  usedBookId: number;
}

const MyPageSalesHistoryLayout = () => {
  const [activeButton, setActiveButton] = useState<ButtonState>("sale");
  const [usedBooks, setUsedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSalesUsedBookList(activeButton === "sale");
        setUsedBooks(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [activeButton]);

  return (
    <style.Div>
      <style.TitleDiv>
        <style.BackLink href="/mypage">
          <style.TitleBackButton />
        </style.BackLink>
        <style.Title>판매 내역</style.Title>
      </style.TitleDiv>
      <MyPageSalesHistoryButton
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <style.ContentDiv>
        {usedBooks.map((book, index) => (
          <MainContents key={index.toString()} book={book} />
        ))}
      </style.ContentDiv>

      {usedBooks.length === 0 && activeButton === "sale" && (
        <MypagePurchaseNothing />
      )}
      {usedBooks.length === 0 && activeButton === "transaction" && (
        <MypagePurchaseNothing />
      )}
    </style.Div>
  );
};
export default MyPageSalesHistoryLayout;
