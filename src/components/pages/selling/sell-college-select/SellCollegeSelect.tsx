import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import * as style from "@/components/pages/selling/sell-college-select/SellCollegeSelect.style";
import SelectCollege, { College } from "@/data/SelectCollege";
import { collegeState } from "@/recoil/atoms/CreateUsedBookAtoms";

export default function SellCollegeSelect() {
  const router = useRouter();
  // const [selectedCollege, setSelectedCollege] = useRecoilState(collegeState);

  const handleCollegeClick = (selectedCollege: College) => {
    // setSelectedCollege(selectedCollege.value);
    router.back();
  };
  return (
    <style.Div>
      <style.TopDiv>
        <style.TitleDiv>
          <Link href="/sell">
            <style.BackBox>
              <style.BackButtonDiv />
            </style.BackBox>
          </Link>
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
}
