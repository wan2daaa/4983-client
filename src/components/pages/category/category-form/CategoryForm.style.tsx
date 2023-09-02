import styled from "styled-components";
import CheckBoxSvg from "../../../../../public/assets/image/CheckBox-Checked.svg";
import UnCheckBoxSvg from "../../../../../public/assets/image/CheckBox.svg";
import ExpandButtonSvg from "../../../../../public/assets/image/ExpandButton.svg";

export const TitleBox = styled.div`
  position: relative;
  height: 5.2rem;
  width: 100%;
  background: #fff;
  display: flex;
`;

export const CheckBoxDiv = styled.div`
  position: relative;
  width: 4.7rem;
  height: 5.2rem;
`;

export const CheckBoxButton = styled.button`
  position: relative;
  color: var(--b-60, #8f8f8f);
  width: 2rem;
  height: 2rem;
  left: 1.7rem;
  top: 1.5rem;
`;

export const CheckedBox = styled(CheckBoxSvg)``;

export const UnCheckedBox = styled(UnCheckBoxSvg)``;

export const CollegeDiv = styled.div`
  position: relative;
  display: flex;
  color: var(--b-60, #8f8f8f);
  width: 89%;
  height: 5.2rem;
  box-shadow: 0px -0.5px 0px 0px rgba(0, 0, 0, 0.1) inset;
`;

export const CollegeName = styled.span`
  position: absolute;
  color: var(--b-100, #36332e);
  width: 12rem;
  height: 2.4rem;
  padding: 1.4rem 0;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const ExpandButtonDiv = styled.button`
  position: absolute;
  right: 1.6rem;
  width: 1.7rem;
  height: 1.7rem;
  top: 1.8rem;
`;

export const ExpandButton = styled(ExpandButtonSvg)``;

export const ContentDiv = styled.div`
  position: relative;
  display: flex;
  top: 8.4rem;
  width: 37.5rem;
  flex-direction: column;
`;
