import styled from "styled-components";
import CancelButtonSvg from "../../../../../public/assets/image/CancelButton.svg";
import AllButtonSvg from "../../../../../public/assets/image/CheckBox.svg";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;
`;
export const TopDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 8.4rem;
  width: 100%;
  background: #fff;
  z-index: 1003;
`;

export const titleDiv = styled.div`
  position: fixed;
  height: 4.4rem;
  width: 100%;
  justify-content: center;
  z-index: 1003;
  background: #fff;
`;

export const TitleA = styled.a`
  position: fixed;
  top: 1rem;
  left: 12.5rem;
  width: 14rem;
  height: 4.1209rem;
  color: #000;
  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  z-index: 1003;
  background: #fff;
`;

export const CancelBox = styled.div`
  display: flex;
  width: 4.4rem;
  height: 4.4rem;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  z-index: 1003;
`;

export const CancelButtonDiv = styled(CancelButtonSvg)`
  width: 2rem;
  height: 2rem;
  z-index: 1003;
`;

export const AllDiv = styled.div`
  position: fixed;
  padding-top: 1rem;
  padding-left: 1.6rem;
  background: var(--b-10, #f6f6f6);
  display: flex;
  top: 4.4rem;
  width: 100%;
  height: 4rem;
  z-index: 1003;
`;

export const AllButton = styled(AllButtonSvg)`
  position: fixed;
  width: 2rem;
  height: 2rem;
  z-index: 1003;
`;

export const AllDivA = styled.a`
  position: fixed;
  left: 11%;
  color: var(--b-100, #36332e);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  z-index: 1003;
`;

export const AllDivB = styled.a`
  position: fixed;
  right: 1.6rem;
  color: var(--b-60, #8f8f8f);
  text-align: right;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  z-index: 1003;
`;
