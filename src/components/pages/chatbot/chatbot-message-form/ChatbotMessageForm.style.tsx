import styled from "styled-components";
import { Font } from "../../../../../public/assets/fonts/Font";

export const Box = styled.div`
  position: relative;
`;

export const ChatbotProfileDiv = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  width: 4.3rem;
  height: 4.3rem;
`;

export const ChatbotName = styled.a`
  position: absolute;
  top: 1.904rem;
  left: 5.696rem;
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 142.857%;
`;

export const ChabotMessageDiv = styled.div`
  position: absolute;
  top: 4.1rem;
  left: 5.1rem;
  width: 24.3rem;
  height: 9.9rem;
  border-radius: 1rem;
  background: #f6f6f6;

  text-align: center;
  color: var(--b-80, #414141);
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 142.857%;
`;
