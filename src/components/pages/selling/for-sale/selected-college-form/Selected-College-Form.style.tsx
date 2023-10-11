import styled from "styled-components";
import EditButtonSVG from "../../../../../../public/assets/image/EditButton.svg";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  display: flex;
  top: 1.2rem;
  width: 34.3rem;
  height: 3.3rem;
  left: 1.6rem;
  gap: 1rem;
`;

export const CollegeDiv = styled.div`
  display: inline-flex;
  height: 2.4rem;
  padding: 0.2rem 0.8rem;
  align-items: flex-start;
  top: 0.7rem;
  gap: 1rem;
  border-radius: 4.8rem;
  background: var(--b-20, #ececec);
`;
export const CollegeA = styled.span`
  position: relative;
  color: var(--b-80, #414141);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
`;
export const DepartmentDiv = styled.div`
  display: inline-flex;
  height: 2.4rem;
  padding: 0.2rem 0.8rem;
  align-items: flex-start;
  top: 0.7rem;
  gap: 1rem;
  border-radius: 4.8rem;
  background: var(--b-20, #ececec);
`;
export const DepartmentA = styled.span`
  position: relative;
  color: var(--b-80, #414141);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const Editbutton = styled.button`
  position: absolute;
  width: 3.5rem;
  height: 2rem;
  gap: 0.7rem;
  display: flex;
  top: 0.8rem;
  right: 0.8rem;
`;
export const ButtonSVG = styled(EditButtonSVG)`
  position: relative;
  fill: #3a3a3a;
  width: 3.5rem;
  height: 0.7rem;
`;

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(54, 51, 46, 0.5);
  z-index: 1001;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const Modal = styled.div`
  position: absolute;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  top: 7.5rem;
  left: 27.5rem;
  transform: translate(-50%, -50%);
  width: 13rem;
  height: 8rem;
  border-radius: 1.7rem;
  background: #fff;
  z-index: 1002;
  display: flex;
  flex-direction: column;
`;

export const ModalEdit = styled.a`
  position: relative;
  display: flex;
  width: 13rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 400;
  border-bottom: 0.15rem solid rgba(54, 51, 46, 0.5);
`;

export const ModalDelete = styled.a`
  position: relative;
  display: flex;
  width: 13rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 400;
  border-top: 0.15rem solid rgba(54, 51, 46, 0.5);
`;

export const DeleteModalBox = styled.div`
  position: absolute;
  display: flex;
  top: calc(50% + 16.5rem);
  justify-content: center;
  z-index: 1002;
  width: 31.5rem;
  height: 16.5rem;
  border-radius: 3.4rem;
  background: #fff;
`;

export const Delete = styled.a`
  margin-top: 2.7rem;
  color: #36332e;
  text-align: center;
  font-size: ${Font.Size.XL};
  font-weight: 400;
  line-height: 3.2rem;
`;

export const DeleteButtonContainer = styled.button`
  position: absolute;
  top: 10.4rem;
  width: 28.1rem;
  height: 4.2rem;
  display: flex;
  gap: 1.7rem;
`;

export const DeleteButtonNo = styled.button`
  width: 13.2rem;
  height: 4.2rem;
  border-radius: 10rem;
  border: 1px solid #c0c0c0;
  background: #fff;

  color: #8e8e8e;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2rem;
`;

export const DeleteButtonYes = styled.button`
  width: 13.2rem;
  height: 4.2rem;
  border-radius: 10rem;
  background: #3a3a3a;

  color: #fff;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2rem;
`;

export const DeleteBr = styled.br``;
