import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Font } from "@/assets/fonts/Font";
import OffCheckButton from "../../../../../../public/assets/image/signup/OffCheckButton.svg";
import OffCircleCheckButton from "../../../../../../public/assets/image/signup/OffCircleCheckButton.svg";
import OnCheckButton from "../../../../../../public/assets/image/signup/OnCheckButton.svg";
import OnCircleCheckButton from "../../../../../../public/assets/image/signup/OnCircleCheckButton.svg";

export const Div = styled.div`
  margin-top: 4.51rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HakbuynBox = styled.div`
  position: relative;
`;

export const HakbunTag = styled.p`
  color: #02be7c;
  font-size: ${Font.Size.L};
  font-weight: 500;
  line-height: 3.2rem;
  align-self: start;
`;

export const HakbunInputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 30.3002rem;
`;

export const HakbunInput = styled.input`
  width: 23.1002rem;
  height: 3.2rem;
  color: #818181;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 3.2rem;
  border: none;
  border-bottom: 0.05rem solid #818181;

  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;

export const HakbunNotice = styled.div<{ fontColor: string }>`
  position: absolute;
  color: ${({ fontColor }) => fontColor};
  font-size: ${Font.Size.XS};
  font-weight: 500;
  line-height: 1.5rem;
  align-self: start;
`;

export const HakbunButton = styled.button<{
  background: string;
  fontColor: string;
}>`
  width: 7.2rem;
  height: 3.3rem;
  margin-left: 0.4rem;
  display: flex;
  justify-content: center;
  border-radius: 1.5rem;
  background: ${({ background }) => background};

  color: ${({ fontColor }) => fontColor};
  font-size: ${Font.Size.M};
  font-weight: 500;
  line-height: 3.2rem;
`;
export const NicknameBox = styled.div`
  position: relative;
  margin-top: 2.47rem;
`;

export const NicknameTag = styled.p`
  color: #02be7c;
  font-size: ${Font.Size.M};
  font-weight: 500;
  line-height: 3.2rem;
  align-self: start;
`;

export const NicknameInputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 30.3002rem;
`;

export const NicknameInput = styled.input`
  width: 23.1002rem;
  height: 3.2rem;
  border: none;
  border-bottom: 0.05rem solid #818181;

  color: #818181;
  font-size: ${Font.Size.L};
  font-weight: 400;
  line-height: 3.2rem;

  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;

export const NicknameNoticeSuccess = styled.div`
  position: absolute;
  color: #02b878;
  font-size: ${Font.Size.XS};
  font-weight: 500;
  line-height: 1.5rem;
  align-self: start;
`;

export const NicknameNotice = styled.div`
  position: absolute;
  color: #f61818;
  font-size: ${Font.Size.XS};
  font-weight: 500;
  line-height: 1.5rem;
  align-self: start;
`;

export const NicknameButtonDiv = styled.div`
  display: flex;
  width: 7.2rem;
  height: 3.3rem;
  margin-left: 0.4rem;
  border-radius: 1.5rem;
  background: #d1d1d1;
`;

export const NicknameButton = styled.button<{
  background: string;
  fontColor: string;
}>`
  display: flex;
  justify-content: center;
  width: 7.2rem;
  height: 3.3rem;
  border-radius: 1.5rem;
  background: ${({ background }) => background};

  color: ${({ fontColor }) => fontColor};
  font-size: ${Font.Size.M};
  font-weight: 500;
  line-height: 3.2rem;
`;
export const PasswordBox = styled.div`
  position: relative;
  margin-top: 3.4rem;
`;

export const PasswordNotice = styled.p`
  position: absolute;
  color: #50555c;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  align-self: start;
`;
export const PasswordInput = styled.input`
  width: 30.3002rem;
  height: 3.072rem;
  border: none;
  border-bottom: 0.05rem solid #818181;
  color: #818181;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 3.2rem;

  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;

export const PasswordError = styled.p`
  position: absolute;
  color: #f61818;
  font-size: ${Font.Size.XS};
  font-weight: 500;
  line-height: 1.5rem;
  align-self: start;
`;

export const PasswordSuccess = styled.p`
  position: absolute;
  color: #02b878;
  font-size: ${Font.Size.XS};
  font-weight: 500;
  line-height: 1.5rem;
  align-self: start;
`;

export const SvgAiOutlineEye = styled(AiOutlineEye)`
  position: absolute;
  width: 2rem;
  height: 3.072rem;
  right: 2.3rem;
`;

export const SvgAiOutlineEyeInvisible = styled(AiOutlineEyeInvisible)`
  position: absolute;
  width: 2rem;
  height: 3.072rem;
  right: 2.3rem;
`;

export const RePasswordInput = styled.input`
  width: 30.3002rem;
  height: 3.072rem;
  border: none;
  border-bottom: 0.05rem solid #818181;
  color: #818181;
  font-size: ${Font.Size.L};
  font-weight: 400;
  line-height: 3.2rem;

  &:focus {
    border: none;
    border-bottom: 0.05rem solid #818181;
  }
`;

export const RePasswordNotice = styled.p<{ fontColor: string }>`
  position: absolute;
  color: ${({ fontColor }) => fontColor};
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 320% */
  align-self: start;

  height: 1.5rem;
`;

export const TermsDiv = styled.div`
  display: flex;
  width: 31.2rem;
  height: 20.64rem;
  margin-top: 4.7rem;
  border-radius: 1.5rem;
  border: 1px solid #d1d1d1;
  background: #fff;
  flex-direction: column;
`;
export const TermsAllCheckDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1.3rem;
  gap: 0.9rem;
  width: 27.9002rem;
  height: 4.9rem;
  border-bottom: 0.05rem solid #818181;
`;
export const TermsAllCheck = styled.button`
  display: flex;
  align-items: center;
  width: 14.8rem;
  height: 3.072rem;

  color: #36332e;
  font-size: ${Font.Size.L};
  font-weight: 600;
  line-height: 3.2rem;
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
  margin-top: 2.86rem;
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
