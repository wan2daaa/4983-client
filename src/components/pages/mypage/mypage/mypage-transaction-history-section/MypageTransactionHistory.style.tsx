import styled from "styled-components";
import image from "next/image";

export const Div = styled.div`
  width: 37.5rem;
  height: 14.5rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  border-bottom: 0.3rem solid #f6f6f6;
`;
export const Title = styled.a`
  color: #36332e;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 177.778% */
  margin-left: 1.6rem;
  margin-top: 0.5rem;
`;

export const TransactionHistoryArea = styled.div``;

export const SalesHistoryButtonDiv = styled.div`
  display: flex;
  top: 1.5rem;
  left: 1.7rem;
  width: 13rem;
  height: 3rem;
  gap: 0.7rem;
  margin-top: 1.4rem;
  margin-left: 1.5rem;
`;

export const SalesHistoryButton = styled(image)`
  width: 2.7rem;
  height: 2.6rem;
`;

export const SalesHistoryTag = styled.div`
  color: #36332e;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 177.778% */
`;

export const PurchaseHistoryButtonDiv = styled.div`
  display: flex;
  top: 1.5rem;
  left: 1.7rem;
  width: 13rem;
  height: 3rem;
  gap: 0.7rem;
  margin-top: 2rem;
  margin-left: 1.4rem;
`;

export const PurchaseHistoryButton = styled(image)`
  width: 2.7rem;
  height: 2.7rem;
`;

export const PurchaseHistoryTag = styled.span`
  color: #36332e;
  font-size: 1.8rem;
  width: 11rem;
  height: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 177.778% */
`;
