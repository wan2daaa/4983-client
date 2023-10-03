import Link from "next/link";
import React, { useState, useEffect } from "react";
import * as style from "@/components/pages/category/category-layout/CategoryLayout.style";
import CategoryForm from "@/components/pages/category/category-form/CategoryForm";
import { Categories, Category } from "@/data/Categories";

export default function CategoryLayout() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [categoriesState, setCategoriesState] =
    useState<Category[]>(Categories);

  const getAllChildIds = (category: Category): number[] => {
    let childIds: number[] = [];
    const children = category.children as Category[];

    if (children.length === 0) {
      return childIds;
    }

    children.forEach((child: Category) => {
      childIds.push(child.id);
      childIds = childIds.concat(getAllChildIds(child));
    });
    return childIds;
  };

  const toggleCategory = (
    clickedCategory: Category,
    parentCategoryList: Category[],
  ) => {
    const childIds = getAllChildIds(clickedCategory);

    if (selectedCategoryIds.includes(clickedCategory.id)) {
      let tempIds = selectedCategoryIds.filter(
        id => id !== clickedCategory.id && !childIds.includes(id),
      );
      for (let i = 0; i < parentCategoryList.length; i += 1) {
        const parentCategory = parentCategoryList[i];
        // 부모가 체크되어 있고, 자식 체크박스를 풀었을 때 부모 체크 해제, 조부모 체크 해제
        if (parentCategory && selectedCategoryIds.includes(parentCategory.id)) {
          tempIds = tempIds.filter(id => id !== parentCategory.id);
        }
      }
      setSelectedCategoryIds(tempIds.filter(id => !childIds.includes(id)));
    }
    // Ensure the category isn't already in the list before adding it.
    else {
      const tempIds = [...selectedCategoryIds, ...childIds, clickedCategory.id];
      const reversedParents = [...parentCategoryList].reverse();
      reversedParents.forEach(parentCategory => {
        // Get all ids of this parent's children
        const parentChildrenIds = parentCategory?.children.map(item => item.id);

        // Check if every child of this parent is in the list of selected categories.
        const allChildrenChecked = parentChildrenIds.every(id =>
          tempIds.includes(id),
        );
        if (
          allChildrenChecked &&
          parentCategory &&
          parentChildrenIds?.every(item => tempIds.includes(item))
        ) {
          tempIds.push(parentCategory.id);
        }
      });

      setSelectedCategoryIds(tempIds);
      console.log(tempIds);
    }
  };
  const toggleAllCheckboxes = () => {
    const newIsAllChecked = !isAllChecked;

    setIsAllChecked(newIsAllChecked);

    if (newIsAllChecked) {
      // If checking all, add all parent and child ids to the selected list
      const allChildAndParentIds: number[] = [];

      categoriesState.forEach(category => {
        allChildAndParentIds.push(category.id, ...getAllChildIds(category));
      });

      setSelectedCategoryIds(allChildAndParentIds);
    } else {
      // If unchecking all, clear the selected list
      setSelectedCategoryIds([]);
    }
  };
  const renderCategories = (
    categoryList: Category[],
    depth = 0,
    parentCategory: Category[] = [],
  ) =>
    categoryList.map(category => (
      <React.Fragment key={category.id}>
        <CategoryForm
          depth={depth}
          category={category}
          handleClick={clickedCategory =>
            toggleCategory(clickedCategory, parentCategory)
          }
          selectedCategoryIds={selectedCategoryIds}
          parentCategoryList={parentCategory}
        />
        {category.children.length > 0 &&
          renderCategories(category.children, depth + 1, [
            ...parentCategory,
            category,
          ])}
      </React.Fragment>
    ));

  return (
    <style.Div>
      <style.TopDiv>
        <style.TitleDiv>
          <Link href="/">
            <style.CancelButtonDiv>
              <style.CancelButton />
            </style.CancelButtonDiv>
          </Link>
          <style.TitleA>관심 카테고리 설정</style.TitleA>
        </style.TitleDiv>
        <style.AllDiv>
          <style.AllButton
            onClick={toggleAllCheckboxes}
            disabled={isAllChecked}
          />
          {isAllChecked ? <style.CheckedBox /> : <style.UnCheckedBox />}
          <style.AllA>전체선택</style.AllA>
          <style.AllB
            style={{ cursor: isAllChecked ? "pointer" : "not-allowed" }}
            onClick={isAllChecked ? toggleAllCheckboxes : undefined}
          >
            전체선택 취소
          </style.AllB>
        </style.AllDiv>
      </style.TopDiv>
      {renderCategories(categoriesState, 0, [])}
    </style.Div>
  );
}
