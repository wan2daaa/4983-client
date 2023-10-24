import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  margin-top: 11.3rem;
  width: 37.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputPhoneTag = styled.div`
  color: #36332e;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 213.333% */
  align-self: start;
  margin-left: 3.1rem;
`;
export const InputPhoneArea = styled.div`
  display: flex;
  gap: 0.6rem;
`;
export const InputPhone = styled.input`
  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  border: none;
  border-bottom: 0.05rem solid #818181;

  width: 23.6rem;
  height: 3.2rem;

  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;
export const PhoneButton = styled.button`
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  color: #50555c;
  font-size: ${Font.Size.M};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */

  border-radius: 1.5rem;
  background: #d1d1d1;
  &::placeholder {
  }
`;
export const CertificationArea2 = styled.div`
  display: flex;
  margin-top: 4.8rem;
  width: 31.5rem;
`;
export const CertificationInputArea = styled.div`
  display: flex;
  width: 23.6rem;
  border-bottom: 0.05rem solid #818181;
  height: 3.3rem;
  gap: 0.6rem;
`;
export const CertificationInput = styled.input`
  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  border: none;

  width: 16.2rem;
  height: 3.2rem;
`;
export const CertificationTimer = styled.div`
  color: #f61818;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 320% */
  margin-left: 0.5rem;
`;
export const CertificationButton = styled.button`
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  color: #50555c;
  font-size: ${Font.Size.M};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
  margin-left: 0.8rem;

  border-radius: 1.5rem;
  background: #d1d1d1;
`;
export const SuccessMessage = styled.div`
  position: absolute;

  color: #02b878;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 320% */
  align-self: start;

  margin-top: 13.5rem;
  margin-left: 3rem;
`;
export const ErrorMessage = styled.div`
  position: absolute;

  color: #f00;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 2rem; /* 320% */
  align-self: start;

  margin-top: 13.5rem;
  margin-left: 3rem;
`;

export const CheckButtonDiv = styled.div`
  margin-top: 26.9rem;
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
