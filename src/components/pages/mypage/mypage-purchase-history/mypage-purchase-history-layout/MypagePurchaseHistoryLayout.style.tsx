import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import BackButtonSvg from "../../../../../../public/assets/image/BackButton.svg";
import Link from "next/link";

export const Div = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #fff;
`;
export const TitleDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.2rem;
  background: var(--b-00, #fff);
  border-bottom: 0.6rem solid #f6f6f6;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  z-index: 1000;
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

export const BackLink = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 1.2rem;
  width: 3rem;
  height: 3rem;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBackButton = styled(BackButtonSvg)`
  width: 2rem;
  height: 2rem;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.2rem;
  height: calc(100%- 5.2rem);

  text-align: center;

  overflow-x: auto;
  background: #fff;
`;
