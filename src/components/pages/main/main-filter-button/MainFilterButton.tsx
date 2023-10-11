import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import * as style from "@/components/pages/main/main-filter-button/MainFilterButton.style";
import { Categories } from "@/data/Categories";
import category from "@/pages/category";

type FilterButtonType = {
  key: number;
  filter: string;
  param: string;
};

const MainFilterButton = ({
  filterOptions,
  setParamCollege,
  setParamDepartment,
}: {
  filterOptions: FilterButtonType[];
  setParamCollege: Dispatch<SetStateAction<string>>;
  setParamDepartment: Dispatch<SetStateAction<string>>;
}) => {
  const [selectedFilter, setSelectedFilter] = useState("전체");

  const handleFilterClick = (
    selectedFilterName: string,
    param: string,
    id: number,
  ) => {
    setSelectedFilter(selectedFilterName);

    if (id < 10) {
      const foundCategory = Categories.find(
        parentCategory => parentCategory.id === id,
      );
      setParamCollege(foundCategory ? foundCategory.value || "" : "");
      setParamDepartment("");
    } else {
      const foundChildCategory = Categories.flatMap(parentCategory =>
        parentCategory.children.filter(
          categoryChildren => categoryChildren.id === id,
        ),
      );

      const paramDepartmentValue =
        foundChildCategory.length > 0 ? foundChildCategory[0].value || "" : "";
      setParamCollege("");
      setParamDepartment(paramDepartmentValue);
    }
  };

  return (
    <style.Div>
      <style.CategoryDiv>
        <Link href="/category">
          <style.CategoryButton />
        </Link>
      </style.CategoryDiv>
      <style.filterDiv>
        {selectedFilter === "전체" ? (
          <style.FilterButtonClicked
            onClick={() => handleFilterClick("전체", "", 0)}
          >
            전체
          </style.FilterButtonClicked>
        ) : (
          <style.FilterButton onClick={() => handleFilterClick("전체", "", 0)}>
            전체
          </style.FilterButton>
        )}

        {filterOptions.map(({ key, filter, param }) => (
          <div key={`filter${key}`}>
            {selectedFilter === filter ? (
              <style.FilterButtonClicked
                onClick={() => handleFilterClick(filter, param, key)}
              >
                {filter}
              </style.FilterButtonClicked>
            ) : (
              <style.FilterButton
                onClick={() => handleFilterClick(filter, param, key)}
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
    </style.Div>
  );
};
export default MainFilterButton;
