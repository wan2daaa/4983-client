import styled from "styled-components";
import EditButtonSVG from "../../../../../public/assets/image/EditButton.svg";

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
  width: 0.7rem;
  height: 0.7rem;
`;
