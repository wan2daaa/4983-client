import React, { useState } from "react";
import * as style from "@/components/pages/main/main-check-box/MainCheckBox.style";

// { isStatus }
export default function MainCheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    // <>
    //   {isStatus === "selling" && (
    <style.BoxDiv onClick={toggleCheckBox}>
      {isChecked ? <style.CheckedBox /> : <style.UnCheckedBox />}
    </style.BoxDiv>
    // )}
    // </>
  );
}
