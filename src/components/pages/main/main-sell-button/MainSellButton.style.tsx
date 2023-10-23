import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const SellBox = styled.div`
  position: fixed;
  bottom: 13.2rem;
  right: 0.9rem;
  width: 14.6rem;
  height: 6.2rem;
  z-index: 1002;
`;
export const SellButton = styled.div`
  position: fixed;
  color: #fff;
  text-align: center;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  line-height: 2.4rem;
  padding: 2.1rem 1.8rem;
  z-index: 1002;
  width: 14.6rem;
  height: 6.2rem;
  border-radius: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #02b878;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  //transform: translateX(-50%);
`;
