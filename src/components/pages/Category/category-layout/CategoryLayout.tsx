// import React, { useState } from "react";
// import * as style from "@/components/pages/Category/category-layout/CategoryLayout.style";
// import Link from "next/link";
// import {
//   TitleA,
//   titleDiv,
// } from "@/components/pages/Category/category-layout/CategoryLayout.style";
//
// const categories = [
//   {
//     name: "문과대학",
//     subCategories: ["국어국문학과", "사학과", "철학과", "영미인문학과"],
//   },
//   {
//     name: "법과대학",
//     subCategories: ["법학과"],
//   },
//   // ... 다른 카테고리도 추가
// ];
//
// const InterestPage = () => {
//   const [expandedCategoryIndex, setExpandedCategoryIndex] = useState<
//     number | null
//   >(null);
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//
//   const handleCategoryCheckboxChange = (categoryName: string) => {
//     if (selectedCategories.includes(categoryName)) {
//       setSelectedCategories(
//         selectedCategories.filter(category => category !== categoryName),
//       );
//     } else {
//       setSelectedCategories([...selectedCategories, categoryName]);
//     }
//   };
//
//   const handleMoreClick = (index: number) => {
//     setExpandedCategoryIndex(index === expandedCategoryIndex ? null : index);
//   };
//
//   return (
//     <style.Div>
//       <style.TopDiv>
//         <style.titleDiv>
//           <Link href="/">
//             <style.CancelBox>
//               <style.CancelButtonDiv />
//             </style.CancelBox>
//           </Link>
//           <style.TitleA>관심 카테고리 설정</style.TitleA>
//         </style.titleDiv>
//         <style.AllDiv>
//           <style.AllButton />
//           <style.AllDivA>전체선택</style.AllDivA>
//           <style.AllDivB>전체선택 취소</style.AllDivB>
//         </style.AllDiv>
//       </style.TopDiv>
//       {categories.map((category, index) => (
//         <div key={category.name}>
//           <h2>
//             <input
//               type="checkbox"
//               id={`category-${index}`}
//               name={`category-${index}`}
//               checked={selectedCategories.includes(category.name)}
//               onChange={() => handleCategoryCheckboxChange(category.name)}
//             />
//             <label htmlFor={`category-${index}`}>{category.name}</label>
//           </h2>
//           {selectedCategories.includes(category.name) && (
//               {expandedCategoryIndex === index ? (
//                 <>
//                   {category.subCategories.map(subCategory => (
//                     <div key={subCategory}>
//                       <input
//                         type="checkbox"
//                         id={subCategory}
//                         name={subCategory}
//                       />
//                       <label htmlFor={subCategory}>{subCategory}</label>
//                     </div>
//                   ))}
//                   <button onClick={() => handleMoreClick(index)}>접기</button>
//                 </>
//               ) : (
//                 <button onClick={() => handleMoreClick(index)}>더 보기</button>
//               )}
//           )}
//         </div>
//       ))}
//     </style.Div>
//   );
// };
//
// export default InterestPage;
