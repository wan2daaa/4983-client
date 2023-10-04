import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import SearchSvg from "../../../../../public/assets/image/Seacrch.svg";

export const Div = styled.div`
  position: relative;
`;

export const RecentDiv = styled.div`
  border-radius: 5rem;
  background: #ebebeb;
  height: 2.8rem;
  display: inline-block;
  z-index: 1003;
  padding: 0.4rem 1.4rem;
`;
export const RecentB = styled.span`
  display: flex;
  color: #858176;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  z-index: 1003;
`;
export const RecentSearchDiv = styled.div`
  position: fixed;
  display: flex;
  left: 1.6rem;
  top: 7.4rem;
  width: 9rem;
  height: 2.8rem;
  z-index: 1003;
`;

export const RecentA = styled.span`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem;
  z-index: 1003;
`;

export const RecentBox = styled.div`
  position: fixed;
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  left: 1.6rem;
  top: 11.2rem;
  width: 30.4rem;
  height: 5rem;
  z-index: 1003;
  gap: 1.1rem;
`;

export const MiddleDiv = styled.div`
  position: fixed;
  display: flex;
  top: 9.4rem;
  padding: 1rem 1rem 1rem 2rem;
  height: 4rem;
  gap: 0.4rem;
  align-items: flex-start;
  z-index: 1000;
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

export const ContentDiv = styled.div`
  position: relative;
  display: flex;
  height: 67.5rem;
  flex-direction: column;
  z-index: 1000;
  overflow-y: auto;
  background: #fff;
`;
