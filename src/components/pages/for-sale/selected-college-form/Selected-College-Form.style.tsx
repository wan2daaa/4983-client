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

export const EditDiv = styled.div`
  position: absolute;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  top: 12rem;
  right: -4.5rem;
  transform: translate(-50%, -50%);
  width: 13rem;
  height: 8.2rem;
  border-radius: 1.7rem;
  background: #fff;
  z-index: 1003;
  display: flex;
  flex-direction: column;
`;
export const EditBox = styled.button`
  position: relative;
  display: flex;
  height: 4.1rem;
  align-items: center;

  width: 13rem;
  color: #000;
  font-size: 1.5rem;
  font-weight: 400;
  border-bottom: 0.1rem solid #eee;
  line-height: normal;
  justify-content: center;
`;
export const DeleteBox = styled.button`
  position: relative;
  border-top: 0.1rem solid #eee;
  display: flex;
  height: 4.1rem;
  align-items: center;
  width: 13rem;
  color: #000;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
`;

export const EditA = styled.p`
  position: absolute;
  justify-content: center;
`;

export const DeleteDiv = styled.div`
  position: absolute;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  top: 38rem;
  left: 19rem;
  transform: translate(-50%, -50%);
  width: 31.5rem;
  height: 16.5rem;
  border-radius: 3.4rem;
  background: #fff;
  z-index: 1003;
  display: flex;
  flex-direction: column;
`;

export const DeleteDivA = styled.p`
  position: relative;
  top: 2.7rem;
  left: 5rem;
  justify-content: center;
  width: 21.9rem;
  height: 5.8rem;
  z-index: 1003;
  text-align: center;
  color: #000;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.2rem;
`;

export const DeleteButtonNo = styled.button`
  position: absolute;
  left: 1.8rem;
  bottom: 1.9rem;
  border-radius: 10rem;
  border: 1px solid #c0c0c0;
  background: #fff;
  width: 13.2rem;
  height: 4.2rem;
  color: #8e8e8e;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  justify-content: center;
`;
export const DeleteButtonYes = styled.button`
  position: absolute;
  right: 1.7rem;
  bottom: 1.9rem;
  border-radius: 10rem;
  border: 1px solid #c0c0c0;
  background: #3a3a3a;
  width: 13.2rem;
  height: 4.2rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2rem;
  justify-content: center;
`;
