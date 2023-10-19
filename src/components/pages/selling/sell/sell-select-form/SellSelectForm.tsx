import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import {
  collegeState,
  departmentState,
} from "@/recoil/atoms/CreateUsedBookAtoms";
import * as style from "@/components/pages/selling/sell/sell-select-form/SellSelectForm.style";

const SellSelectForm = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [, setCollegeValue] = useRecoilState(collegeState);
  const [, setDepartmentValue] = useRecoilState(departmentState);
  const [selectedCollege, setSelectedCollege] = useState({
    name: "전공/교양",
    value: "",
  });
  const [selectedDepartment, setSelectedDepartment] = useState({
    name: "학과",
    value: "",
  });

  useEffect(() => {
    const college = JSON.parse(sessionStorage.getItem("selectCollege") ?? "{}");
    const department = JSON.parse(
      sessionStorage.getItem("selectDepartment") ?? "{}",
    );

    // 단과대 값만 들어왔을 경우
    if (college.name && !department.name) {
      setSelectedCollege(college);
      setSelectedDepartment({ name: "학과", value: "" });
      //   단과대 값을 선택하고, 학과도 선택했을 경우
    } else if (college.name && department.name) {
      setSelectedCollege(college);
      setSelectedDepartment(department);
      setCollegeValue(college.value);
      setDepartmentValue(department.value);
      //   단과대와 학과 모두 선택하기 전, 즉 서버에서 갖고온 기존 값
    }
  }, []);

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

  const selectedCollegeButtonClick = () => {
    if (selectedCollege.name === "단과대") {
      setSelectedCollege({ name: "교양", value: "" });
      setSelectedDepartment({ name: "교양", value: "" });
      setCollegeValue("LIBERAL_ARTS");
      setDepartmentValue("LIBERAL_ARTS");
    } else {
      setShowModal(prevShowModal => !prevShowModal);
    }
  };

  const selectCollegeBoxClick = () => {
    setSelectedCollege({ name: "교양", value: "" });
    setSelectedDepartment({ name: "", value: "" });
    setShowModal(false);
  };

  return (
    <style.Div>
      <style.CollegeDiv onClick={selectedCollegeButtonClick}>
        {selectedCollege.name}
        <style.SelectButton />
      </style.CollegeDiv>
      {showModal && (
        <style.SelectDiv>
          <Link href="/collegeselect">
            <style.SelectBox>
              <style.SelectA>단과대</style.SelectA>
            </style.SelectBox>
          </Link>
          <style.SelectCollegeBox onClick={selectCollegeBoxClick}>
            <style.SelectA>교양</style.SelectA>
          </style.SelectCollegeBox>
        </style.SelectDiv>
      )}
      {selectedCollege.name && selectedCollege.name !== "교양" ? (
        <Link href={`/departmentselect?college=${selectedCollege.value}`}>
          <style.DepartmentDiv>
            {selectedDepartment.name}
            <style.SelectButton />
          </style.DepartmentDiv>
        </Link>
      ) : (
        <style.DepartmentBox>
          <style.DepartmentDiv>
            {selectedDepartment.name}
            <style.SelectButton />
          </style.DepartmentDiv>
        </style.DepartmentBox>
      )}
    </style.Div>
  );
};
export default SellSelectForm;
