import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as style from "@/components/pages/search/search-layout/SearchLayout.style";
import SearchForm from "@/components/pages/search/search-form/SearchForm";
import { searchUsedBookList } from "@/apis/main/booklist/Booklist";

export default function SearchLayout() {
  const [inputText, setInputText] = useState("");
  const [isSearched, setIsSearched] = useState(false); // 검색 상태
  const [searchHistory, setSearchHistory] = useState<
    { query: string; timestamp: number }[]
  >([]);
  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("searchHistory") ?? "[]",
    );
    setSearchHistory(storedHistory);
  }, []);

  const handleSearch = async () => {
    setIsSearched(true);
    try {
      const data = await searchUsedBookList(false, inputText);
      console.log(data);

      const isDuplicateQuery = searchHistory.some(
        item => item.query === inputText,
      );

      if (!isDuplicateQuery) {
        const updatedSearchHistory = [
          { query: inputText, timestamp: Date.now() },
          ...searchHistory,
        ];

        if (updatedSearchHistory.length > 10) {
          updatedSearchHistory.pop();
        }

        localStorage.setItem(
          "searchHistory",
          JSON.stringify(updatedSearchHistory),
        );

        setSearchHistory(updatedSearchHistory);
      }
      console.log("검색 기록:", searchHistory);
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <style.Div>
      <style.TopDiv>
        <Link href="/">
          <style.BackBox>
            <style.BackButtonDiv />
          </style.BackBox>
        </Link>
        <style.searchDiv>
          <style.searchA
            type="text"
            color="var(--b-50, #d1d1d1)"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="찾고자 하는 책을 입력해주세요."
          />
        </style.searchDiv>
        <style.SearchButtonDiv onClick={handleSearch}>
          <style.SearchButton />
        </style.SearchButtonDiv>
      </style.TopDiv>
      <SearchForm
        isSearched={isSearched}
        searchQuery={inputText}
        searchHistory={searchHistory}
      />
    </style.Div>
  );
}
