import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  width: 37.5rem;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.2rem;
`;
export const ChartBox = styled.div`
  height: 41.5rem;
  width: 37.5rem;
  background: #fff;
  box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.1);

  border-top: 0.05rem solid #818181;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  overflow-y: auto;
`;
export const BigChart = styled.div`
  display: flex;
  width: 37.6rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #fff;
  border-bottom: 0.05rem solid #ececec;
`;
export const BigChartInner = styled.div`
  color: var(--b-100, #36332e);
  text-align: center;
  font-size: ${Font.Size.M};
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 142.857% */
`;
export const Button = styled.button`
  width: 30.9rem;
  height: 5.2rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: #d1d1d1;

  color: #707479;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 213.333% */

  margin-top: 7.5rem;
`;
