import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  display: flex;
  width: 39rem;
  height: 9.3rem;
  border-top: 0.01rem solid #ccc;
  background: #fff;
`;

export const BuyButton = styled.button`
  position: relative;
  top: 0.8rem;
  left: calc(50% + (390px * 0.5) - 0.9rem - 27rem);
  border-radius: 4rem;
  background: #02b878;
  color: #fff;
  width: 17.9rem;
  height: 4.4rem;
  padding: 0.8rem 2.2rem;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
`;

export const PriceA = styled.span`
  left: 3rem;
  top: 2rem;
  height: 2.4rem;
  position: relative;
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
`;

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(54, 51, 46, 0.5);
  z-index: 1001;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;

  top: 28.8rem;
  left: 3rem;
  width: 31.5rem;
  height: 16.5rem;
  border-radius: 3.4rem;
  background: #fff;
  z-index: 1002;
`;

export const ModalContent = styled.a`
  position: absolute;
  width: auto;
  height: 3.2rem;
  top: 2.9rem;
  font-size: ${Font.Size.XL};
  font-weight: 500;
  line-height: 3.2rem;
  color: #36332e;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 28.1rem;
  height: 4.2rem;
  top: 10.6rem;
`;

export const ModalButton = styled.button`
  width: 22.5rem;
  height: 4.2rem;
  border-radius: 10rem;
  background: #3a3a3a;

  color: #fff;
  font-size: ${Font.Size.XL};
  font-weight: 400;
  line-height: 2rem;
`;
