import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import * as style from "@/components/pages/selling/sell-college-select/SellCollegeSelect.style";

interface College {
  id: number;
  name: string;
}

const colleges: College[] = [
  { id: 1, name: "경영경제대학" },
  { id: 2, name: "SW융합대학" },
  { id: 3, name: "사회과학대학" },
  { id: 4, name: "문과대학" },
  { id: 5, name: "법과대학" },
  { id: 6, name: "공과대학" },
  { id: 7, name: "사범대학" },
  { id: 8, name: "음악예술대학" },
];
export default function SellCollegeSelect() {
  const router = useRouter();

  const handleCollegeClick = (selectedCollege: College) => {
    // 선택한 단과대 이름을 URL 파라미터로 전달하여 페이지 이동
    router.push(`/collegeselect?college=${selectedCollege.name}`);
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
      {colleges.map(college => (
        <Link href="/sell">
          <style.CollegeDiv
            key={college.id}
            onClick={() => handleCollegeClick(college)}
            style={{ cursor: "pointer" }}
          >
            <style.CollegeA>{college.name}</style.CollegeA>
          </style.CollegeDiv>
        </Link>
      ))}
    </style.Div>
  );
}
