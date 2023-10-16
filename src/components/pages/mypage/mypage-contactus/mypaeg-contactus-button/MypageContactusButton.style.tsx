import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Box = styled.div`
  position: absolute;
  width: 37.5rem;
  height: 72.7rem;
  top: 5.1rem;
  background: #fff;
`;

export const FaqContainer = styled.div`
  position: relative;
  width: 32.9rem;
  margin-top: 2.4rem;
  margin-left: 2.2rem;
  margin-bottom: 2.2rem;
`;

export const FaqTitle = styled.div`
  width: 10.7rem;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 700;
  line-height: 5.2rem;
`;

export const FaqContent = styled.div`
  width: 32.9rem;
  height: auto;
  color: #000;
  font-size: ${Font.Size.S};
  font-weight: 500;
  line-height: 5.2rem;
  border-bottom: 0.1rem solid #f6f6f6;
`;

export const MoreButtonBox = styled.div`
  position: absolute;
  width: 2.3rem;
  height: 2.3rem;
  margin-top: -1.5rem;
  right: 1rem;
`;

export const MoreButton = styled.button``;

export const MoreContent = styled.div`
  width: 32.8rem;
  margin-bottom: 1rem;
  color: #818181;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
`;

export const Br = styled.br``;
export const Container = styled.div`
  position: relative;
  width: 32.9rem;
  height: 32.4rem;
  left: 2.2rem;
`;

export const HowToUseTag = styled.div`
  margin-bottom: 1.3rem;
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  line-height: 5.2rem;
`;
export const HowToUseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  left: 24rem;
  width: 8.9rem;
  height: 3.3rem;
  border-radius: 1.5rem;
  background: rgba(2, 184, 120, 0.8);

  color: #fff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
`;
export const ContactusTag = styled.a`
  top: 9.9rem;
  left: 2.2rem;
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 5.2rem; /* 260% */
`;

export const InputEmailArea = styled.div`
  display: flex;
  width: 32.8rem;
  height: 5.2rem;

  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: rgba(236, 236, 236, 0.6);
`;
export const InputEmail = styled.input`
  width: 26.4rem;
  height: 5.2rem;
  display: flex;
  background: none;
  border: none;
  margin-left: 1.5rem;

  &::placeholder {
    color: #818181;
    font-size: ${Font.Size.L};
    font-weight: 400;
    line-height: 3.2rem;
  }
`;

export const CopyEmailButton = styled.button`
  position: absolute;
  margin-top: 1rem;
  left: 24.7rem;
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: rgba(2, 184, 120, 0.8);

  color: #fff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
`;
export const EmailNotice = styled.div`
  margin-left: 1rem;
  margin-bottom: 1.3rem;
  width: 27.5rem;
  height: 3.2rem;

  color: #818181;
  font-size: ${Font.Size.S};
  font-weight: 400;
  line-height: 3.2rem;
`;
export const PhoneTag = styled.div`
  top: 25.2rem;
  left: 2.6rem;
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 5.2rem; /* 260% */
`;
export const InputPhoneArea = styled.div`
  display: flex;
  width: 32.8rem;
  height: 5.2rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: rgba(236, 236, 236, 0.6);

  top: 30.4rem;
  left: 1.6rem;
`;
export const InputPhone = styled.input`
  width: 26.4rem;
  height: 5.2rem;
  display: flex;
  background: none;
  border: none;
  margin-left: 1.5rem;

  &::placeholder {
    color: #818181;
    font-size: ${Font.Size.L};
    font-weight: 400;
    line-height: 3.2rem;
  }
`;
export const CopyPhoneButton = styled.button`
  position: absolute;
  margin-top: 1rem;
  left: 24.7rem;
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: rgba(2, 184, 120, 0.8);

  color: #fff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
`;

export const Div = styled.div``;
