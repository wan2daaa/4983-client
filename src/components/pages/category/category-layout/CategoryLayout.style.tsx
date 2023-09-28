import styled from "styled-components";
import CancelButtonSvg from "../../../../../public/assets/image/CancelButton.svg";
import CheckBoxSvg from "../../../../../public/assets/image/CheckBox-Checked.svg";
import UnCheckBoxSvg from "../../../../../public/assets/image/CheckBox.svg";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;
`;

export const TopDiv = styled.div`
  position: fixed;
  height: 8.4rem;
  width: 100%;
  background: #fff;
  z-index: 1003;
  display: flex;
  flex-direction: column;
`;

export const TitleDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 4.6493rem;
  z-index: 1003;
  background: #fff;
`;

export const CancelButtonDiv = styled.div`
  position: fixed;
  width: 4.4rem;
  height: 4.4rem;
  z-index: 1003;
  background: #fff;
  padding: 1.2rem;
`;

export const CancelButton = styled(CancelButtonSvg)`
  position: fixed;
  width: 2rem;
  height: 2rem;
  z-index: 1003;
  background: #fff;
`;

export const TitleA = styled.a`
  position: absolute;
  top: 1rem;
  left: 11.7rem;
  width: 14rem;
  height: 2.4rem;
  font-style: normal;
  background: #fff;
  color: var(--b-100, #36332e);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
  z-index: 1003;
`;

export const AllDiv = styled.div`
  position: fixed;
  background: var(--b-10, #f6f6f6);
  top: 4.4rem;
  width: 37.5rem;
  height: 4rem;
  z-index: 1003;
  padding-left: 1.6rem;
`;

export const AllA = styled.span`
  position: absolute;
  width: 5.2rem;
  height: 2rem;
  z-index: 1003;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  left: 4.4rem;
  top: 1rem;
`;
export const AllB = styled.button`
  position: absolute;
  color: var(--b-60, #8f8f8f);
  width: 8.1rem;
  height: 2rem;
  z-index: 1003;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  right: 1.6rem;
  top: 1rem;
`;

export const AllButton = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  color: var(--b-60, #8f8f8f);
  z-index: 1003;
  opacity: 0;
  cursor: pointer;
  top: 1rem;
`;

export const CheckedBox = styled(CheckBoxSvg)`
  position: absolute;
  top: 1rem;
  width: 2rem;
  height: 2rem;
`;

export const UnCheckedBox = styled(UnCheckBoxSvg)`
  position: absolute;
  top: 1rem;
  width: 2rem;
  height: 2rem;
`;
