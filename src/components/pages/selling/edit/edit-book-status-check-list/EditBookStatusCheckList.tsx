import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import * as style from "@/components/pages/selling/edit/edit-book-status-check-list/EditBookStatusCheckList.style";
import {
  isCoverDamagedState,
  isDiscolorationAndDamageState,
  isUnderlinedOrWriteState,
} from "@/recoil/atoms/CreateUsedBookAtoms";

interface BookEdit {
  college: string;
  department: string;
  sellerUserNickname: string;
  sellerProfileImageUrl: string;
  createdAt: string;
  bookName: string;
  publisher: string;
  tradeAvailableDatetime: string;
  price: number;
  bookStatus: string;
  underlinedOrWrite: boolean;
  discolorationAndDamage: boolean;
  coverDamaged: boolean;
  usedBookId: number;
}

interface BookEditProps {
  underlinedOrWrite: boolean;
  discolorationAndDamage: boolean;
  coverDamaged: boolean;
}

export default function EditBookStatusCheckList({
  underlinedOrWrite,
  discolorationAndDamage,
  coverDamaged,
}: BookEditProps) {
  const [isUnderlinedOrWrite, setIsUnderlinedOrWriteState] = useRecoilState(
    isUnderlinedOrWriteState,
  );
  const [isDiscolorationAndDamage, setIsDiscolorationAndDamageState] =
    useRecoilState(isDiscolorationAndDamageState);
  const [isCoverDamaged, setIsCoverDamagedState] =
    useRecoilState(isCoverDamagedState);

  useEffect(() => {
    setIsUnderlinedOrWriteState(underlinedOrWrite);
    setIsDiscolorationAndDamageState(discolorationAndDamage);
    setIsCoverDamagedState(coverDamaged);
  }, []);

  const toggleIsUnderlinedOrWrite = () => {
    setIsUnderlinedOrWriteState(!isUnderlinedOrWrite);
  };

  const toggleIsDiscolorationAndDamage = () => {
    setIsDiscolorationAndDamageState(!isDiscolorationAndDamage);
  };

  const toggleIsCoverDamaged = () => {
    setIsCoverDamagedState(!isCoverDamaged);
  };

  const toggleCheckbox = () => {};
  return (
    <style.Div>
      <style.CheckListA>서적 상태 체크란</style.CheckListA>
      <style.CheckListDivA onClick={toggleIsUnderlinedOrWrite}>
        <style.CheckBoxButtonA>
          {isUnderlinedOrWrite ? <style.CheckedBox /> : <style.UnCheckedBox />}
        </style.CheckBoxButtonA>
        <style.CheckListB>밑줄 및 필기 흔적</style.CheckListB>
      </style.CheckListDivA>
      <style.CheckListDivB onClick={toggleIsDiscolorationAndDamage}>
        <style.CheckBoxButtonA>
          {isDiscolorationAndDamage ? (
            <style.CheckedBox />
          ) : (
            <style.UnCheckedBox />
          )}
        </style.CheckBoxButtonA>
        <style.CheckListC>페이지 변색 및 훼손</style.CheckListC>
      </style.CheckListDivB>
      <style.CheckListDivC onClick={toggleIsCoverDamaged}>
        <style.CheckBoxButtonA>
          {isCoverDamaged ? <style.CheckedBox /> : <style.UnCheckedBox />}
        </style.CheckBoxButtonA>
        <style.CheckListD>겉표지 훼손</style.CheckListD>
      </style.CheckListDivC>
    </style.Div>
  );
}
