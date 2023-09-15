import styled from "styled-components";
import SellHelpButtonSvg from "../../../../../../public/assets/image/SellHelpButton.svg";
import CalenderSvg from "../../../../../../public/assets/image/Calendar.svg";

export const Div = styled.div`
  position: relative;
  top: 5rem;
  display: flex;
  flex-direction: column;
  width: 34.3rem;
  height: 13.3rem;
  margin-top: 0.6rem;
  margin-left: 1.6rem;
`;
export const PriceDiv = styled.div`
  position: relative;
  display: flex;
  width: 6.4rem;
  height: 1.8rem;
`;

export const PriceA = styled.span`
  position: relative;
  display: flex;
  width: 5.6rem;
  height: 1.8rem;
  left: 0.5rem;
  color: #818181;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
`;

export const Asterisk = styled.span`
  position: relative;
  display: flex;
  width: 0.7rem;
  height: 0.8rem;
  color: #ffdb57;
  font-size: 1.4rem;
  font-weight: 700;
  bottom: 0.1rem;
`;

export const PriceInput = styled.input`
  position: relative;
  display: flex;
  width: 34.3rem;
  padding-left: 1.5rem;
  height: 4rem;
  border-radius: 1.6rem;
  border: 1px solid #fff;
  background: #f6f6f6;
`;

export const DateDiv = styled.div`
  position: relative;
  display: flex;
  width: 15rem;
  height: 1.8rem;
  margin-top: 0.8rem;
`;

export const DateA = styled.span`
  position: relative;
  display: flex;
  width: 8.4rem;
  height: 1.8rem;
  left: 0.5rem;
  color: #818181;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
`;

export const SellHelpButtonDiv = styled.button`
  position: relative;
  display: flex;
  width: 1.4rem;
  height: 1.4rem;
`;
export const SellHelpButton = styled(SellHelpButtonSvg)``;

export const TooltipDiv = styled.div`
  position: fixed;
  top: 32rem;
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
  position: relative;
  display: flex;
  width: 13.5rem;
  height: 4rem;
  padding: 1rem 0.5rem 1rem 1.3rem;
  border-radius: 1.6rem;
  border: 1px solid #fff;
  background: #f6f6f6;
  gap: 0.5rem;
  .react-datepicker {
    color: #d1d1d1;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: inherit;
  }

  .react-datepicker__input-container input {
    background: #f6f6f6;
    width: 7.8rem;
    border: none;
    border-radius: 1.6rem;
    font-family: inherit;
    outline: none;
    cursor: pointer;
  }
`;

export const CalenderSVG = styled(CalenderSvg)`
  position: absolute;
  width: 2.1rem;
  height: 2.1rem;
  bottom: 1rem;
  right: 1.3rem;
`;
