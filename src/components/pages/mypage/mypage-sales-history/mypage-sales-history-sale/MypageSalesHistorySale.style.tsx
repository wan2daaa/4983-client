import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.span`
  color: #bebebe;
  text-align: center;
  font-family: SF Pro Display;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.5rem; /* 175% */
  margin-top: 16.1rem;
`;
export const Br = styled.br``;

export const GoSalesButton = styled.div`
  display: flex;
  width: 17.9rem;
  height: 4.4rem;
  padding: 0.8rem 2.2rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4rem;
  background: #02b878;

  color: #fffbf2;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem; /* 133.333% */

  margin-top: 3.2rem;
`;

export const ContentDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  text-align: center;

  top: 13.4rem;
  height: calc(100vh - 13.4rem);
  padding-bottom: 9rem;
  flex-direction: column;
  z-index: 1000;
  overflow-y: scroll;
  background: #fff;
`;