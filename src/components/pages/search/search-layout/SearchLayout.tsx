import Link from "next/link";
import React, { useState } from "react";
import * as style from "@/components/pages/search/search-layout/SearchLayout.style";
import SearchForm from "@/components/pages/search/search-form/SearchForm";

export default function SearchLayout() {
  const [searchText, setSearchText] = useState(""); // 입력된 검색어

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
            value={searchText} // 입력값을 value로 설정
            placeholder="찾고자 하는 책을 입력해주세요."
          />
        </style.searchDiv>
        <style.SearchButtonDiv>
          <style.SearchButton />
        </style.SearchButtonDiv>
      </style.TopDiv>
      <style.RecentSearchDiv>
        <style.RecentA>최근검색어</style.RecentA>
      </style.RecentSearchDiv>
      <style.RecentBox>
        <SearchForm />
        <SearchForm />
        <SearchForm />
        <SearchForm />
        <SearchForm />
        <SearchForm />
        <SearchForm />
        <SearchForm />
        <SearchForm />
        <SearchForm />
        <SearchForm />
        <SearchForm />
      </style.RecentBox>
    </style.Div>
  );
}
