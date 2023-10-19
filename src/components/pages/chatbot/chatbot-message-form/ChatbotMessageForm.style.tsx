import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Box = styled.div`
  position: relative;
`;

export const ChatbotProfileDiv = styled.div`
  position: absolute;
  top: 3rem;
  left: 0.8rem;
  width: 4.3rem;
  height: 4.3rem;
`;

export const ChatbotName = styled.a`
  position: absolute;
  top: 3.7rem;
  left: 5.696rem;

  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 142.857%;
`;

export const ChabotMessageDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  top: 6rem;
  left: 5.1rem;
  padding: 1.2rem 1.7rem;
  width: 24.3rem;
  height: auto;
  margin-top: 4rem;
  border-radius: 1rem;
  background: #f6f6f6;

  //text-align: center;
  color: var(--b-80, #414141);
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 142.857%;
`;

export const CreatedAtBox = styled.div`
  position: relative;
  width: 6rem;
  margin-top: -1rem;
  z-index: 1000;
  top: 5rem;
  left: 30rem;
  color: var(--b-60, #8f8f8f);
  font-size: ${Font.Size.S};
  font-weight: 400;
  line-height: 1.6rem;
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
  font-size: ${Font.Size.S};
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

export const PayButton = styled.button`
  width: 18.5rem;
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

export const ChatbotMessageTradeComplete = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  top: 6rem;
  left: 5.1rem;
  padding: 1.2rem 1.7rem;
  width: 20rem;
  height: auto;
  margin-top: 4rem;
  border-radius: 1rem;
  background: #f6f6f6;

  //text-align: center;
  color: var(--b-80, #414141);
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 142.857%;
`;
