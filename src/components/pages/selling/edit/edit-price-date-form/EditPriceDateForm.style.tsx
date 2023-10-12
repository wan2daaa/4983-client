import styled from "styled-components";
import SellHelpButtonSvg from "../../../../../../public/assets/image/sell/SellHelpButton.svg";
import { Font } from "@/assets/fonts/Font";

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 34.3rem;
  margin-top: 1rem;
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
  font-size: ${Font.Size.M};
  font-weight: 600;
`;

export const Asterisk = styled.span`
  position: relative;
  width: 0.7rem;
  height: 0.8rem;
  color: #ffdb57;
  font-size: ${Font.Size.M};
  font-weight: 700;
  left: 0.3rem;
  bottom: 0.2rem;
`;

export const Asterisk2 = styled.span`
  position: relative;
  width: 0.7rem;
  height: 0.8rem;
  color: #ffdb57;
  font-size: ${Font.Size.M};
  font-weight: 700;
  bottom: 0.2rem;
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

  &::placeholder {
    color: #d1d1d1;
    font-size: ${Font.Size.M};
    font-weight: 400;
    line-height: 2.4rem;
  }
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
  width: 12rem;
  height: 1.8rem;
  left: 0.5rem;
  color: #818181;
  font-size: ${Font.Size.M};
  font-weight: 600;
  line-height: normal;
`;
export const InputDiv = styled.div`
  position: relative;
  display: flex;
  height: 4rem;
  gap: 0.1rem;
`;

export const SellHelpButtonDiv = styled.button`
  position: relative;
  display: flex;
  width: 1.4rem;
  height: 1.4rem;
`;
export const SellHelpButton = styled(SellHelpButtonSvg)``;

export const TooltipDiv = styled.div`
  position: absolute;
  top: calc(50% + 6.9rem);
  left: calc(50% + 5rem);
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
  font-size: ${Font.Size.XS};
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
    width: 100%;
    border: none;
    border-radius: 1.6rem;
    font-family: inherit;
    outline: none;
    cursor: pointer;

    background-image: url("/assets/image/Calendar.svg");
    background-size: 1.8rem 1.8rem;
    background-position: 9.2rem center;
    background-repeat: no-repeat;
  }

  .react-datepicker__input-container input::placeholder {
    color: #d1d1d1;
    font-size: ${Font.Size.M};
    font-weight: 400;
    line-height: 2.4rem;
    padding-left: 0.5rem;
  }
`;
export const TimeDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13.5rem;
  height: 4rem;
  padding: 1rem 0.6rem 1rem 3.6rem;
  border-radius: 1.6rem;
  border: 1px solid #fff;
  background: #f6f6f6;
  color: #d1d1d1;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  gap: 2.8rem;
  .react-datepicker {
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }

  .react-datepicker__input-container input {
    background: #f6f6f6;
    width: 100%;
    border: none;
    border-radius: 1.6rem;
    font-family: inherit;
    outline: none;
    cursor: pointer;

    background-image: url("/assets/image/sell/SellTimer.svg");
    background-size: 1.8rem 1.8rem;
    background-position: 7.2rem center;
    background-repeat: no-repeat;
  }

  .react-datepicker__input-container input::placeholder {
    color: #d1d1d1;
    font-size: ${Font.Size.M};
    font-weight: 400;
    line-height: 2.4rem;
    padding-left: 0.5rem;
  }
`;

export const DateTimeBox = styled.div`
  position: relative;
  width: 28rem;
  display: flex;
  background: #fff;
`;
