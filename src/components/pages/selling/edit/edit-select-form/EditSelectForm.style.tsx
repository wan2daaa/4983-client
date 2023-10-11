import styled from "styled-components";
import SelectButtonSvg from "../../../../../../public/assets/image/sell/SelectButton.svg";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  display: flex;
  top: 5.6rem;
  width: auto;
  height: 4rem;
  margin-left: 1.3rem;
`;
export const CollegeDiv = styled.div`
  position: relative;
  display: inline-flex;
  padding: 1.2rem 1.8rem 1.1rem 1.4rem;
  height: 4rem;
  border-radius: 1.6rem;
  justify-content: center;
  border: 1px solid #fff;
  background: #f6f6f6;
  gap: 1.1rem;
  color: #414141;
  font-size: 1.4rem;
  font-weight: 500;
`;
export const CollegeA = styled.span`
  position: relative;
  width: 7.5rem;
  height: 1.8rem;
  color: #414141;
  font-size: 1.4rem;
  font-weight: 400;
`;
export const CollegeSeletedA = styled.span`
  position: relative;
  width: 7.4rem;
  height: 1.8rem;
  justify-content: center;
  align-items: center;

  color: #50555c;
  font-size: ${Font.Size.M};
  font-weight: 500;
`;
export const SelectButton = styled(SelectButtonSvg)`
  position: relative;
  width: 0.9rem;
  top: 0.4rem;
  height: 0.8104rem;
`;

export const DepartmentBox = styled.div`
  pointerevents: none;
`;

export const DepartmentDiv = styled.div`
  position: relative;
  left: 1rem;
  width: auto;
  height: 4rem;
  gap: 1.2rem;
  border-radius: 1.6rem;
  padding: 1.2rem 1.88rem 1.1rem 2rem;
  border: 1px solid #fff;
  background: #f6f6f6;
  display: inline-flex;
`;
export const DepartmentA = styled.span`
  position: relative;
  width: 3.8rem;
  height: 1.8rem;
  font-weight: 400;

  color: #50555c;
  font-size: ${Font.Size.M};
`;
export const DepartmentSelectedA = styled.span`
  position: relative;
  height: 1.8rem;
  color: #414141;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const SelectButtonB = styled(SelectButtonSvg)`
  position: absolute;
  width: 0.9rem;
  top: 1.5rem;
  height: 0.8104rem;
  right: 1.88rem;
`;

export const Box = styled.div``;

export const SelectDiv = styled.div`
  position: absolute;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  z-index: 1200;
  top: 14.1rem;
  margin-left: 9rem;
  transform: translate(-50%, -50%);
  width: 15.6rem;
  height: 8.4rem;
  border-radius: 1.7rem;
  background: #fff;
`;
export const SelectBox = styled.button`
  position: relative;
  display: flex;
  height: 4.1rem;
  align-items: center;

  width: 15.6rem;
  color: #000;
  font-size: 1.5rem;
  font-weight: 400;
  border-bottom: 0.1rem solid #eee;
  line-height: normal;
  justify-content: center;
`;

export const SelectA = styled.p`
  position: absolute;
  justify-content: center;
`;

export const SelectCollegeBox = styled.button`
  position: relative;
  border-top: 0.1rem solid #eee;
  display: flex;
  height: 4.1rem;
  justify-content: center;
  align-items: center;
  width: 15.6rem;
  color: #000;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: normal;
`;
