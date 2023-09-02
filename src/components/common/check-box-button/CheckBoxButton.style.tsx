import styled from "styled-components";
import CheckBoxSvg from "../../../../public/assets/image/CheckBox-Checked.svg";
import UnCheckBoxSvg from "../../../../public/assets/image/CheckBox.svg";

export const CheckBoxButton = styled.button`
  position: absolute;
  color: var(--b-60, #8f8f8f);
  width: 2rem;
  height: 2rem;
  z-index: 1003;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  top: 1rem;
`;

export const CheckedBox = styled(CheckBoxSvg)``;

export const UnCheckedBox = styled(UnCheckBoxSvg)``;
