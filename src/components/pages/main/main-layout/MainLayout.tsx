import Link from "next/link";
import { useEffect, useState } from "react";
import * as style from "@/components/pages/main/main-layout/MainLayout.style";
import BottomBar from "@/components/common/bottom-bar/BottomBar";
import MainCheckBox from "@/components/pages/main/main-check-box/MainCheckBox";
import MainContents from "@/components/pages/main/main-contents/MainContents";
import MainSellButton from "@/components/pages/main/main-sell-button/MainSellButton";
import { fetchUsedBookList } from "@/apis/main/booklist/Booklist";
import MainFilterButton from "@/components/pages/main/main-filter-button/MainFilterButton";

interface Book {
  imageUrl: string;
  bookStatus: string;
  name: string;
  tradeAvailableDatetime: string;
  createdAt: string;
  price: number;
}
export default function MainLayout() {
  const [usedBooks, setUsedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsedBookList(false);

        setUsedBooks(data);
      } catch (error) {
        console.error("Error fetching used book list:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <style.Div>
      <style.TopDiv>
        <style.TitleDiv>
          <style.TitleA>중고 서적 거래</style.TitleA>
          <Link href="/search">
            <style.MainTopSearchButton />
          </Link>
        </style.TitleDiv>
        <MainFilterButton />
        <style.MiddleDiv>
          <MainCheckBox />
          <style.MiddleA>빠른 거래 날짜순으로 보기</style.MiddleA>
        </style.MiddleDiv>
      </style.TopDiv>
      <style.ContentDiv>
        {usedBooks.map((book, index) => (
          <MainContents key={index.toString()} book={book} />
        ))}
      </style.ContentDiv>

      <MainSellButton />
      <BottomBar />
    </style.Div>
  );
}
