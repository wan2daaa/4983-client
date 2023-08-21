import styled from "styled-components";
import BackButtonSvg from "../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  width: 23.4375rem;
  height: 48rem;
  background: #fff;
`;

export const TitleDiv = styled.div`
  position: relative;
  width: 23.4375rem;
  height: 2.75rem;
  display: flex;
  justify-content: center;
  background: var(--b-00, #fff);
`;

export const TitleA = styled.a`
  position: absolute;
  top: 0.44rem;
  left: 9.06rem;
  width: 6.375rem;
  height: 2.125rem;
  color: #000;
  //font-family: SF Pro Display;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TitleBackButton = styled(BackButtonSvg)`
  position: absolute;
  top: 0.44rem;
  left: 1rem;
  width: 1.25rem;
  height: 1.25rem;
`;
