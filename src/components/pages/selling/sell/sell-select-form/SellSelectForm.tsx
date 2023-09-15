import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as style from "@/components/pages/selling/sell/sell-select-form/SellSelectForm.style";

// 로직 구현때 수정 예정
// URL 파라미터 확인: SellCollegeSelect 컴포넌트에서 단과대를 선택하고 다른 페이지로 이동할 때 URL 파라미터로 선택한 단과대 이름을 전달하는 것이 중요합니다. console.log를 사용하여 selectedCollege 값이 URL 파라미터로 전달되고 있는지 확인하세요. 예를 들어, router.push에서 전달한 URL이 정상적으로 생성되었는지 확인할 수 있습니다.
// 초기값 설정: SellSelectForm 컴포넌트에서 selectedCollege 값을 초기화할 때 initialCollege 값을 사용하고 있습니다. initialCollege이 null이면 컴포넌트가 마운트될 때 selectedCollege 역시 null이 됩니다. 따라서 initialCollege 값을 설정할 때 문제가 없는지 확인하세요.
// URL 파라미터 파싱: URL 파라미터로 전달된 값을 router.query를 통해 가져오는 부분이 문제가 있는지 확인해야 합니다. URL 파라미터가 정확하게 읽어지고 있는지 확인하세요. console.log를 사용하여 router.query 객체와 initialCollege 값을 확인해보세요.
// 컴포넌트 마운트 시점: 컴포넌트의 마운트 시점과 URL 파라미터가 전달되는 시점을 고려해야 합니다. URL 파라미터가 컴포넌트가 마운트되기 전에 전달되는 경우 initialCollege이 설정되지 않을 수 있습니다. 컴포넌트가 마운트된 후에 URL 파라미터가 변경되는 경우 useEffect가 작동하여 selectedCollege을 업데이트합니다.

export default function SellSelectForm() {
  const router = useRouter();
  const initialCollege = router.query.college as string;
  const [selectedCollege, setSelectedCollege] = useState<string | null>(
    initialCollege || null,
  );
  useEffect(() => {
    setSelectedCollege(initialCollege || null);
  }, [initialCollege]);

  useEffect(() => {
    console.log("selectedCollege 값이 변경되었습니다:", selectedCollege);
    // 나머지 코드...
  }, [selectedCollege]);
  return (
    <style.Div>
      <Link href="/collegeselect">
        <style.CollegeDiv>
          <style.CollegeA>{selectedCollege || "단과대"}</style.CollegeA>
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
