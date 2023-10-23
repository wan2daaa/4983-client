import React from "react";
import { useRouter } from "next/router";
import * as style from "@/components/pages/selling/sell-college-select/SellCollegeSelect.style";
import SelectCollege, { College } from "@/data/SelectCollege";

const SellCollegeSelect = () => {
  const router = useRouter();

  const handleCollegeClick = (selectedCollege: College) => {
    localStorage.setItem("selectCollege", JSON.stringify(selectedCollege));
    localStorage.setItem("selectDepartment", "{}");
    router.back();
  };
  return (
    <style.Div>
      <style.TopDiv>
        <style.TitleDiv>
          <style.BackBox onClick={() => router.back()}>
            <style.BackButtonDiv />
          </style.BackBox>

          <style.TitleA>단과대 선택</style.TitleA>
        </style.TitleDiv>
      </style.TopDiv>
      {SelectCollege.map(college => (
        <style.CollegeDiv
          key={college.id}
          onClick={() => handleCollegeClick(college)}
          style={{ cursor: "pointer" }}
        >
          <style.CollegeA>{college.name}</style.CollegeA>
        </style.CollegeDiv>
      ))}
    </style.Div>
  );
};
export default SellCollegeSelect;
