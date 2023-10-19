import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

interface ButtonProps {
  isPassword: boolean;
}

export const Div = styled.div`
  padding: 0 1.6rem;
`;

export const Button = styled.button``;

export const ButtonDiv = styled.div<ButtonProps>`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 34.3rem;
  padding: 1.8rem 0rem 1.7rem 0rem;
  border-radius: 1.6rem;
  background-color: ${props => (props.isPassword ? "#02B878" : "#ccc")};
`;

export const ButtonContent = styled.div<ButtonProps>`
  color: ${props => (props.isPassword ? "#fff" : "#898a8d")};
  font-size: ${Font.Size.L};
  font-weight: 600;
  line-height: 2.4rem;
`;
