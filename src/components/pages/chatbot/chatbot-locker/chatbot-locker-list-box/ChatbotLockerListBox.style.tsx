import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const ListBoxDiv = styled.div`
  position: relative;
  margin-top: 3.8rem;
  margin-left: 0.8rem;
  width: 7.8rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  background: #d9d9d9;
`;

export const ListBoxButton = styled.button`
  width: 2.1rem;
  height: 1.3rem;
  padding-top: 0.5rem;
  padding-left: 0.9rem;
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 700;

  // 로직 작업할 때 사용 (true 면 background color)
  &.true {
    background: linear-gradient(90deg, #00cd85 0%, #02be7c 100%);
  }
`;
