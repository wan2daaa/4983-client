import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import BackButtonSvg from "../../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleDiv = styled.div`
  position: relative;
  width: 100%;
  height: 5.2rem;
  background: var(--b-00, #fff);
`;

export const Title = styled.a`
  position: relative;
  top: 1.5rem;
  left: 14.1rem;
  width: 9.6rem;
  height: 3.2rem;
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
export const RegistButton = styled.button`
  position: absolute;
  width: 8rem;
  height: 3rem;
  border-radius: 5rem;
  background: #02b878;
  right: 1.2rem;
  color: #fff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.2rem; /* 228.571% */
  top: 1rem;
`;
