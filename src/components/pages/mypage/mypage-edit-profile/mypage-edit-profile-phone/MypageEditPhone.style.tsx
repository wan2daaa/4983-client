import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 19.8rem;
  background: #fff;
`;
export const PhoneTag = styled.a`
  position: absolute;
  color: #36332e;
  font-family: SF Pro Display;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 200% */
  left: 2.4rem;
  top: 1.2rem;
`;

export const InputPhoneArea = styled.div`
  position: absolute;
  display: flex;
  width: 32.8rem;
  height: 5.9rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: rgba(236, 236, 236, 0.6);

  top: 4.4rem;
  left: 2.1rem;
`;
export const InputPhone = styled.input`
  width: 19.2rem;
  height: 5.9rem;
  display: flex;
  background: none;
  color: #818181;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
  border: none;
  margin-left: 2rem;
`;
export const SendButton = styled.button`
  position: absolute;
  top: 1.3rem;
  left: 24.7rem;
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: rgba(2, 184, 120, 0.8);

  color: #fff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
`;
export const CertificationTag = styled.a`
  position: absolute;
  color: #36332e;
  font-family: SF Pro Display;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 200% */
  left: 2.4rem;
  top: 11.65rem;
`;

export const InputCertificationArea = styled.div`
  position: absolute;
  display: flex;
  width: 32.8rem;
  height: 5.9rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  border: 1px solid #fff;

  top: 14.5rem;
  left: 2.1rem;
`;
export const InputCertification = styled.input`
  width: 24.8rem;
  height: 3.2rem;
  display: flex;
  background: none;
  color: #818181;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
  border: none;
  border-bottom: 0.05rem solid #818181;
  padding-left: 0.5rem;
`;
export const CheckButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  left: 24.7rem;
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: #d1d1d1;

  color: #50555c;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
`;

export const CertificationNotice = styled.div`
  position: absolute;
  color: #f61818;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 266.667% */
  top: 17.6rem;
  left: 2.1rem;
`;
