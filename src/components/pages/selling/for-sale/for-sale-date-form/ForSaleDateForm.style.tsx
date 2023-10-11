import styled from "styled-components";
import CalenderSvg from "../../../../../../public/assets/image/BuyCalendar.svg";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 34.3rem;
  height: 8.4rem;
  margin-left: 0.7rem;
`;

export const DateDiv = styled.div`
  position: relative;
  background: #fff;
  display: flex;
  width: 16rem;
  height: 2rem;
`;
export const Calender = styled(CalenderSvg)`
  position: absolute;
  left: -0.3rem;
  top: 0.3rem;
  width: 3.7rem;
  height: 3.3rem;
`;

export const DateA = styled.span`
  position: relative;
  display: flex;
  width: 12.4rem;
  height: 1.8rem;
  top: 1.3rem;
  left: 4.1rem;
  color: #36332e;
  font-size: ${Font.Size.M};
  font-weight: 700;
  line-height: normal;
`;

export const CalenderContainer = styled.div`
  width: 28rem;
`;

export const CalenderDiv = styled.div`
  position: relative;
  top: 2rem;
  width: fit-content;
  height: 3.3rem;
  padding: 0.3rem 1.5rem;
  border-radius: 1.6rem;
  border: 1px solid #fff;
  background: #f6f6f6;
`;

export const CalenderDateA = styled.span`
  position: relative;
  width: fit-content;
  color: #36332e;
  font-size: ${Font.Size.M};
  font-weight: 700;
  line-height: 2.4rem;
`;
export const CalenderDateB = styled.span`
  position: relative;
  left: 0.9rem;
  top: 2.4rem;
  color: #36332e;
  font-size: ${Font.Size.XS};
  font-weight: 500;
`;

export const CalenderDateBold = styled.span`
  position: relative;
  color: #36332e;
  font-size: ${Font.Size.XS};
  font-weight: 700;
  line-height: normal;
`;
