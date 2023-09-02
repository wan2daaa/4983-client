import * as style from "@/components/pages/category/category-form-department/CategoryFormDepartment.style";
import React, { useState } from "react";

export default function CategoryFormDepartment() {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckBox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  return (
    <style.DepartmentsBox>
      <style.DepartmentsCheckBoxDiv>
        <style.CheckBoxDiv>
          <style.DepartmentsCheckBoxButton onClick={toggleCheckBox}>
            {isChecked ? <style.CheckedBox /> : <style.UnCheckedBox />}
          </style.DepartmentsCheckBoxButton>
        </style.CheckBoxDiv>
      </style.DepartmentsCheckBoxDiv>
      <style.DepartmentsDiv>
        <style.DepartmentsName>경영학과</style.DepartmentsName>
      </style.DepartmentsDiv>
    </style.DepartmentsBox>
  );
}
