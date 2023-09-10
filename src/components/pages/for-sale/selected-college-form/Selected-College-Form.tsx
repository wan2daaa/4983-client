import * as style from "@/components/pages/for-sale/selected-college-form/Selected-College-Form.style";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function SelectedCollegeForm() {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const deleteModalRef = useRef<HTMLDivElement | null>(null);

  const EditButtonClick = () => {
    setShowModal(true);
  };

  const handleDeleteButtonClick = () => {
    setShowModal(false);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    // 여기에서 삭제 작업을 수행합니다.
    // 이 함수를 호출하여 실제로 삭제를 수행하거나 API 요청을 보낼 수 있습니다.
    // 삭제 작업을 완료한 후 삭제 모달만 닫을 수 있습니다.
    setShowDeleteModal(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    if (showModal || showDeleteModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal, showDeleteModal]);
  return (
    <style.Div>
      <style.CollegeDiv>
        <style.CollegeA> 경영경제대학</style.CollegeA>
      </style.CollegeDiv>
      <style.DepartmentDiv>
        <style.DepartmentA>경영학과</style.DepartmentA>
      </style.DepartmentDiv>
      <style.Editbutton onClick={EditButtonClick}>
        <style.ButtonSVG />
        <style.ButtonSVG />
        <style.ButtonSVG />
      </style.Editbutton>
      <div>
        {showModal &&
          ReactDOM.createPortal(
            <style.EditDiv ref={modalRef}>
              <Link href="/edit">
                <style.EditBox>
                  <style.EditA>수정하기</style.EditA>
                </style.EditBox>
              </Link>
              <style.DeleteBox onClick={handleDeleteButtonClick}>
                <style.EditA>지우기</style.EditA>
              </style.DeleteBox>
            </style.EditDiv>,
            document.body,
          )}

        {showDeleteModal &&
          ReactDOM.createPortal(
            <style.DeleteDiv ref={deleteModalRef}>
              <style.DeleteDivA>
                글을 지우면 복구할 수 없어요! 그래도 지우시겠어요?
              </style.DeleteDivA>
              <style.DeleteButtonNo onClick={handleCloseModal}>
                아니오
              </style.DeleteButtonNo>
              <Link href="/">
                <style.DeleteButtonYes onClick={handleConfirmDelete}>
                  네
                </style.DeleteButtonYes>
              </Link>
            </style.DeleteDiv>,
            document.body,
          )}
      </div>
    </style.Div>
  );
}
