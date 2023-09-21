import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  z-index: 1003;
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
