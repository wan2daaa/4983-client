import styled from "styled-components";
import TimerSvg from "../../../../../../public/assets/image/sell/SellTimer.svg";

export const TimeDiv = styled.div`
  position: relative;
  display: flex;
  width: 13.5rem;
  height: 4rem;
  padding: 1rem 0.5rem 1rem 1.3rem;
  border-radius: 1.6rem;
  border: 1px solid #fff;
  background: #f6f6f6;
  gap: 0.5rem;
`;
export const TimeSvg = styled(TimerSvg)`
  position: absolute;
  width: 2.1rem;
  height: 2.1rem;
  bottom: 1rem;
  right: 1.3rem;
`;
