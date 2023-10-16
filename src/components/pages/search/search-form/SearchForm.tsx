import React from "react";
import * as style from "@/components/pages/search/search-form/SearchForm.style";
import MainContents from "@/components/pages/main/main-contents/MainContents";
import MainCheckBox from "@/components/pages/main/main-check-box/MainCheckBox";

interface SearchFormProps {
  isSearched: boolean;
  searchQuery: string;
}

const SearchForm = ({
  isSearched,
  usedBookList,
  searchHistory,
  isChecked,
  setIsChecked,
  setInputText,
  setIsSearched,
}: {
  isSearched: boolean;
  usedBookList: {
    usedBookId: number;
    imageUrl: string;
    bookStatus: string;
    name: string;
    tradeAvailableDatetime: string;
    createdAt: string;
    price: number;
  }[];
  searchHistory: { keyword: string; timestamp: number }[];
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <style.SearchFormBox>
    {isSearched ? (
      <>
        <style.FastTradeContainer>
          <MainCheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
          <style.FastTradeText>빠른 거래 날짜순으로 보기</style.FastTradeText>
        </style.FastTradeContainer>
        <style.ContentDiv>
          {usedBookList.map((book, index) => (
            <MainContents key={index.toString()} book={book} />
          ))}
        </style.ContentDiv>
      </>
    ) : (
      <>
        <style.RecentSearchDiv>
          <style.RecentSearchSpan>최근검색어</style.RecentSearchSpan>
        </style.RecentSearchDiv>
        <style.RecentSearchContainer>
          {searchHistory.map(item => (
            <style.RecentDiv
              key={`${item.keyword}-${item.timestamp}`}
              onClick={() => {
                setInputText(item.keyword);
                setIsSearched(true);
              }}
            >
              <style.RecentB>{item.keyword}</style.RecentB>
            </style.RecentDiv>
          ))}
        </style.RecentSearchContainer>
      </>
    )}
  </style.SearchFormBox>
);
export default SearchForm;
