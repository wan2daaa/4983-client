// TODO. BackButtonSvg 경로 수정 필요
import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import BackButtonSvg from "../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;
`;

export const TitleDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 5.2rem;
  top: 0;
  background: var(--b-00, #fff);
  background-color: #fff;
  z-index: 10000;
`;

export const Title = styled.a`
  position: absolute;
  top: 1.5rem;
  left: 14.5rem;
  width: 10.2rem;
  height: 3.4rem;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
`;

export const TitleBackButton = styled(BackButtonSvg)`
  position: absolute;
  top: 1.5rem;
  left: 1.7rem;
  width: 2rem;
  height: 2rem;
`;
