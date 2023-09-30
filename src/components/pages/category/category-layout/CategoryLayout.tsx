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
  // 첫 번째 useEffect: selectedCategoryIds 변화 감지
  useEffect(() => {
    // Create a copy of the selected categories array
    let updatedSelectedCategoryIds = [...selectedCategoryIds];

    // Iterate over each category in the state
    categoriesState.forEach(category => {
      const parentChildrenIds = category.children.map(child => child.id);

      // Check if every child of this parent is in the list of selected categories.
      const allChildrenChecked = parentChildrenIds.every(id =>
        updatedSelectedCategoryIds.includes(id),
      );

      // If they are and the parent isn't in the list yet, add it.
      if (
        allChildrenChecked &&
        !updatedSelectedCategoryIds.includes(category.id) &&
        parentChildrenIds.length > 0
      ) {
        updatedSelectedCategoryIds.push(category.id);
      }

      // If not all children are checked and the parent is in the list, remove it.
      if (
        !allChildrenChecked &&
        updatedSelectedCategoryIds.includes(category.id)
      ) {
        updatedSelectedCategoryIds = updatedSelectedCategoryIds.filter(
          id => id !== category.id,
        );
      }
    });

    setSelectedCategoryIds(updatedSelectedCategoryIds);
  }, [selectedCategoryIds, categoriesState]);

  // 두 번째 useEffect: categoriesState 변화 감지
  useEffect(() => {
    const newUpdatedCategoriesState = categoriesState.map(category => {
      const parentChildrenIDs = category.children.map(child => child.id);

      const allChildsAreChecked = selectedCategoryIds.every(id =>
        parentChildrenIDs.includes(id),
      );

      return {
        ...category,
        isChecked: allChildsAreChecked ? true : category.isChecked,
      };
    });

    setCategoriesState(newUpdatedCategoriesState);
  }, [categoriesState, selectedCategoryIds]);

  const toggleCategory = (
    clickedCategory: Category,
    parentCategoryList: Category[],
  ) => {
    const childIds = getAllChildIds(clickedCategory);

    if (selectedCategoryIds.includes(clickedCategory.id)) {
      let updatedSelectedCategoryIds = selectedCategoryIds.filter(
        id => id !== clickedCategory.id && !childIds.includes(id),
      );
      parentCategoryList.forEach(parentCategory => {
        // If the parent is checked and a child checkbox is unchecked, uncheck the parent and grandparent
        if (parentCategory && selectedCategoryIds.includes(parentCategory.id)) {
          updatedSelectedCategoryIds = updatedSelectedCategoryIds.filter(
            id => id !== parentCategory.id,
          );
        }
      });
      setSelectedCategoryIds(
        updatedSelectedCategoryIds.filter(id => !childIds.includes(id)),
      );
    }
    // Ensure the category isn't already in the list before adding it.
    else {
      const tempSelectedIDs = [
        ...selectedCategoryIds,
        ...childIds,
        clickedCategory.id,
      ];
      const reversedParents = [...parentCategoryList].reverse();
      reversedParents.forEach(parent => {
        // Get all ids of this parent's children
        const parentChildrenIds = parent?.children.map(child => child.id);

        // Check if every child of this parent is in the list of selected categories.
        const allChildrenChecked = parentChildrenIds.every(id =>
          tempSelectedIDs.includes(id),
        );
        if (
          allChildrenChecked &&
          parent &&
          parentChildrenIds?.every(child => tempSelectedIDs.includes(child))
        ) {
          tempSelectedIDs.push(parent.id);
        }
      });

      setSelectedCategoryIds(tempSelectedIDs);
      console.log(tempSelectedIDs);
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
        {depth === 0 && (
          <CategoryForm
            depth={depth}
            category={category}
            handleClick={clickedCategory =>
              toggleCategory(clickedCategory, parentCategory)
            }
            selectedCategoryIds={selectedCategoryIds}
            parentCategoryList={parentCategory}
          />
        )}
        {depth === 0 &&
          category.children.length > 0 &&
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
