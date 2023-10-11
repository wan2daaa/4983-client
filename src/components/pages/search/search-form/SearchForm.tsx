import React from "react";
import * as style from "@/components/pages/search/search-form/SearchForm.style";

interface SearchFormProps {
  isSearched: boolean;
  searchQuery: string;
}
export default function SearchForm({
  isSearched,
  searchQuery,
  searchHistory,
}: {
  isSearched: boolean;
  searchQuery: string;
  searchHistory: { query: string; timestamp: number }[];
}) {
  return (
    <style.RecentBox>
      {isSearched ? (
        <>
          <style.MiddleDiv>
            {/* <MainCheckBox /> */}
            <style.MiddleA>빠른 거래 날짜순으로 보기</style.MiddleA>
          </style.MiddleDiv>
          <style.ContentDiv>
            {/* {usedBooks.map((book, index) => ( */}
            {/*  <MainContents key={index.toString()} book={book} /> */}
            {/* ))} */}
          </style.ContentDiv>
        </>
      ) : (
        <style.Div>
          <style.RecentSearchDiv>
            <style.RecentA>최근검색어</style.RecentA>
          </style.RecentSearchDiv>
          {searchHistory.map(item => (
            <style.RecentDiv key={`${item.query}-${item.timestamp}`}>
              <style.RecentB>{item.query}</style.RecentB>
            </style.RecentDiv>
          ))}
        </style.Div>
      )}
    </style.RecentBox>
  );
}
