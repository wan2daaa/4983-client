import Link from "next/link";
import React, { useState } from "react";
import * as style from "@/components/pages/category/category-layout/CategoryLayout.style";
import CategoryForm from "@/components/pages/category/category-form/CategoryForm";

export default function CategoryLayout() {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toggleAllCheckboxes = () => {
    setIsAllChecked(!isAllChecked);
  };

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
          <style.AllButton onClick={toggleAllCheckboxes}>
            {isAllChecked ? <style.CheckedBox /> : <style.UnCheckedBox />}
          </style.AllButton>
          <style.AllA>전체선택</style.AllA>
          <style.AllB>전체선택 취소</style.AllB>
        </style.AllDiv>
      </style.TopDiv>
      <CategoryForm />
      {/* <CategoryList /> */}
    </style.Div>
  );
}
