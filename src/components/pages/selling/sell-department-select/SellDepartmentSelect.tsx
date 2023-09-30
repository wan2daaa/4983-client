import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import * as style from "@/components/pages/selling/sell-department-select/SellDepartmentSelect.style";
import SelectCollege, { College, Department } from "@/data/SelectCollege";

export default function SellDepartmentSelect() {
  const router = useRouter();
  const selectedCollegeValue = router.query.college as string;

  const selectedCollege: College | undefined = SelectCollege.find(
    college => college.value === selectedCollegeValue,
  );

  const departments: Department[] = selectedCollege
    ? selectedCollege.departments
    : [];

  const handleCollegeClick = (selectedDepartment: Department) => {
    router.push(
      `/sell?college=${selectedCollegeValue}&department=${selectedDepartment.value}`,
    );
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
        <style.DepartmentDiv
          key={department.id}
          onClick={() => handleCollegeClick(department)}
          style={{ cursor: "pointer" }}
        >
          <style.DepartmentA>{department.name}</style.DepartmentA>
        </style.DepartmentDiv>
      ))}
    </style.Div>
  );
}
