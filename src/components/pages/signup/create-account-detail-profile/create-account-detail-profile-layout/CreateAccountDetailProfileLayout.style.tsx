import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import BackButtonSvg from "../../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 37.5rem;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4.4rem;
  background: var(--b-00, #fff);
`;

export const Title = styled.span`
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  margin-top: 9.87rem;

  color: #36332e;
  text-align: center;
  font-style: normal;
  line-height: 3.2rem; /* 160% */
`;

export const GreenP = styled.p`
  color: #02b878;
  display: inline;
`;

export const Br = styled.br``;

export const TitleBackButton = styled(BackButtonSvg)`
  position: absolute;
  top: 1.5rem;
  left: 1.7rem;
  width: 2rem;
  height: 2rem;
`;
