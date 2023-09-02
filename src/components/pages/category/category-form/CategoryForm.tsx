import React, { useState } from "react";
import * as style from "@/components/pages/category/category-form/CategoryForm.style";
import CategoryFormDepartment from "@/components/pages/category/category-form-department/CategoryFormDepartment";

interface Category {
  title: string;
  departments: string[];
}

const categories: Category[] = [
  {
    title: "문과대학",
    departments: ["국어국문학과", "사학과", "철학과", "영미인문학과"],
  },
  {
    title: "법과대학",
    departments: ["법학과"],
  },
  {
    title: "사회과학대학",
    departments: [
      "정치외교학과",
      "행정학과",
      "도시계획부동산학부",
      "커뮤니케이션학부",
      "상담학과",
    ],
  },
  {
    title: "경영경제대학",
    departments: [
      "경제학과",
      "무역학과",
      "경영학부",
      "산업경영학과(야)",
      "국제학부",
    ],
  },
  {
    title: "공과대학",
    departments: [
      "전자전기공학부",
      "토목환경공학과",
      "기계공학과",
      "화학공학과",
      "건축학부",
    ],
  },
  {
    title: "SW 융합대학",
    departments: [
      "소프트웨어학과",
      "컴퓨터공학과",
      "모바일시스템공학과",
      "정보통계학과",
      "산업보안학과",
      "SW융합학부",
    ],
  },
  {
    title: "사범대학",
    departments: [
      "한문교육과",
      "특수교육과",
      "수학교육과",
      "과학교육과",
      "체육교육과",
      "교직교육과",
    ],
  },
  {
    title: "음악 예술 대학",
    departments: [
      "도예과",
      "디자인학부",
      "공연영화학부",
      "공연영화학부",
      "무용과",
      "음악학부",
    ],
  },
];

// interface CategoryFormProps {
//   isAllChecked: boolean;
// }
// { category }: { category: Category }
export default function CategoryForm() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <style.ContentDiv>
      <style.TitleBox>
        <style.CheckBoxDiv>
          <style.CheckBoxButton onClick={toggleCheckBox}>
            {isChecked ? <style.CheckedBox /> : <style.UnCheckedBox />}
          </style.CheckBoxButton>
        </style.CheckBoxDiv>
        <style.CollegeDiv>
          <style.CollegeName>
            경영경제대학 {/* {category.title} */}
          </style.CollegeName>
          <style.ExpandButtonDiv>
            <style.ExpandButton
              onClick={toggleExpansion}
              isExpanded={isExpanded}
            />
          </style.ExpandButtonDiv>
        </style.CollegeDiv>
      </style.TitleBox>
      <CategoryFormDepartment />
      <CategoryFormDepartment />
      <CategoryFormDepartment />
      <CategoryFormDepartment />
    </style.ContentDiv>
  );

  // {isExpanded && (
  //     <ul>
  //       {category.departments.map((department, index) => (
  //           <li key={department}>{department}</li>
  //       ))}
  //     </ul>
  // )}

  //   categories.map((category, index) => (
  //     <>
  //       <span>{category.title}</span>
  //       {category.departments.map((department, index2) => ({ department }))}
  //     </>
  //   ));
  // }
}
// const CategoryList = () => (
//   <div>
//     {categories.map((category, index) => (
//       <CategoryForm key={category.title} category={category} /> // category prop을 전달
//     ))}
//   </div>
// );
