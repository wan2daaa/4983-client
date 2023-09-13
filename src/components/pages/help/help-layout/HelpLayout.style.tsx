import styled from "styled-components";
import Image from "next/image";
import { Font } from "@/assets/fonts/Font";

export const HelpBox = styled.div`
  width: 100%;
  height: 305.7rem;
`;

export const HelpImage = styled(Image)`
  width: 100%;
  height: 139.9rem;
`;

export const HelpContainer = styled.div`
  position: relative;
  width: 100%;
  height: 155.12rem;
`;

export const SaleTitle = styled.span`
  position: absolute;
  width: 7.4rem;
  height: 3.1711rem;
  color: #36332e;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  top: 7.3rem;
  left: 3rem;
`;

export const PurchaseTitle = styled.span`
  position: absolute;
  width: 7.4rem;
  height: 3.1711rem;
  color: #36332e;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  top: 56.45rem;
  left: 3rem;
`;

export const GuideTitle = styled.span`
  position: absolute;
  width: 20.9rem;
  height: 3.1711rem;
  color: #36332e;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  top: 105.66rem;
  left: 3rem;
`;

export const SaleFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 40.9rem;
  display: inline-flex;
  padding: 2rem 1.5rem 7.9552rem 2.8rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.3rem;
  border: 0.4px solid #c8c8c8;
  background: #fff;
  box-shadow: 0.3px 0.5px 3px 3px rgba(0, 0, 0, 0.1) inset;
  top: 10.41rem;
`;

export const PurchaseFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 40.9rem;
  display: inline-flex;
  padding: 2rem 1.5rem 7.9552rem 2.8rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.3rem;
  border: 0.4px solid #c8c8c8;
  background: #fff;
  box-shadow: 0.3px 0.5px 3px 3px rgba(0, 0, 0, 0.1) inset;
  top: 59.65rem;
`;

export const GuideFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 40.9rem;
  display: inline-flex;
  padding: 2rem 1.5rem 7.9552rem 2.8rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.3rem;
  border: 0.4px solid #c8c8c8;
  background: #fff;
  box-shadow: 0.3px 0.5px 3px 3px rgba(0, 0, 0, 0.1) inset;
  top: 108.88rem;
`;
