import styled from "styled-components";
import getWindowScrollBarX from "@popperjs/core/lib/dom-utils/getWindowScrollBarX";
import { Font } from "@/assets/fonts/Font";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 5.6rem;
  background: var(--b-00, #fff);
  border-bottom: 0.1rem solid #f6f6f6;
`;

export const Title = styled.a`
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 700;
  line-height: 5.2rem;
`;

export const Image = styled.div`
  justify-content: center;
  margin-top: 2.3rem;
`;

export const HakbunBox = styled.a`
  position: relative;
  flex-direction: column;
  width: 30.9rem;
  height: 8.4rem;
  margin-top: 0.4rem;
`;

export const HakbunTag = styled.div`
  width: 2.8rem;
  height: 3.2rem;
  margin-left: 0.6rem;
  color: #36332e;
  font-size: ${Font.Size.L};
  font-weight: 700;
  line-height: 3.2rem;
`;

export const InputHakbun = styled.input`
  width: 30.9rem;
  height: 5.2rem;
  border-radius: 0.3125rem;
  border: 1px solid #fff;
  background: #f4f4f4;

  color: #818181;
  font-size: ${Font.Size.L};
  font-weight: 400;
  line-height: 3.2rem;
  padding-left: 1.7rem;
`;

export const PasswordBox = styled.div`
  position: relative;
  flex-direction: column;
  width: 30.9rem;
  height: 8.4rem;
  margin-top: 2rem;
`;

export const PasswordTag = styled.p`
  width: 5.6rem;
  height: 3.2rem;
  margin-left: 0.6rem;
  color: #36332e;
  font-size: ${Font.Size.L};
  font-weight: 700;
  line-height: 3.2rem;
`;

export const InputPassword = styled.input`
  width: 30.9rem;
  height: 5.2rem;
  border-radius: 0.3125rem;
  border: 1px solid #fff;
  background: #f4f4f4;

  color: #818181;
  font-size: ${Font.Size.L};
  font-weight: 400;
  line-height: 3.2rem;
  padding-left: 1.7rem;
`;

export const PasswordContainer = styled.div`
  position: absolute;
  flex-direction: row;
`;

export const PasswordImageButton = styled.button``;

export const WrongPassword = styled.a`
  position: absolute;
  width: 30.9rem;
  text-align: left;
  color: #f61818;
  font-size: ${Font.Size.XS};
  font-weight: 500;
  line-height: 3.2rem;
`;

export const RemembermeBox = styled.div`
  position: absolute;
  display: flex;
  width: 12.5rem;
  height: 3rem;
  margin-top: 3.1rem;
  align-items: center;
`;

export const RemembermeImage = styled.button`
  position: absolute;
  width: 2rem;
  height: 2rem;
  justify-items: center;
`;

export const RemembermeContent = styled.a`
  position: absolute;
  width: 10.5rem;
  height: 3rem;
  margin-left: 2.5rem;
  text-align: left;
  color: #36332e;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 3.2rem;
`;

export const Button = styled.button`
  width: 30.9rem;
  height: 5.2rem;
  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: #02b878;
  margin-top: 6.6rem;

  color: #fff;
  font-size: ${Font.Size.L};
  font-weight: 700;
  line-height: 3.2rem;
`;

export const FindPasswordRegisterDiv = styled.div`
  position: relative;
  width: 13.2rem;
  display: flex;
  flex-direction: row;
  margin-top: 0.6rem;
`;

export const etc = styled.a`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 3.2rem;
`;

export const FindPassword = styled.div`
  position: relative;
  width: 6.3rem;
  right: 0.7rem;
  color: #36332e;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 3.2rem;
`;
export const Register = styled.div`
  position: relative;
  width: 4.1rem;
  left: 0.8rem;
  color: #02b878;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 3.2rem;
`;
