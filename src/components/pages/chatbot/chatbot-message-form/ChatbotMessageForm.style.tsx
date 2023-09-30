import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Box = styled.div`
  position: relative;
  height: calc(14rem + 2rem);
  //수정필요
`;

export const ChatbotProfileDiv = styled.div`
  position: absolute;
  top: 5.1rem;
  left: 0.8rem;
  width: 4.3rem;
  height: 4.3rem;
`;

export const ChatbotName = styled.a`
  position: absolute;
  top: 6rem;
  left: 5.696rem;

  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 142.857%;
`;

export const ChabotMessageDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  top: 8.2rem;
  left: 5.1rem;
  padding: 1.2rem 1.7rem;
  width: 24.3rem;
  border-radius: 1rem;
  background: #f6f6f6;

  text-align: center;
  color: var(--b-80, #414141);
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 142.857%;
`;

export const RequestButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18.5rem;
  height: 3rem;
  margin-top: 1.2rem;
`;

export const RefuseButton = styled.button`
  width: 8.7rem;
  height: 3rem;
  border-radius: 3rem;
  border: 1px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  color: #362d2d;
  text-align: center;
  font-size: ${Font.Size.S}; //M
  font-weight: 700;
`;

export const AcceptButton = styled.button`
  width: 8.7rem;
  height: 3rem;
  border-radius: 3rem;
  border: 1px solid #eee;
  background: #02b878;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  color: #fff;
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 700;
`;
