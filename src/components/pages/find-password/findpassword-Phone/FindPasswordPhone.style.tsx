import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

interface PhoneNumberProps {
  isPhoneNumberValid: boolean;
}

interface CheckButtonProps {
  isCertificationCorrect: boolean;
}

export const FindPasswordPhone = styled.div``;
export const PhoneWord = styled.p`
  color: #02be7c;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 213.333% */
  width: 100%;

  margin-left: 4rem;
`;
export const WrongPhoneNumberMessage = styled.span`
  position: absolute;

  color: #f61818;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 320% */
  width: 25.9rem;
  padding-left: 4.3rem;
`;
export const InputPhoneArea = styled.div`
  display: flex;
  align-items: center;
`;

export const InputPhone = styled.input`
  display: flex;
  width: 20.1rem;
  height: 3.2rem;
  flex-shrink: 0;
  border: none;
  border-bottom: 0.05rem solid #818181;
  margin-left: 4.3rem;

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  text-indent: 0;
`;
export const PhoneButtonDiv = styled.div`
  display: flex;
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: #d1d1d1;

  margin-left: 0.9rem;
`;
export const PhoneButton = styled.button<PhoneNumberProps>`
  display: flex;
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  color: ${props => (props.isPhoneNumberValid ? "#fff" : "#50555C")};
  background-color: ${props =>
    props.isPhoneNumberValid ? "rgba(2, 184, 120, 0.80)" : "#D1D1D1"};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
  border-radius: 1.5rem;

  justify-content: center;
`;

export const InputCertificationArea = styled.div`
  position: relative;
  padding-top: 2.9rem;
`;

export const InputCertification = styled.input`
  display: flex;
  width: 27.1rem;
  height: 3.2rem;
  flex-shrink: 0;
  border: none;
  border-bottom: 0.05rem solid #818181;
  margin-left: 4.3rem;

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
  margin-top: 0.3rem;
  margin-bottom: 7.6rem;

  text-indent: 0;
`;

export const LeftTimeSpan = styled.span`
  position: absolute;
  top: 3rem;
  left: 24.6rem;
  height: 3.2rem;

  color: #f61818;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 320% */
`;

export const CheckButtonDiv = styled.div``;
export const CheckButton = styled.button<CheckButtonProps>`
  background-color: ${props =>
    props.isCertificationCorrect ? "#02B878" : "#d1d1d1"};
  color: ${props => (props.isCertificationCorrect ? "#FFF" : "#707479")};
  width: 30.9rem;
  height: 5.2rem;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 213.333% */

  border-radius: 1.5rem;
  border: 1px solid #d1d1d1;
  margin-left: 10%;
  margin-right: 10%;

  justify-content: center;
`;

export const HelpButtonDiv = styled.div`
  margin: auto;
`;
export const HelpButton = styled.button`
  color: #acaeb0;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 246.154% */
  height: 2.9rem;

  border-bottom: 0.05rem solid #c5c5c6;
  margin: auto;
  display: block;
`;
