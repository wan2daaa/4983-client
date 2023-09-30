import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
import * as style from "@/components/pages/selling/sell/sell-select-form/SellSelectForm.style";
import SelectCollege, { College, Department } from "@/data/SelectCollege";

// 로직 구현때 수정 예정
// URL 파라미터 확인: SellCollegeSelect 컴포넌트에서 단과대를 선택하고 다른 페이지로 이동할 때 URL 파라미터로 선택한 단과대 이름을 전달하는 것이 중요합니다. console.log를 사용하여 selectedCollege 값이 URL 파라미터로 전달되고 있는지 확인하세요. 예를 들어, router.push에서 전달한 URL이 정상적으로 생성되었는지 확인할 수 있습니다.
// 초기값 설정: SellSelectForm 컴포넌트에서 selectedCollege 값을 초기화할 때 initialCollege 값을 사용하고 있습니다. initialCollege이 null이면 컴포넌트가 마운트될 때 selectedCollege 역시 null이 됩니다. 따라서 initialCollege 값을 설정할 때 문제가 없는지 확인하세요.
// URL 파라미터 파싱: URL 파라미터로 전달된 값을 router.query를 통해 가져오는 부분이 문제가 있는지 확인해야 합니다. URL 파라미터가 정확하게 읽어지고 있는지 확인하세요. console.log를 사용하여 router.query 객체와 initialCollege 값을 확인해보세요.
// 컴포넌트 마운트 시점: 컴포넌트의 마운트 시점과 URL 파라미터가 전달되는 시점을 고려해야 합니다. URL 파라미터가 컴포넌트가 마운트되기 전에 전달되는 경우 initialCollege이 설정되지 않을 수 있습니다. 컴포넌트가 마운트된 후에 URL 파라미터가 변경되는 경우 useEffect가 작동하여 selectedCollege을 업데이트합니다.

export default function SellSelectForm() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const initialCollege = router.query.college as string;
  const [selectedCollege, setSelectedCollege] = useState<string | undefined>(
    initialCollege || undefined,
  );
  const initialDepartment = router.query.department as string;
  const [selectedDepartment, setSelectedDepartment] = useState<
    string | undefined
  >(initialDepartment || undefined);
  const selectedCollegeButtonClick = () => {
    setShowModal(true);
  };
  const selectCollegeBoxClick = () => {
    setSelectedCollege("교양");
    setShowModal(false);
  };
  useEffect(() => {
    setSelectedCollege(initialCollege || undefined);
  }, [initialCollege]);
  useEffect(() => {
    setSelectedDepartment(initialDepartment || undefined);
  }, [initialDepartment]);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        // 모달 밖을 클릭하면 모달을 닫습니다.
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);
  useEffect(() => {
    setSelectedCollege((router.query.college as string) || undefined);
    setSelectedDepartment((router.query.department as string) || undefined);
  }, [router.query]);

  const renderCollegeContent = (college: string | undefined) => {
    if (college === undefined) {
      return (
        <>
          <style.CollegeA>전공/교양</style.CollegeA>
          <style.SelectButton />
        </>
      );
    }
    if (college === "교양") {
      return college;
    }
    if (college === "BUSINESS_AND_ECONOMICS") {
      return <style.CollegeSeletedA>경영경제대학</style.CollegeSeletedA>;
    }
    if (college === "SW_CONVERGENCE") {
      return <style.CollegeSeletedA>SW융합대학</style.CollegeSeletedA>;
    }
    if (college === "SOCIAL_SCIENCES") {
      return <style.CollegeSeletedA>사회과학대학</style.CollegeSeletedA>;
    }
    if (college === "LITERAL_ARTS") {
      return "문과대학";
    }
    if (college === "LAW") {
      return "법과대학";
    }
    if (college === "ENGINEERING") {
      return "공과대학";
    }
    if (college === "EDUCATION") {
      return "사범대학";
    }
    if (college === "MUSIC_AND_ARTS") {
      return <style.CollegeSeletedA>음악예술대학</style.CollegeSeletedA>;
    }
    return null;
  };

  const renderDepartmentContent = (departmentValue: string | undefined) => {
    if (departmentValue === undefined) {
      return (
        <>
          <style.DepartmentA>학과</style.DepartmentA>
          <style.SelectButtonB />
        </>
      );
    }
    let departmentNameInKorean: string | undefined;

    const isFoundInColleges = SelectCollege.some(college => {
      const isFoundInDepartments = college.departments.some(department => {
        if (department.value === departmentValue) {
          departmentNameInKorean = department.name;
          return true;
        }
        return false;
      });
      return isFoundInDepartments;
    });
    return (
      <style.DepartmentSelectedA>
        {departmentNameInKorean || "Not Found"}
      </style.DepartmentSelectedA>
    );
  };
  return (
    <style.Div>
      <style.CollegeDiv onClick={selectedCollegeButtonClick}>
        {renderCollegeContent(selectedCollege)}
      </style.CollegeDiv>
      <div>
        {showModal &&
          ReactDOM.createPortal(
            <style.SelectDiv ref={modalRef}>
              <Link href={`/collegeselect?department=${selectedDepartment}`}>
                <style.SelectBox>
                  <style.SelectA>단과대</style.SelectA>
                </style.SelectBox>
              </Link>
              <style.SelectCollegeBox onClick={selectCollegeBoxClick}>
                <style.SelectA>교양</style.SelectA>
              </style.SelectCollegeBox>
            </style.SelectDiv>,
            document.body,
          )}
      </div>
      {selectedCollege && selectedCollege !== "교양" ? (
        <Link href={`/departmentselect?college=${selectedCollege}`}>
          <style.DepartmentDiv>
            {renderDepartmentContent(selectedDepartment)}
          </style.DepartmentDiv>
        </Link>
      ) : (
        <div style={{ pointerEvents: "none" }}>
          <style.DepartmentDiv>
            {renderDepartmentContent(selectedDepartment)}
          </style.DepartmentDiv>
        </div>
      )}
    </style.Div>
  );
}
