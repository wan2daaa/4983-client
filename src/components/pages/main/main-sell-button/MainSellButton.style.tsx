import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const SellBox = styled.div`
  position: fixed;
  width: 11.2rem;
  height: 4.7rem;
  right: 1.4rem;
  bottom: 12rem;
  border-radius: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #02b878;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 1002;
`;
export const SellButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  text-align: center;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  line-height: 2.4rem;
`;
