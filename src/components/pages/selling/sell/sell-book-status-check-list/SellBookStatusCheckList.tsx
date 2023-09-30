// import Link from "next/link";
// import React, { useState } from "react";
// import * as style from "@/components/pages/selling/sell/sell-book-status-check-list/SellBookStatusCheckList.style";
// // import { usebookcontext } from "@/hooks/use-book-context";
//
// export default function SellBookStatusCheckList() {
//   const [checkboxStates, setCheckboxStates] = useState([false, false, false]);
//   // const {
//   //   isUnderlinedOrWrite,
//   //   setIsUnderlinedOrWrite,
//   //   isDiscolorationAndDamage,
//   //   setIsDiscolorationAndDamage,
//   //   isCoverDamaged,
//   //   setIsCoverDamaged,
//   // } = useContext(usebookcontext);
//   const toggleCheckbox = (index: number) => {
//     const newCheckboxStates = [...checkboxStates];
//     newCheckboxStates[index] = !newCheckboxStates[index];
//     setCheckboxStates(newCheckboxStates);
//   };
//   return (
//     <style.Div>
//       <style.CheckListA>서적 상태 체크란</style.CheckListA>
//       <style.CheckListDivA>
//         <style.CheckBoxButtonA
//           onClick={() => setIsUnderlinedOrWrite(!isUnderlinedOrWrite)}
//         >
//           {isUnderlinedOrWrite ? <style.CheckedBox /> : <style.UnCheckedBox />}
//         </style.CheckBoxButtonA>
//         <style.CheckListB>밑줄 및 필기 흔적</style.CheckListB>
//       </style.CheckListDivA>
//       <style.CheckListDivB>
//         <style.CheckBoxButtonA
//           onClick={() => setIsDiscolorationAndDamage(!isDiscolorationAndDamage)}
//         >
//           {isDiscolorationAndDamage ? (
//             <style.CheckedBox />
//           ) : (
//             <style.UnCheckedBox />
//           )}
//         </style.CheckBoxButtonA>
//         <style.CheckListC>페이지 변색 및 훼손</style.CheckListC>
//       </style.CheckListDivB>
//       <style.CheckListDivC>
//         <style.CheckBoxButtonA
//           onClick={() => setIsCoverDamaged(!isCoverDamaged)}
//         >
//           {isCoverDamaged ? <style.CheckedBox /> : <style.UnCheckedBox />}
//         </style.CheckBoxButtonA>
//         <style.CheckListD>겉표지 훼손</style.CheckListD>
//       </style.CheckListDivC>
//     </style.Div>
//   );
// }
