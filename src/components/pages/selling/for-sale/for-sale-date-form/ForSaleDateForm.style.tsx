import styled from "styled-components";
import SellHelpButtonSvg from "../../../../../../public/assets/image/SellHelpButton.svg";
import CalenderSvg from "../../../../../../public/assets/image/Calendar.svg";

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 34.3rem;
  height: 8.4rem;
  margin-left: 1.3rem;
`;

export const DateDiv = styled.div`
  position: relative;
  display: flex;
  width: 15rem;
  height: 1.8rem;
  top: 1.8rem;
`;

export const DateA = styled.span`
  position: relative;
  display: flex;
  width: 8.4rem;
  height: 1.8rem;
  color: #36332e;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: normal;
`;

export const SellHelpButtonDiv = styled.button`
  position: relative;
  display: flex;
  top: 0.1rem;
  width: 1.4rem;
  height: 1.4rem;
`;
export const SellHelpButton = styled(SellHelpButtonSvg)``;

export const TooltipDiv = styled.div`
  position: fixed;
  top: 42rem;
  left: 22rem;
  transform: translate(-50%, -50%);
  width: 18.9rem;
  height: 10rem;
  border-radius: 1.7rem;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  z-index: 1003;
`;

export const TooltipClose = styled.span`
  position: fixed;
  top: 0.8rem;
  left: 0.9rem;
  width: 0.8rem;
  height: 0.8rem;
  fill: var(--b-80, #414141);
  z-index: 1003;
`;
export const TooltipA = styled.p`
  position: fixed;
  top: 2.1rem;
  left: 1rem;
  justify-content: center;
  width: 17rem;
  height: 5.8rem;
  z-index: 1003;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 400;
`;

export const BoldText = styled.span`
  font-weight: 590;
`;

export const LastText = styled.span`
  font-weight: 590;
  color: #0fd08d;
`;

export const CalenderDiv = styled.div`
  top: 2.4rem;
  position: relative;
  display: flex;
  left: -0.1rem;
  width: 10rem;
  height: 4rem;
  border-radius: 1.6rem;
  border: 1px solid #fff;
  justify-content: center;
  background: #f6f6f6;
`;

export const CalenderDateA = styled.span`
  top: 0.6rem;
  position: relative;
  color: #36332e;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.4rem;
`;
