import React from "react";
import * as style from "@/components/pages/search/search-form/SearchForm.style";

interface SearchFormProps {
  searchQuery: string;
}
export default function SearchForm({ searchQuery }: SearchFormProps) {
  const handleSearchClick = () => {
    // 검색어를 로컬 스토리지에 추가
    const searchHistory = JSON.parse(
      localStorage.getItem("searchHistory") ?? "[]",
    );
    searchHistory.push(searchQuery);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    // 여기서 필요한 다른 동작 수행 (예: 검색 결과 표시 등)
  };
  return (
    <style.RecentBox>
      <style.RecentSearchDiv>
        <style.RecentA>최근검색어</style.RecentA>
      </style.RecentSearchDiv>
      <style.RecentDiv onClick={handleSearchClick}>
        <style.RecentB>{searchQuery}</style.RecentB>
      </style.RecentDiv>
    </style.RecentBox>
  );
}
