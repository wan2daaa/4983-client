import React, { useEffect, useState } from "react";
import * as style from "@/components/pages/category/category-form/CategoryForm.style";
import { Category } from "@/data/Categories";

type Props = {
  category: Category;
  depth: number;
  handleClick: (
    category: Category,
    parentCategoryList: Category[],
    isCheckedA: boolean,
  ) => void;
  selectedCategoryIds: number[];
  parentCategoryList: Category[];
};

export default function CategoryForm({
  category,
  depth,
  handleClick,
  selectedCategoryIds,
  parentCategoryList,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const hasChildren = category.children.length > 0;
  const isParentCategory = depth === 0;
  const isChecked = selectedCategoryIds.includes(category.id);
  return (
    <style.ContentDiv depth={depth}>
      <style.TitleBox>
        <style.CheckBoxLabel>
          <style.CheckBoxDiv>
            <style.CheckBoxButton
              type="checkbox"
              checked={isChecked}
              onChange={() =>
                handleClick(category, parentCategoryList, !isChecked)
              }
            />
            {isChecked ? <style.CheckedBox /> : <style.UnCheckedBox />}
          </style.CheckBoxDiv>
        </style.CheckBoxLabel>
        <style.CollegeDiv>
          <style.CollegeName> {category.name}</style.CollegeName>
          {hasChildren && (
            <style.ExpandButtonDiv>
              <style.ExpandButton
                onClick={toggleExpansion}
                isExpanded={isExpanded}
              />
            </style.ExpandButtonDiv>
          )}
        </style.CollegeDiv>
      </style.TitleBox>
    </style.ContentDiv>
  );
}
