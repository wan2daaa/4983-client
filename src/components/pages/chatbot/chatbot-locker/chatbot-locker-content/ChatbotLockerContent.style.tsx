import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const ContentBoldDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 32rem;
  height: 1.7rem;
  margin-top: 1.9rem;
  margin-left: 2.8rem;
`;

export const ContentBold = styled.p`
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 700;
`;

export const ContentDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 32rem;
  height: 1.7rem;
  top: 1.7rem;
`;

export const Content = styled.p`
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 400;
`;
