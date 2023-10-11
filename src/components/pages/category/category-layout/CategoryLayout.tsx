import React, { useState } from "react";
import Link from "next/link";
import * as style from "@/components/pages/category/category-layout/CategoryLayout.style";
import CategoryForm from "@/components/pages/category/category-form/CategoryForm";
import { Categories, Category } from "@/data/Categories";

const CategoryLayout = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [categoriesState, _] = useState<Category[]>(Categories);
  const [isExpandCategoryIds, setIsExpandCategoryIds] = useState<number[]>([]);

  let childIds: number[] = [];

  const getAllChildIds = (category: Category): number[] => {
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
    // 자식들의 id를 가져온다.
    childIds = getAllChildIds(clickedCategory);

    if (selectedCategoryIds.includes(clickedCategory.id)) {
      let tempIds = selectedCategoryIds.filter(
        id => id !== clickedCategory.id && !childIds.includes(id),
      );
      for (let i = 0; i < parentCategoryList.length; i += 1) {
        const parentCategory = parentCategoryList[i];
        if (parentCategory && selectedCategoryIds.includes(parentCategory.id)) {
          tempIds = tempIds.filter(id => id !== parentCategory.id);
        }
      }
      tempIds = tempIds.filter(id => !childIds.includes(id));
      setSelectedCategoryIds(tempIds);

      const collegeList: number[] = [];
      const departmentList: number[] = [];
      tempIds.forEach(tempId =>
        tempId <= 9 ? collegeList.push(tempId) : departmentList.push(tempId),
      );
      localStorage.setItem("category-college", JSON.stringify(collegeList));
      localStorage.setItem("category-department", JSON.stringify(departmentList));
    } else {
      let tempIds = [...selectedCategoryIds, ...childIds, clickedCategory.id];
      const reversedParents = [...parentCategoryList].reverse();
      reversedParents.forEach(parentCategory => {
        const parentChildrenIds = parentCategory?.children.map(item => item.id);
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
      // 중복제거
      tempIds = tempIds.filter(
        (value, index, self) => self.indexOf(value) === index,
      );
      setSelectedCategoryIds(tempIds);

      const collegeList: number[] = [];
      const departmentList: number[] = [];
      tempIds.forEach(tempId =>
        tempId <= 9 ? collegeList.push(tempId) : departmentList.push(tempId),
      );
      localStorage.setItem("category-college", JSON.stringify(collegeList));
      localStorage.setItem("category-department", JSON.stringify(departmentList));
    }
  };
  const toggleAllCheckboxes = () => {
    const allChildAndParentIds: number[] = [];
    const collegeList: number[] = [];
    setIsAllChecked(!isAllChecked);
    setSelectedCategoryIds([]);

    if (!isAllChecked) {
      categoriesState.forEach(category => {
        collegeList.push(category.id);

        allChildAndParentIds.push(category.id);
        category.children.forEach(children => {
          allChildAndParentIds.push(children.id);
        });
      });
      setSelectedCategoryIds(allChildAndParentIds);

      localStorage.setItem("category-department", "");
      localStorage.setItem("category-college", JSON.stringify(collegeList));
    }
  };

  const unableAllCheckBoxes = () => {
    setIsAllChecked(false);

    setSelectedCategoryIds([]);
    localStorage.setItem("category-department", "");
    localStorage.setItem("category-college", "");
  };

  const renderCategories = (
    categoryList: Category[],
    depth = 0,
    parentCategory: Category[] = [],
    isExpandedCategoryIds: number[] = [],
  ) =>
    categoryList.map(category => (
      <React.Fragment key={category.id}>
        <CategoryForm
          id={category.id}
          depth={depth}
          category={category}
          handleClick={clickedCategory =>
            toggleCategory(clickedCategory, parentCategory)
          }
          selectedCategoryIds={selectedCategoryIds} // selectedCategoryIds가 어디에서 온 것인지 확인해야 합니다.
          parentCategoryList={parentCategory}
          isExpandedCategoryIds={isExpandedCategoryIds} // 변수 이름 오타 수정
          setIsExpandCategoryIds={setIsExpandCategoryIds} // 변수 이름 오타 수정
        />
        {category.children.length > 0 &&
          !isExpandedCategoryIds.includes(category.id) &&
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
          <style.AllButton onClick={toggleAllCheckboxes} />
          {isAllChecked ? <style.CheckedBox /> : <style.UnCheckedBox />}
          <style.AllA>전체선택</style.AllA>
          <style.AllB onClick={unableAllCheckBoxes}>전체선택 취소</style.AllB>
        </style.AllDiv>
      </style.TopDiv>
      {renderCategories(categoriesState, 0, [], isExpandCategoryIds)}
    </style.Div>
  );
};
export default CategoryLayout;
