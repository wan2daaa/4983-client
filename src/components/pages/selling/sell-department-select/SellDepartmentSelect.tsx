import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import * as style from "@/components/pages/selling/sell-department-select/SellDepartmentSelect.style";

interface Department {
  id: number;
  name: string;
}

const departments: Department[] = [
  { id: 1, name: "경영학과" },
  { id: 2, name: "경제학과" },
  { id: 3, name: "국제경영학전공" },
  { id: 4, name: "산업경영학과" },
  { id: 5, name: "무역학과" },
  { id: 6, name: "공과대학" },
  { id: 7, name: "사범대학" },
  { id: 8, name: "회계학과" },
];
export default function SellDepartmentSelect() {
  const router = useRouter();

  const handleCollegeClick = (selectedDepartment: Department) => {
    router.push(`/departmentselect?department=${selectedDepartment.name}`);
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
          <style.TitleA>학과 선택</style.TitleA>
        </style.TitleDiv>
      </style.TopDiv>
      {departments.map(department => (
        <Link href="/sell">
          <style.DepartmentDiv
            key={department.id}
            onClick={() => handleCollegeClick(department)}
            style={{ cursor: "pointer" }}
          >
            <style.DepartmentA>{department.name}</style.DepartmentA>
          </style.DepartmentDiv>
        </Link>
      ))}
    </style.Div>
  );
}
