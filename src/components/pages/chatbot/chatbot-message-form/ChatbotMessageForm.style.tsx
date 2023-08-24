import styled from "styled-components";
import { Font } from "../../../../../public/assets/fonts/Font";

export const Box = styled.div`
  position: relative;
`;

export const ChatbotProfileDiv = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 43px;
  height: 43px;
`;

export const ChatbotName = styled.a`
  position: absolute;
  top: 19.04px;
  left: 56.96px;
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 142.857%;
`;

export const ChabotMessageDiv = styled.div`
  position: absolute;
  top: 41px;
  left: 51px;
  width: 243px;
  height: 99px;
  border-radius: 10px;
  background: #f6f6f6;

  text-align: center;
  color: var(--b-80, #414141);
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 142.857%;
`;
