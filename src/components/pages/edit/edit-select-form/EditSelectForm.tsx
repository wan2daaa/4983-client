import React, { useEffect, useState } from "react";
import * as style from "@/components/pages/edit/edit-select-form/EditSelectForm.style";
import Link from "next/link";
import { useRouter } from "next/router";

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
