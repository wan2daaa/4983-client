import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import * as style from "@/components/pages/selling/sell-college-select/SellCollegeSelect.style";
import SelectCollege, { College } from "@/data/SelectCollege";

export default function SellCollegeSelect() {
  const router = useRouter();

  const handleCollegeClick = (selectedCollege: College) => {
    // 선택한 단과대 이름을 URL 파라미터로 전달하여 페이지 이동
    router.push(`/sell?college=${selectedCollege.value}`);
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
