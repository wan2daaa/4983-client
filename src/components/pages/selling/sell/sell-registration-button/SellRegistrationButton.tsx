import React from "react";
import { useRecoilValue } from "recoil";
import {
  collegeState,
  departmentState,
  fileListState,
  isCoverDamagedState,
  isDiscolorationAndDamageState,
  isUnderlinedOrWriteState,
  nameState,
  priceState,
  publisherState,
  tradeAvailableDatetimeState,
} from "@/recoil/atoms/CreateUsedBookAtoms";
import { CreateUsedBook } from "@/apis/sell/Registrationsell";
import * as style from "@/components/pages/selling/sell/sell-registration-button/SellRegistrationButton.style";

export default function SellRegistrationButton() {
  const fileList = useRecoilValue(fileListState);
  let college = useRecoilValue(collegeState);
  let department = useRecoilValue(departmentState);
  const price = useRecoilValue(priceState);
  const tradeAvailableDatetime = useRecoilValue(tradeAvailableDatetimeState);
  const name = useRecoilValue(nameState);
  const publisher = useRecoilValue(publisherState);
  const isUnderlinedOrWrite = useRecoilValue(isUnderlinedOrWriteState);
  const isDiscolorationAndDamage = useRecoilValue(
    isDiscolorationAndDamageState,
  );
  const isCoverDamaged = useRecoilValue(isCoverDamagedState);

  const handleRegistration = () => {
    if (college === "교양") {
      college = "GE";
      department = "GE";
    }
    const requestData = {
      usedBook: {
        college,
        department,
        price,
        tradeAvailableDatetime,
        name,
        publisher,
        isUnderlinedOrWrite,
        isDiscolorationAndDamage,
        isCoverDamaged,
      },
      fileList,
    };
    CreateUsedBook(requestData);
  };

  return (
    <style.Div>
      <style.RegistrationButton onClick={handleRegistration}>
        등록하기
      </style.RegistrationButton>
    </style.Div>
  );
}
