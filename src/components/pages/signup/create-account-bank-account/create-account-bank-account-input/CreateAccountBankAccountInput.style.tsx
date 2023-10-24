import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import DownArrowSvg from "../../../../../../public/assets/image/signup/ArrowDown.svg";

export const Div = styled.div`
  margin-top: 12rem;
  width: 37.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DepositorTag = styled.div`
  color: #02be7c;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 213.333% */

  align-self: start;
  margin-left: 4.8rem;
`;
export const DepositorInputArea = styled.div``;
export const DepositorInput = styled.input`
  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  border: none;
  border-bottom: 0.05rem solid #818181;

  width: 27.90018rem;
  height: 3.2rem;
  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;
export const BankTag = styled.div`
  color: #02be7c;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 213.333% */

  margin-top: 2rem;
  align-self: start;
  margin-left: 4.8rem;
`;
export const BankInputArea = styled.div`
  border-bottom: 0.05rem solid #818181;
  width: 27.90018rem;
  display: flex;
  gap: 11.8rem;
`;
export const BankInput = styled.input`
  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  border: none;

  width: 13.1rem;
  height: 3.2rem;
`;
export const DownArrow = styled(DownArrowSvg)`
  width: 2.5rem;
  height: 2rem;
`;

export const BankList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 22.9rem;
  max-height: 16.4rem;
  overflow-y: auto;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.1);
  margin-left: 4.8rem;
  margin-top: 4.5rem;
`;
export const PureBankList = styled.li`
  width: 22.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-bottom: 0.05rem solid #818181;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;
export const BankAccountTag = styled.div`
  color: #02be7c;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 213.333% */

  margin-top: 1.7rem;
  align-self: start;
  margin-left: 4.8rem;
`;
export const BankAccountInputArea = styled.div``;
export const BankAccountInput = styled.input`
  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  border: none;
  border-bottom: 0.05rem solid #818181;

  width: 27.9rem;
  height: 3.2rem;
  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;
export const CheckButtonArea = styled.div`
  margin-top: 18.7rem;
`;
export const CheckButton = styled.button`
  width: 30.9rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  border: 1px solid #d1d1d1;
  background: #d1d1d1;

  color: #707479;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 213.333% */

  position: relative;
`;
