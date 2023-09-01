import React, { useState } from "react";
import * as style from "@/components/pages/main/main-filter-button/MainFilterButton.style";

type FilterButtonType = {
  key: number;
  filter: string;
};

export default function FilterButtons() {
  const [selectedFilter, setSelectedFilter] = useState("전체");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filterOptions: FilterButtonType[] = [
    { key: 0, filter: "경영경제대학" },
    { key: 1, filter: "경영학과" },
  ];

  return (
    <style.filterDiv>
      {selectedFilter === "전체" ? (
        <style.FilterButtonClicked onClick={() => handleFilterClick("전체")}>
          전체
        </style.FilterButtonClicked>
      ) : (
        <style.FilterButton onClick={() => handleFilterClick("전체")}>
          전체
        </style.FilterButton>
      )}

      {filterOptions.map(({ key, filter }) => (
        <div key={key}>
          {selectedFilter === filter ? (
            <style.FilterButtonClicked
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </style.FilterButtonClicked>
          ) : (
            <style.FilterButton
              onClick={() => handleFilterClick(filter)}
              // selected={selectedFilter === filter}
              // style 파일에 selected
              // background-color: ${(props) => (props.selected ? "blue" : "white")};
              //   color: ${(props) => (props.selected ? "white" : "black")};
              // 추후 로직 구현때 수정...
            >
              {filter}
            </style.FilterButton>
          )}
        </div>
      ))}
    </style.filterDiv>
  );
}
