import styled from "styled-components";
import CheckBoxSvg from "../../../../../../public/assets/image/sell/SellCheckedBox.svg";
import UnCheckBoxSvg from "../../../../../../public/assets/image/sell/SellUnCheckBox.svg";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  top: 5.5rem;
  display: flex;
  flex-direction: column;
  width: 34.3rem;
  height: 10.1rem;
  margin-top: 0.6rem;
  margin-left: 1.6rem;
  gap: 0.5rem;
`;

export const CheckListA = styled.span`
  position: relative;
  display: flex;
  width: 10rem;
  height: 2rem;
  left: 0.5rem;
  color: #818181;
  font-size: ${Font.Size.M};
  font-weight: 600;
`;

export const Asterisk = styled.span`
  position: absolute;
  display: flex;
  width: 0.7rem;
  height: 0.8rem;
  color: #ffdb57;
  font-size: ${Font.Size.M};
  font-weight: 700;
  left: 9.8rem;
  bottom: 9.7rem;
`;

export const CheckListDivA = styled.div`
  position: relative;
  display: flex;
  width: 13rem;
  height: 2rem;
  left: 0.5rem;
  gap: 0.4rem;
`;
export const CheckBoxButtonA = styled.button`
  position: relative;
  color: var(--b-60, #8f8f8f);
  width: 2rem;
  height: 2rem;
`;

export const CheckedBox = styled(CheckBoxSvg)``;

export const UnCheckedBox = styled(UnCheckBoxSvg)``;

export const CheckListB = styled.span`
  position: relative;
  display: flex;
  width: 10rem;
  height: 2.1rem;
  top: 0.1rem;
  color: #818181;
  font-size: ${Font.Size.M};
  font-weight: 400;
`;

export const CheckListDivB = styled.div`
  position: relative;
  display: flex;
  width: 18rem;
  height: 2rem;
  top: 0.9rem;
  left: 0.5rem;
  gap: 0.4rem;
`;
export const CheckListC = styled.span`
  position: relative;
  display: flex;
  width: 13rem;
  height: 2.1rem;
  top: 0.1rem;
  color: #818181;
  font-size: ${Font.Size.M};
  font-weight: 400;
`;

export const CheckListDivC = styled.div`
  position: relative;
  display: flex;
  width: 13rem;
  height: 2rem;
  left: 0.5rem;
  top: 1.8rem;
  gap: 0.4rem;
`;

export const CheckListD = styled.span`
  position: relative;
  display: flex;
  width: 7rem;
  height: 2.1rem;
  top: 0.1rem;
  color: #818181;
  font-size: ${Font.Size.M};
  font-weight: 400;
`;
