import Link from "next/link";
import React, { useState } from "react";
import * as style from "@/components/pages/search/search-layout/SearchLayout.style";
import SearchForm from "@/components/pages/search/search-form/SearchForm";

export default function SearchLayout() {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchText(inputText);
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
            onChange={handleInputChange} // 입력값을 value로 설정
            placeholder="찾고자 하는 책을 입력해주세요."
          />
        </style.searchDiv>
        <style.SearchButtonDiv onClick={handleSearchClick}>
          <style.SearchButton />
        </style.SearchButtonDiv>
      </style.TopDiv>
      <SearchForm searchQuery={searchText} />
    </style.Div>
  );
}
