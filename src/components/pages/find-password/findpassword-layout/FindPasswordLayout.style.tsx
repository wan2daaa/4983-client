// TODO. BackButtonSvg 경로 수정 필요
import styled from "styled-components";
import BackButtonSvg from "../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100vw;
  background: #fff;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const TitleDiv = styled.div`
  position: relative;
  width: 100%;
  height: 5.2rem;
  background: var(--b-00, #fff);
`;

export const TitleBackButton = styled(BackButtonSvg)`
  position: absolute;
  top: 1.5rem;
  left: 1.7rem;
  width: 2rem;
  height: 2rem;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
`;

export const ExplainBox = styled.p`
  color: #36332e;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 160% */
  margin-top: 2.9rem;
  margin-bottom: 4.4rem;
`;
