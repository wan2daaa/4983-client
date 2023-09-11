import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import BackButtonSvg from "../../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #fff;
`;
export const TitleDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 5.2rem;
  background: var(--b-00, #fff);
  border-bottom: 0.6rem solid #f6f6f6;
`;

export const Title = styled.a`
  position: absolute;
  top: 1.5rem;
  width: 37.5rem;
  height: 3.2rem;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  text-align: center;
`;

export const TitleBackButton = styled(BackButtonSvg)`
  position: absolute;
  top: 1.5rem;
  left: 1.7rem;
  width: 2rem;
  height: 2rem;
`;
