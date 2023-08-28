import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  padding: 0 1.6rem;
`;

export const ButtonDiv = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 34.3rem;
  padding: 1.8rem 0rem 1.7rem 0rem;
  border-radius: 1.6rem;
  background: #ccc;

  // 로직 작업할 때 사용 (클릭하면 background color)
  &.click {
    background: #02b878;
`;

export const Button = styled.button`
  color: #898a8d;
  font-size: ${Font.Size.L};
  font-weight: 600;
  line-height: 2.4rem;

  // 로직 작업할 때 사용 (클릭하면 font color)
  &.click {
    color: #fff;
  }
`;
