import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const HelpButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 9.76605rem;
  padding: 0.8rem 2.2rem 4.5661rem 2.3rem;
  justify-content: center;
  align-items: center;
  background: var(--b-00, #fff);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05) inset;
`;

export const HelpButton = styled.div`
  display: flex;
  width: 32.9rem;
  height: 4.4rem;
  padding: 0.8rem 2.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 4rem;
  background: #02b878;
`;

export const HelpButtonContent = styled.span`
  color: #ffffff;
  font-size: ${Font.Size.XL};
  font-weight: 700;
  line-height: 2.4rem;
`;
