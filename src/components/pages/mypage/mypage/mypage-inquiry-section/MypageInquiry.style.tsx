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

export const InquiryArea = styled.div``;

export const HelpButtonDiv = styled.div`
  display: flex;
  top: 1.5rem;
  left: 1.7rem;
  width: 13rem;
  height: 3rem;
  gap: 0.9rem;
  margin-top: 1.4rem;
  margin-left: 1.5rem;
`;

export const HelpButton = styled(image)`
  width: 1.9rem;
  height: 2.9rem;
`;

export const HelpTag = styled.div`
  color: #36332e;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 177.778% */
  vertical-align: 0.6rem;

  display: inline;
`;

export const ContactUsButtonDiv = styled.div`
  display: flex;
  top: 1.5rem;
  left: 1.7rem;
  width: 13rem;
  height: 3rem;
  gap: 0.6rem;
  margin-top: 2rem;
  margin-left: 0.8rem;
`;

export const ConatactUsButton = styled(image)`
  width: 3rem;
  height: 2.8rem;
`;

export const ConatactUsTag = styled.span`
  color: #36332e;
  font-size: 1.8rem;
  width: 11rem;
  height: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 177.778% */
`;
export const TermsButtonDiv = styled.div`
  display: flex;
  top: 1.5rem;
  left: 1.7rem;
  width: 13rem;
  height: 3rem;
  gap: 0.4rem;
  margin-top: 2rem;
  margin-left: 1.1rem;
`;

export const TermsButton = styled(image)`
  width: 2.9rem;
  height: 3.3rem;
`;

export const TermsTag = styled.span`
  color: #36332e;
  font-size: 1.8rem;
  width: 11rem;
  height: 3.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 177.778% */
`;
