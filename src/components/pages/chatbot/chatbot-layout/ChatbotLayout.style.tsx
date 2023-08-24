// TODO. BackButtonSvg 경로 수정 필요
import styled from "styled-components";
import BackButtonSvg from "../../../../../public/assets/image/BackButton.svg";
import { Font } from "../../../../../public/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  height: 768px;
  width: 100%;
  background: #fff;
`;

export const TitleDiv = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
  background: var(--b-00, #fff);
`;

export const Title = styled.a`
  position: absolute;
  top: 15px;
  left: 145px;
  width: 102px;
  height: 34px;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
`;

export const TitleBackButton = styled(BackButtonSvg)`
  position: absolute;
  top: 15px;
  left: 17px;
  width: 20px;
  height: 20px;
`;
