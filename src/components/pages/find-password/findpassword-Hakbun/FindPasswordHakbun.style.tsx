import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const FindPasswordHakbunArea = styled.div``;
export const HakbunWord = styled.p`
  color: #02be7c;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 213.333% */
  width: 100%;

  margin-left: 4rem;
`;

export const InputHakbunArea = styled.div`
  position: relative;
`;

export const InputHakbun = styled.input`
  display: flex;
  width: 27.9rem;
  height: 3.2rem;
  flex-shrink: 0;
  border: none;
  border-bottom: 0.05rem solid #818181;
  margin-left: 4.3rem;
  margin-bottom: 2rem;

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  text-indent: 0;
`;

export const WrongStudentIdSpan = styled.span`
  position: absolute;

  bottom: -3rem;
  left: 4.3rem;

  font-size: ${Font.Size.XS};
  color: #f61818;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 320% */
`;
