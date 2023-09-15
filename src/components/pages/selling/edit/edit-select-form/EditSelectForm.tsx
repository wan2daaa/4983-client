import Link from "next/link";
import * as style from "@/components/pages/selling/edit/edit-select-form/EditSelectForm.style";

export default function EditSelectForm() {
  return (
    <style.Div>
      <Link href="/collegeselect">
        <style.CollegeDiv>
          <style.CollegeA>단과대</style.CollegeA>
          <style.SelectButton />
        </style.CollegeDiv>
      </Link>
      <Link href="/departmentselect">
        <style.DepartmentDiv>
          <style.DepartmentA>학과</style.DepartmentA>
          <style.SelectButtonB />
        </style.DepartmentDiv>
      </Link>
    </style.Div>
  );
}
