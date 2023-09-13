import Link from "next/link";
import * as style from "@/components/pages/main/main-layout/MainLayout.style";
import BottomBar from "@/components/common/bottom-bar/BottomBar";
import MainCheckBox from "@/components/pages/main/main-check-box/MainCheckBox";
import FilterButtons from "@/components/pages/main/main-filter-button/MainFilterButton";
import MainContents from "@/components/pages/main/main-contents/MainContents";
import MainSellButton from "@/components/pages/main/main-sell-button/MainSellButton";
import { TopDiv } from "@/components/pages/main/main-layout/MainLayout.style";

interface Iprops {
  book: {
    image: string;
    name: string;
    price: number;
    availableDate: number;
    postedTime: number;
    isStatus: number;
  };
}
export default function MainLayout() {
  return (
    <style.Div>
      <style.TopDiv>
        <style.TitleDiv>
          <style.TitleA>중고 서적 거래</style.TitleA>
          <Link href="/">
            <style.MainTopSearchButton />
          </Link>
        </style.TitleDiv>
        <style.CategoryDiv>
          <Link href="/category">
            <style.CategoryButton />
          </Link>
          <FilterButtons />
        </style.CategoryDiv>
        <style.MiddleDiv>
          <MainCheckBox />
          <style.MiddleA>구매 가능한 서적 보기</style.MiddleA>
        </style.MiddleDiv>
      </style.TopDiv>
      <MainContents />
      <MainContents />
      <MainContents />
      <MainContents />
      <MainContents />
      <MainContents />
      <MainContents />
      <MainContents />
      <MainContents />
      <MainContents />
      <MainContents />
      <MainContents />
      <MainSellButton />
      <BottomBar />
    </style.Div>
  );
}
