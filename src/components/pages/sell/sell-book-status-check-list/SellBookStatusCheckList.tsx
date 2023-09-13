import Link from "next/link";
import React, { useState } from "react";
import * as style from "@/components/pages/sell/sell-book-status-check-list/SellBookStatusCheckList.style";

export default function SellBookStatusCheckList() {
  const [checkboxStates, setCheckboxStates] = useState([false, false, false]);

  const toggleCheckbox = (index: number) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };
  return (
    <style.Div>
      <style.CheckListA>서적 상태 체크란</style.CheckListA>
      <style.CheckListDivA>
        <style.CheckBoxButtonA onClick={() => toggleCheckbox(0)}>
          {checkboxStates[0] ? <style.CheckedBox /> : <style.UnCheckedBox />}
        </style.CheckBoxButtonA>
        <style.CheckListB>밑줄 및 필기 흔적</style.CheckListB>
      </style.CheckListDivA>
      <style.CheckListDivB>
        <style.CheckBoxButtonA onClick={() => toggleCheckbox(1)}>
          {checkboxStates[1] ? <style.CheckedBox /> : <style.UnCheckedBox />}
        </style.CheckBoxButtonA>
        <style.CheckListC>페이지 변색 및 훼손</style.CheckListC>
      </style.CheckListDivB>
      <style.CheckListDivC>
        <style.CheckBoxButtonA onClick={() => toggleCheckbox(2)}>
          {checkboxStates[2] ? <style.CheckedBox /> : <style.UnCheckedBox />}
        </style.CheckBoxButtonA>
        <style.CheckListD>겉표지 훼손</style.CheckListD>
      </style.CheckListDivC>
    </style.Div>
  );
}
