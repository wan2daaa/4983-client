import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as style from "@/components/pages/search/search-layout/SearchLayout.style";
import SearchForm from "@/components/pages/search/search-form/SearchForm";
import { searchUsedBookList } from "@/apis/main/booklist/Booklist";

const SearchLayout = () => {
  const [inputText, setInputText] = useState("");
  const [isSearched, setIsSearched] = useState(false); // 검색 상태
  const [isChecked, setIsChecked] = useState(false);

  const [searchHistory, setSearchHistory] = useState<
    { keyword: string; timestamp: number }[]
  >([]);
  const [usedBookList, setUsedBookList] = useState<
    {
      usedBookId: number;
      imageUrl: string;
      bookStatus: string;
      name: string;
      tradeAvailableDatetime: string;
      createdAt: string;
      price: number;
    }[]
  >([]);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("searchHistory") ?? "[]",
    );
    setSearchHistory(storedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = async () => {
    if (inputText === "") {
      return;
    }
    const trimInputText = inputText.trim();
    console.log("trinInputText >>>>>>", trimInputText);

    const data = await searchUsedBookList(isChecked, inputText);

    console.log("data >>>>>>>>", data);

    setUsedBookList(data);

    console.log("usedBOokLuist >>>>>>>>>", usedBookList);

    const temp = [...searchHistory];

    console.log("temp>>>>>>>>>", temp);
    const checkWord = temp.find(eachData => eachData.keyword === trimInputText);
    console.log("checkWord >>>>>>>>>>>", checkWord);

    if (!checkWord) {
      console.log("여기;?");
      const passedWord = {
        keyword: trimInputText,
        timestamp: Date.now(),
      };

      if (temp.length <= 9) {
        setSearchHistory([passedWord, ...searchHistory]);
      } else {
        setSearchHistory([passedWord, ...searchHistory.splice(0, 9)]);
      }
    }
    // 중복 데이터 검색시, 맨 앞으로 이동
    else if (checkWord) {
      console.log("저기?");
      const passedWord = {
        keyword: trimInputText,
        timestamp: Date.now(),
      };
      const filtered = temp.filter(
        eachData => eachData.keyword !== trimInputText,
      );

      if (temp.length <= 9) {
        setSearchHistory([passedWord, ...filtered]);
      } else {
        setSearchHistory([passedWord, ...filtered.splice(0, 9)]);
      }
    }
  };

  useEffect(() => {
    if (isSearched) {
      handleSearch();
    }
  }, [isSearched, isChecked]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsSearched(true);

      handleSearch();
    }
  };

  const onClickIconMakeSearch = () => {
    setIsSearched(true);
    handleSearch();
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
            onClick={() => setIsSearched(false)}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="찾고자 하는 책을 입력해주세요."
          />
        </style.searchDiv>
        <style.SearchButtonDiv onClick={onClickIconMakeSearch}>
          <style.SearchButton />
        </style.SearchButtonDiv>
      </style.TopDiv>
      <SearchForm
        isSearched={isSearched}
        usedBookList={usedBookList}
        searchHistory={searchHistory}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setInputText={setInputText}
        setIsSearched={setIsSearched}
      />
    </style.Div>
  );
};
export default SearchLayout;
