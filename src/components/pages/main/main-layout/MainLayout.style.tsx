import styled from "styled-components";
import SearchSvg from "../../../../../public/assets/image/Seacrch.svg";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #fff;
`;
export const TopDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 13.4rem;
  background: #fff;
`;
export const TitleDiv = styled.div`
  width: 100%;
  height: 4.6493rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #fff;
`;

export const TitleA = styled.span`
  width: 12.4rem;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
`;

export const MainTopSearchButton = styled(SearchSvg)`
  position: absolute;
  top: 1.3rem;
  right: 1.2rem;
  width: 2rem;
  height: 2rem;
  background: #fff;
`;

export const MiddleDiv = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 2.2rem;
  margin-top: 1.8rem;
  margin-left: 1.6rem;
  gap: 0.4rem;
  align-items: flex-start;
  z-index: 1003;
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

export const ContentDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 13.4rem - 9.69787rem);
  margin-top: 13.4rem;
  text-align: center;
  overflow-x: auto;
  background: #fff;
  z-index: 1000;
`;
