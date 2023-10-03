import React from "react";
import { useRecoilState } from "recoil";
import {
  isUnderlinedOrWriteState,
  isDiscolorationAndDamageState,
  isCoverDamagedState,
} from "@/recoil/atoms/CreateUsedBookAtoms";
import * as style from "@/components/pages/selling/sell/sell-book-status-check-list/SellBookStatusCheckList.style";

export default function SellBookStatusCheckList() {
  const [isUnderlinedOrWrite, setIsUnderlinedOrWrite] = useRecoilState(
    isUnderlinedOrWriteState,
  );
  const [isDiscolorationAndDamage, setIsDiscolorationAndDamage] =
    useRecoilState(isDiscolorationAndDamageState);
  const [isCoverDamaged, setIsCoverDamaged] =
    useRecoilState(isCoverDamagedState);

  const toggleCheckbox = (index: number) => {
    switch (index) {
      case 0:
        setIsUnderlinedOrWrite(!isUnderlinedOrWrite);
        break;
      case 1:
        setIsDiscolorationAndDamage(!isDiscolorationAndDamage);
        break;
      case 2:
        setIsCoverDamaged(!isCoverDamaged);
        break;
      default:
        break;
    }
  };

  return (
    <style.Div>
      <style.CheckListA>서적 상태 체크란</style.CheckListA>
      <style.Asterisk>*</style.Asterisk>
      <style.CheckListDivA>
        <style.CheckBoxButtonA onClick={() => toggleCheckbox(0)}>
          {isUnderlinedOrWrite ? <style.CheckedBox /> : <style.UnCheckedBox />}
        </style.CheckBoxButtonA>
        <style.CheckListB>밑줄 및 필기 흔적</style.CheckListB>
      </style.CheckListDivA>
      <style.CheckListDivB>
        <style.CheckBoxButtonA onClick={() => toggleCheckbox(1)}>
          {isDiscolorationAndDamage ? (
            <style.CheckedBox />
          ) : (
            <style.UnCheckedBox />
          )}
        </style.CheckBoxButtonA>
        <style.CheckListC>페이지 변색 및 훼손</style.CheckListC>
      </style.CheckListDivB>
      <style.CheckListDivC>
        <style.CheckBoxButtonA onClick={() => toggleCheckbox(2)}>
          {isCoverDamaged ? <style.CheckedBox /> : <style.UnCheckedBox />}
        </style.CheckBoxButtonA>
        <style.CheckListD>겉표지 훼손</style.CheckListD>
      </style.CheckListDivC>
    </style.Div>
  );
}
