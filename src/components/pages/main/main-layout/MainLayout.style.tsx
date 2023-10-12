import styled from "styled-components";
import SearchSvg from "../../../../../public/assets/image/Seacrch.svg";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;
`;
export const TopDiv = styled.div`
  position: fixed;
  height: 13.4rem;
  width: 100%;
  background: #fff;
  z-index: 1003;
`;
export const TitleDiv = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 4.6493rem;
  z-index: 1003;
  background: #fff;
`;

export const TitleA = styled.span`
  width: 12.4rem;
  height: 4.1209rem;

  align-items: center;
  justify-content: center;
  text-align: center;

  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  line-height: normal;
  z-index: 1000;
  background: #ddd;
`;

export const MiddleDiv = styled.div`
  position: relative;
  display: flex;

  width: 100%;

  padding: 1rem 1rem 1rem 2rem;
  height: 4rem;
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
  position: fixed;
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

  top: 13.4rem;
  height: calc(100vh - 13.4rem);
  padding-bottom: 9rem;
  flex-direction: column;
  z-index: 1000;
  overflow-y: scroll;
  background: #fff;
`;
