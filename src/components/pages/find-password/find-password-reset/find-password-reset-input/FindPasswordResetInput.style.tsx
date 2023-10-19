import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

interface PasswordProps {
  passwordError: boolean;
}

export const Div = styled.div`
  margin-top: 9.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const NewPasswordTag = styled.div`
  color: #02be7c;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 213.333% */
`;

export const NewPasswordInputArea = styled.div``;

export const NewPasswordInput = styled.input<PasswordProps>`
  color: #818181;

  display: flex;
  width: 27.9rem;
  height: 3.2rem;
  flex-shrink: 0;
  border: none;
  border-bottom: 0.05rem solid #818181;

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  text-indent: 0;
`;

export const NewPasswordNotice = styled.div`
  color: #50555c;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 320% */
`;

export const NewPasswordCheckTag = styled.div`
  color: #36332e;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 213.333% */

  margin-top: 2rem;
`;
export const NewPasswordCheckInputArea = styled.div`
  position: relative;
`;

export const NewPasswordCheckInput = styled.input`
  color: #818181;

  display: flex;
  width: 27.9rem;
  height: 3.2rem;
  flex-shrink: 0;
  border: none;
  border-bottom: 0.05rem solid #818181;

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  text-indent: 0;
`;

export const NewPasswordCheckNotice = styled.div`
  position: absolute;
  color: #f00;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 320% */
`;

export const CheckButtonDiv = styled.div`
  bottom: 8.2rem;
  width: 100%;

  margin-top: 22.2rem;
`;

export const CheckButton = styled.button<{ isDisabled: boolean }>`
  width: 30.9rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  border: 1px solid #d1d1d1;
  background: ${props => (props.isDisabled ? "#d1d1d1" : "#02B878")};

  color: ${props => (props.isDisabled ? "#707479" : "#fff")};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 213.333% */
`;
