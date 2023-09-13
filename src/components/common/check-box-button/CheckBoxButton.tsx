import React, { useState } from "react";
import * as style from "@/components/common/check-box-button/CheckBoxButton.style";

export default function CategoryLayout() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <style.CheckBoxButton onClick={toggleCheckBox}>
      {isChecked ? <style.CheckedBox /> : <style.UnCheckedBox />}
    </style.CheckBoxButton>
  );
}
