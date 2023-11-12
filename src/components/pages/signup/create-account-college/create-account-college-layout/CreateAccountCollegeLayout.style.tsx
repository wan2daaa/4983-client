import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import BackButtonSvg from "../../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
  margin-top: 6.9rem;

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
export const MiniTitle = styled.div`
  color: #818181;
  text-align: center;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem; /* 166.667% */

  margin-top: 0.8rem;
`;
export const TitleBackButton = styled(BackButtonSvg)`
  position: absolute;
  top: 1.5rem;
  left: 1.7rem;
  width: 2rem;
  height: 2rem;
`;
