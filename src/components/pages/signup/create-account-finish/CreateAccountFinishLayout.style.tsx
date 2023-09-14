import styled from "styled-components";
import Image from "next/image";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckImage = styled(Image)`
  width: 10.5rem;
  height: 10.5rem;

  margin-top: 28.5rem;
`;

export const Title = styled.span`
  top: 1.5rem;
  width: 23rem;
  height: 3.4rem;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  margin-top: 5.8rem;

  color: #02b878;
  text-align: center;
  font-style: normal;
  line-height: 3.2rem; /* 160% */

  margin-top: 2.9rem;
`;

export const CheckButton = styled.button`
  width: 30.9rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: #02b878;

  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 213.333% */

  margin-top: 23.1rem;

  position: relative;
`;
