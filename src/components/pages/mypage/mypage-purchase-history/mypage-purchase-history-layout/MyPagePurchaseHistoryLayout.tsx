import { useEffect, useState } from "react";
import * as style from "@/components/pages/mypage/mypage-purchase-history/mypage-purchase-history-layout/MypagePurchaseHistoryLayout.style";
import MyPagePurchaseNothing from "@/components/pages/mypage/mypage-purchase-history/mypage-purchase-nothing/MypagePurchaseNothing";
import { getPurchaseUsedBookList } from "@/apis/mypage/PurchaseSellUsedBookList";
import MainContents from "@/components/pages/main/main-contents/MainContents";

interface Book {
  imageUrl: string;
  bookStatus: string;
  name: string;
  tradeAvailableDatetime: string;
  createdAt: string;
  price: number;
  usedBookId: number;
}

const MyPagePurchaseHistoryLayout = () => {
  const [usedBooks, setUsedBooks] = useState<Book[]>([]);

  const books = {
    imageUrl: "imageUrl",
    bookStatus: "SALE",
    name: "name",
    tradeAvailableDatetime: "2020-12-30 12:30:30",
    createdAt: "2020-12-30 12:30:30",
    price: 10000,
    usedBookId: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPurchaseUsedBookList();

        setUsedBooks(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <style.Div>
      <style.TitleDiv>
        <style.BackLink href="mypage">
          <style.TitleBackButton />
        </style.BackLink>
        <style.Title>구매 내역</style.Title>
      </style.TitleDiv>
      <style.ContentDiv>
        {usedBooks.map((book, index) => (
          <MainContents key={index.toString()} book={book} />
        ))}
      </style.ContentDiv>
      {usedBooks.length === 0 ? <MyPagePurchaseNothing /> : ""}
    </style.Div>
  );
};
export default MyPagePurchaseHistoryLayout;
