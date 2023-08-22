import styled from "styled-components";
import { Font } from "../../../../../public/assets/fonts/Font";

export const Box = styled.div`
  position: relative;
`;

export const ChatbotProfileDiv = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
`;

export const ChatbotName = styled.a`
  position: absolute;
  top: 1.19rem;
  left: 3.56rem;
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 1.25rem;
`;

export const ChabotMessageDiv = styled.div`
  position: absolute;
  top: 2.56rem;
  left: 3.19rem;
  width: 15.1875rem;
  height: 6.1875rem;
  border-radius: 0.625rem;
  background: #f6f6f6;

  text-align: center;
  color: var(--b-80, #414141);
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 1.25rem;
`;
