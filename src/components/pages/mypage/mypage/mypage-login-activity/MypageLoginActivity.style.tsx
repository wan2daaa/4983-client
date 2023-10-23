import styled from "styled-components";
import image from "next/image";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  width: 37.5rem;
  height: 21.1rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  border-bottom: 0.5rem solid #f6f6f6;
`;
export const Title = styled.a`
  color: #36332e;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 177.778% */
  margin-left: 1.6rem;
  margin-top: 1.4rem;
`;

export const LoginActivityArea = styled.div``;

export const LogoutArea = styled.div`
  border-bottom: 0.2rem solid #f6f6f6;
`;
export const LogoutButtonDiv = styled.div`
  display: flex;
  top: 1.5rem;
  left: 1.7rem;
  width: 13rem;
  height: 3rem;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
  margin-top: 1.3rem;
  margin-left: 1rem;
`;

export const LogoutButton = styled(image)`
  width: 3.1rem;
  height: 2.9rem;
`;

export const LogoutTag = styled.div`
  color: #36332e;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 177.778% */
  vertical-align: 0.6rem;

  display: inline;
`;
export const secedeArea = styled.div`
  border-bottom: 0.2rem solid #f6f6f6;
`;
export const secedeButtonDiv = styled.div`
  display: flex;
  top: 1.5rem;
  left: 1.7rem;
  width: 13rem;
  height: 3rem;
  gap: 0.4rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 1.4rem;
`;

export const secedeButton = styled(image)`
  width: 3.1rem;
  height: 2.9rem;
`;

export const secedeTag = styled.div`
  color: #36332e;
  font-size: 1.8rem;
  width: 11rem;
  height: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 177.778% */
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

  top: 26.2rem;
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
  top: 4.6rem;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 500;
  line-height: 3.2rem;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 28.1rem;
  height: 4.2rem;
  top: 9.8rem;
`;

export const ModalButton = styled.button`
  width: 13.2rem;
  height: 4.2rem;
  border-radius: 10rem;
  border: 1px solid #c0c0c0;
  background: #fff;

  color: #8e8e8e;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2rem;
`;
export const CloseButton = styled.button`
  width: 13.2rem;
  height: 4.2rem;
  border-radius: 10rem;
  background: #3a3a3a;

  color: #fff;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2rem;
`;
