import React from "react";
import * as style from "@/components/pages/main/main-check-box/MainCheckBox.style";

interface MainCheckBoxType {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainCheckBox = ({ isChecked, setIsChecked }: MainCheckBoxType) => {
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
};
export default MainCheckBox;
