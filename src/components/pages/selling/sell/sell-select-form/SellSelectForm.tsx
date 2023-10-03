import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
import { useRecoilState } from "recoil";
import SelectCollege from "@/data/SelectCollege";
import {
  collegeState,
  departmentState,
} from "@/recoil/atoms/CreateUsedBookAtoms";
import * as style from "@/components/pages/selling/sell/sell-select-form/SellSelectForm.style";

export default function SellSelectForm() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const initialCollege = router.query.college as string | "";
  const initialDepartment = router.query.department as string | "";

  const [selectedCollege, setSelectedCollege] = useRecoilState(collegeState);
  const [selectedDepartment, setSelectedDepartment] =
    useRecoilState(departmentState);

  const selectedCollegeButtonClick = () => {
    if (selectedCollege === "단과대") {
      setSelectedCollege("교양");
      setSelectedDepartment("");
    } else {
      setShowModal(prevShowModal => !prevShowModal);
    }
  };

  const selectCollegeBoxClick = () => {
    setSelectedCollege("교양");
    setSelectedDepartment("");
    setShowModal(false);
  };

  useEffect(() => {
    setSelectedCollege(initialCollege);
  }, [initialCollege]);

  useEffect(() => {
    setSelectedDepartment(initialDepartment);
  }, [initialDepartment]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
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

    const collegeName = SelectCollege.find(item => item.value === college)
      ?.name;

    return collegeName ? (
      <style.CollegeSeletedA>{collegeName}</style.CollegeSeletedA>
    ) : null;
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

    SelectCollege.some(college =>
      college.departments.some(department => {
        if (department.value === departmentValue) {
          departmentNameInKorean = department.name;
          return true;
        }
        return false;
      }),
    );

    return (
      <style.DepartmentSelectedA>
        {departmentNameInKorean || "학과"}
      </style.DepartmentSelectedA>
    );
  };

  return (
    <style.Div>
      <style.CollegeDiv onClick={selectedCollegeButtonClick}>
        {renderCollegeContent(selectedCollege)}
      </style.CollegeDiv>

      <style.Box>
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
      </style.Box>
      {selectedCollege && selectedCollege !== "교양" ? (
        <Link href={`/departmentselect?college=${selectedCollege}`}>
          <style.DepartmentDiv>
            {renderDepartmentContent(selectedDepartment)}
          </style.DepartmentDiv>
        </Link>
      ) : (
        <style.DepartmentBox>
          <style.DepartmentDiv>
            {renderDepartmentContent(selectedDepartment)}
          </style.DepartmentDiv>
        </style.DepartmentBox>
      )}
    </style.Div>
  );
}
