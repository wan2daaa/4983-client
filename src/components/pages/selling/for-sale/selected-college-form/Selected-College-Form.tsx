import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import * as style from "@/components/pages/selling/for-sale/selected-college-form/Selected-College-Form.style";
import { College, Department, SelectCollege } from "@/data/SelectCollege";
import { UsedBookDelete } from "@/apis/main/bookview/BookView";

interface BookViewProps {
  college: string;
  department: string;
}

export default function SelectedCollegeForm({
  college,
  department,
}: BookViewProps) {
  const router = useRouter();
  const { usedBookId } = router.query;
  const collegeData: College | undefined = SelectCollege.find(
    item => item.value === college,
  );

  const departmentData: Department | undefined = collegeData?.departments.find(
    item => item.value === department,
  );

  const shouldDisplayDepartment = department !== "GE";

  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openDeleteModal = () => {
    setModalOpen(false);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleOverlayClick = () => {
    closeModal();
    closeDeleteModal();
  };

  const handleDeleteButtonClick = () => {
    UsedBookDelete({ usedBookId: Number(usedBookId) })
      .then(response => {
        console.log("삭제 성공: ", response);
        closeDeleteModal();
        window.location.href = `/`;
      })
      .catch(error => {
        console.error(
          "삭제 실패: ",
          error.response ? error.response.data : error.message,
        );
      });
  };

  return (
    <style.Div>
      <style.ModalOverlay
        isOpen={isModalOpen || isDeleteModalOpen}
        onClick={handleOverlayClick}
      />
      <style.CollegeDiv>
        <style.CollegeA>
          {college === "GE" ? "교양" : collegeData?.name}
        </style.CollegeA>
      </style.CollegeDiv>
      {shouldDisplayDepartment && (
        <style.DepartmentDiv>
          <style.DepartmentA>{departmentData?.name}</style.DepartmentA>
        </style.DepartmentDiv>
      )}
      <style.Editbutton onClick={openModal}>
        <style.ButtonSVG />
      </style.Editbutton>

      {isModalOpen && (
        <style.Modal>
          <Link href={`/edit/${usedBookId}`}>
            <style.ModalEdit>수정하기</style.ModalEdit>
          </Link>
          <style.ModalDelete onClick={openDeleteModal}>
            지우기
          </style.ModalDelete>
        </style.Modal>
      )}

      {isDeleteModalOpen && (
        <style.DeleteModalBox>
          <style.Delete>
            글을 지우면 복구할 수 없어요!
            <style.DeleteBr />
            그래도 지우시겠어요?
          </style.Delete>
          <style.DeleteButtonContainer>
            <style.DeleteButtonNo onClick={closeDeleteModal}>
              아니오
            </style.DeleteButtonNo>
            <style.DeleteButtonYes onClick={handleDeleteButtonClick}>
              네
            </style.DeleteButtonYes>
          </style.DeleteButtonContainer>
        </style.DeleteModalBox>
      )}
    </style.Div>
  );
}
