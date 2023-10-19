import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

interface ListBoxDivProps {
  isExists: boolean;
}

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 37.5rem;
  height: 51rem;
  top: 13.5rem;
`;

export const Button = styled.button``;
export const ListBoxDiv = styled.div<ListBoxDivProps>`
  position: relative;
  margin-top: 1.5rem;
  margin-left: 1.3rem;
  width: 7.8rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  background: ${({ isExists }) =>
    isExists ? "#d9d9d9" : "linear-gradient(90deg, #00cd85 0%, #02be7c 100%)"};
`;

export const ListBoxButton = styled.div`
  position: absolute;
  width: 2.1rem;
  height: 1.3rem;
  margin-top: 0.5rem;
  margin-left: 0.9rem;
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 700;
`;
