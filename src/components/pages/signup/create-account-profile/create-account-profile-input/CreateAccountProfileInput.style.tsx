import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import OffCheckButton from "../../../../../../public/assets/image/signup/OffCheckButton.svg";
import OffCircleCheckButton from "../../../../../../public/assets/image/signup/OffCircleCheckButton.svg";
import OnCheckButton from "../../../../../../public/assets/image/signup/OnCheckButton.svg";
import OnCircleCheckButton from "../../../../../../public/assets/image/signup/OnCircleCheckButton.svg";

export const Div = styled.div`
  margin-top: 4.51rem;
  width: 37.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HakbunTag = styled.div`
  color: #02be7c;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 213.333% */
  align-self: start;
  margin-left: 3.2rem;
`;

export const HakbunInputArea = styled.div`
  display: flex;
`;

export const HakbunInput = styled.input`
  display: flex;
  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  border: none;
  border-bottom: 0.05rem solid #818181;

  width: 22.8rem;
  height: 3.2rem;

  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;

export const HakbunNotice = styled.div`
  color: #f61818;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 320% */
  align-self: start;

  height: 1.5rem;
  margin-left: 3.5rem;
`;
export const HakbunButtonDiv = styled.div``;
export const HakbunButton = styled.button`
  display: flex;
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: #d1d1d1;

  margin-left: 0.9rem;

  color: #50555c;
  font-size: ${Font.Size.M};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
  justify-content: center;
`;
export const NicknameTag = styled.div`
  color: #02be7c;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 213.333% */
  align-self: start;
  margin-left: 3rem;

  margin-top: 2.2rem;
`;
export const NicknameInputArea = styled.div`
  display: flex;
`;
export const NicknameInput = styled.input`
  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  border: none;
  border-bottom: 0.05rem solid #818181;

  width: 22.8rem;
  height: 3.2rem;

  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;

export const NicknameNoticeSuccess = styled.div`
  color: #02b878;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 320% */
  align-self: start;

  height: 1.5rem;
  margin-left: 3.5rem;
`;

export const NicknameNotice = styled.div`
  color: #f61818;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 320% */
  align-self: start;

  height: 1.5rem;
  margin-left: 3.5rem;
`;
export const NicknameButtonDiv = styled.div`
  display: flex;
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: #d1d1d1;

  margin-left: 0.9rem;
`;

export const NicknameButton = styled.button`
  display: flex;
  width: 7.2rem;
  height: 3.3rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: #d1d1d1;

  color: #50555c;
  font-size: ${Font.Size.M};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 228.571% */
  justify-content: center;
`;
export const PasswordNotice = styled.p`
  color: #50555c;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 320% */
  align-self: start;

  height: 1.5rem;
  margin-left: 3.5rem;
`;
export const PassworndInput = styled.input`
  display: flex;
  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  border: none;
  border-bottom: 0.05rem solid #818181;

  width: 27.90018rem;
  align-self: start;

  height: 1.5rem;
  margin-left: 3.3rem;
  margin-top: 4.51rem;

  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;
export const RepasswordNotice = styled.div`
  color: #f61818;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 320% */
  align-self: start;

  height: 1.5rem;
  margin-left: 3.5rem;
`;
export const RepasswordInput = styled.input`
  display: flex;
  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */

  border: none;
  border-bottom: 0.05rem solid #818181;

  align-self: start;

  margin-left: 3.3rem;
  width: 27.90018rem;
  margin-top: 3.36rem;

  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;
export const TermsDiv = styled.div`
  display: flex;
  width: 31.2rem;
  height: 20.64rem;

  border-radius: 1.5rem;
  border: 1px solid #d1d1d1;
  background: #fff;
  flex-direction: column;

  margin-top: 1.7rem;
`;
export const TermsAllCheckDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 1.3rem;
  gap: 0.9rem;
  height: 4.612rem;
  width: 27.9002rem;
  border-bottom: 0.05rem solid #818181;
`;
export const TermsAllCheck = styled.button`
  display: flex;
  align-items: center;
  width: 14.8rem;
  height: 3.072rem;

  color: #36332e;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
`;
export const TermsOfUseCheckDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 1.5rem;
  gap: 1rem;
  height: 3.072rem;
  width: 27.9002rem;
  margin-top: 1.4rem;
`;
export const TermsOfUseCheck = styled.button`
  display: flex;
  align-items: center;
  width: 14.8rem;
  height: 3.072rem;

  color: #36332e;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
  text-decoration-line: underline;
`;
export const PersonalInformationCheckDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 1.5rem;
  gap: 1rem;
  height: 3.072rem;
  width: 27.9002rem;
  margin-top: 1.18rem;
`;
export const PersonalInformationCheck = styled.button`
  display: flex;
  align-items: center;
  width: 18.5rem;
  height: 3.072rem;

  color: #36332e;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
  text-decoration-line: underline;
`;
export const AdvertisementCheckDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 1.5rem;
  gap: 1rem;
  height: 3.072rem;
  width: 27.9002rem;
  margin-top: 1.18rem;
`;
export const AdvertisementCheck = styled.button`
  display: flex;
  align-items: center;
  width: 18.5rem;
  height: 3.072rem;

  color: #36332e;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
  text-decoration-line: underline;
`;
export const OffCheckButtonSvg = styled(OffCheckButton)`
  width: 1.8rem;
  height: 1.5rem;
`;
export const OffCircleCheckButtonSvg = styled(OffCircleCheckButton)`
  width: 2rem;
  height: 2rem;
`;
export const OnCheckButtonSvg = styled(OnCheckButton)`
  width: 1.8rem;
  height: 1.5rem;
`;
export const OnCircleCheckButtonSvg = styled(OnCircleCheckButton)`
  width: 2rem;
  height: 2rem;
`;
export const CheckButtonDiv = styled.button`
  margin-top: 3.64rem;
`;
export const CheckButton = styled.button`
  width: 30.9rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  border: 1px solid #d1d1d1;
  background: #d1d1d1;

  color: #707479;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 213.333% */

  margin-bottom: 4.6rem;
  position: relative;
`;
