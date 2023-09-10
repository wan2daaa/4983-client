import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import * as style from "@/components/pages/mypage/mypage-edit-profile/mypage-edit-profile-layout/MypageEditProfileLayout.style";
import ScrollButtonSvg from "../../../../../../public/assets/image/mypage/Scroll.svg";

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 10.4rem;
  background: #fff;
`;
export const BankAccountTag = styled.a`
  position: absolute;
  color: #36332e;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 200% */
  left: 2.4rem;
  top: 1.2rem;
`;

export const BankAccountArea = styled.div`
  position: absolute;
  display: flex;
  width: 32.6rem;
  height: 5.9rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  border: 1px solid #fff;

  top: 4.4rem;
  left: 2.1rem;
  gap: 0.7rem;
`;
export const InputBankAccount = styled.input`
  width: 8.5rem;
  height: 5.9rem;
  color: #818181;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
  padding-left: 0.8rem;

  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: rgba(236, 236, 236, 0.6);
`;
export const BankAccountNumber = styled.input`
  width: 23.1rem;
  height: 5.9rem;
  color: #818181;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
  text-align: left;
  padding-left: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: rgba(236, 236, 236, 0.6);
`;
export const ScrollButton = styled(ScrollButtonSvg)`
  position: absolute;
  top: 2.2rem;
  left: 6.4rem;
  width: 2rem;
  height: 2rem;
`;
