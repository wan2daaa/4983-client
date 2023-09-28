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
  const isChecked = selectedCategoryIds.includes(category.id);
  const isParentCategory = depth === 0;
  const hasChildren = category.children.length > 0;

  return (
    <style.ContentDiv>
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
          {isParentCategory && (
            <style.CollegeName> {category.name}</style.CollegeName>
          )}
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
      {hasChildren &&
        isExpanded &&
        category.children.map((child, index) => {
          const childIsChecked = selectedCategoryIds.includes(child.id);
          return (
            <style.DepartmentsBox key={child.id}>
              <style.CheckBoxDepartmentsLabel>
                <style.DepartmentsCheckBoxDiv>
                  <style.DepartmentsCheckBoxButton
                    type="checkbox"
                    checked={childIsChecked}
                    onChange={() =>
                      handleClick(
                        child,
                        [...parentCategoryList, category],
                        !childIsChecked,
                      )
                    }
                  />
                  {childIsChecked ? (
                    <style.CheckedBox />
                  ) : (
                    <style.UnCheckedBox />
                  )}
                </style.DepartmentsCheckBoxDiv>
              </style.CheckBoxDepartmentsLabel>
              <style.DepartmentsDiv>
                <style.DepartmentsName key={child.name}>
                  {child.name}
                </style.DepartmentsName>
              </style.DepartmentsDiv>
            </style.DepartmentsBox>
          );
        })}
    </style.ContentDiv>
  );
}
