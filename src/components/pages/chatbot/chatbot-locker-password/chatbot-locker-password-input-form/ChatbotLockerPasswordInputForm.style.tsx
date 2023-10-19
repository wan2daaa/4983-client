import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const ContentBoldDiv = styled.div`
  width: 19.9rem;
  height: 1.7rem;
  margin-top: 3.7rem;
  margin-left: 2.5rem;
`;

export const ContentBold = styled.p`
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 700;
`;

export const LockerPasswordDiv = styled.div`
  position: fixed;
  left: 50%;
  top: 13.1rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;
export const LockerPasswordInput = styled.input`
  width: 35.2rem;
  border: none;
  border-bottom: 1px solid #eee;
  padding: 0.5rem 1.3rem;

  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 400;

  ::placeholder {
    color: #d1d1d1;
  }
`;

export const ContentDiv = styled.div`
  position: fixed;
  left: 50%;
  top: 16.9rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

export const Content = styled.p`
  width: 35.2rem;
  height: 3.6rem;

  color: #02b878;
  font-size: ${Font.Size.S};
  font-weight: 400;
  line-height: 1.8rem;
`;

export const ContentBr = styled.br``;
