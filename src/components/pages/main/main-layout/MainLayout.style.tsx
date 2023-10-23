import styled from "styled-components";
import SearchSvg from "../../../../../public/assets/image/Seacrch.svg";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
`;
export const TopDiv = styled.div`
  position: fixed;
  height: 13.4rem;
  //width: 37.5rem;
  background: #fff;
  z-index: 1003;
`;
export const TitleDiv = styled.div`
  position: relative;

  //width: 37.5rem;
  height: 4.6493rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  z-index: 1003;
  background: #fff;
`;

export const TitleA = styled.span`
  width: 12.4rem;

  align-items: center;
  justify-content: center;
  text-align: center;

  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  line-height: normal;
  z-index: 1000;
`;

export const MiddleDiv = styled.div`
  position: fixed;
  display: flex;

  width: 100vw;

  padding: 1rem 1rem 1rem 2rem;
  height: 2.2rem;
  gap: 0.4rem;
  align-items: flex-start;
  z-index: 1003;
  background: #fff;
`;
export const MiddleA = styled.a`
  color: var(--b-100, #36332e);
  width: 14.5rem;
  height: 2rem;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2rem;
  z-index: 1000;
  background: #fff;
`;
export const MainTopSearchButton = styled(SearchSvg)`
  position: absolute;
  top: 1.45rem;
  right: 1.2rem;
  width: 2rem;
  height: 2rem;
  z-index: 1000;
  background: #fff;
`;

export const ContentDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin-top: 13.4rem;
  height: calc(100% - 13.4rem - 10.4rem);

  text-align: center;

  z-index: 1000;
  overflow-x: auto;
  background: #fff;
`;
