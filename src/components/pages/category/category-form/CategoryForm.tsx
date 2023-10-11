import React, { useState } from "react";
import * as style from "@/components/pages/category/category-form/CategoryForm.style";
import { Category } from "@/data/Categories";

type Props = {
  id: number;
  category: Category;
  depth: number;
  handleClick: (
    category: Category,
    parentCategoryList: Category[],
    isCheckedA: boolean,
  ) => void;
  selectedCategoryIds: number[];
  parentCategoryList: Category[];
  isExpandedCategoryIds: number[];
  setIsExpandCategoryIds: React.Dispatch<React.SetStateAction<number[]>>;
};

const CategoryForm = ({
  id,
  category,
  depth,
  handleClick,
  selectedCategoryIds,
  parentCategoryList,
  isExpandedCategoryIds,
  setIsExpandCategoryIds,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasChildren = category.children.length > 0;
  const isChecked = selectedCategoryIds.includes(category.id);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setIsExpandCategoryIds(
        isExpandedCategoryIds.filter(value => value !== id),
      );
    } else {
      setIsExpandCategoryIds([...isExpandedCategoryIds, id]);
    }
  };

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
              <style.ExpandButton onClick={toggleExpansion} />
            </style.ExpandButtonDiv>
          )}
        </style.CollegeDiv>
      </style.TitleBox>
    </style.ContentDiv>
  );
};
export default CategoryForm;
