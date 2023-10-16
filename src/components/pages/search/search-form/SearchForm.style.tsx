import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const SearchFormBox = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 4.4rem);

  top: 4.4rem;
`;

export const Div = styled.div`
  position: relative;
`;

export const RecentDiv = styled.div`
  border-radius: 5rem;
  background: #ebebeb;
  height: 2.8rem;
  display: inline-block;
  z-index: 1004;
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
  position: relative;
  display: flex;

  width: 100%;
  height: 2.8rem;

  left: 1.6rem;
  top: 3rem;
  z-index: 1003;
`;

export const RecentSearchContainer = styled.div`
  position: relative;
  width: calc(100% - 3.2rem);

  left: 1.6rem;

  padding-top: 4rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
`;

export const RecentSearchSpan = styled.span`
  position: absolute;

  z-index: 1003;

  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem;
`;

export const FastTradeContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 4.2rem;

  top: 4.4rem;
  padding-left: 1.8rem;

  background-color: #fff;
  z-index: 1005;

  display: flex;
  align-items: center;
`;
export const FastTradeText = styled.span`
  width: 100%;
  margin-left: 0.6rem;

  color: var(--b-100, #36332e);
  font-weight: 600;
  line-height: 2rem;
  font-style: normal;

  background: #fff;

  z-index: 1000;
`;

export const ContentDiv = styled.div`
  position: relative;
  display: flex;
  height: 100%;

  top: 4.2rem;

  flex-direction: column;
  z-index: 1000;
  overflow-y: auto;
  background: #fff;
`;
