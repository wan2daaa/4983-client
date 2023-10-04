import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Container = styled.div`
  width: 37.5rem;
  height: 76.8rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TitleDiv = styled.div`
  width: 37.5rem;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  background: var(--b-00, #fff);
  border-bottom: 0.1rem solid #f6f6f6;
`;

export const Title = styled.a`
  width: 37.5rem;
  height: 3.25rem;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-style: normal;
  font-weight: 700;
  line-height: 5.2rem;
  text-align: center;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.3rem;
`;

export const HakbunTag = styled.a`
  display: flex;
  width: 2.8rem;
  height: 3.2rem;
  position: relative;
  color: #36332e;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem;
  margin: 0.4rem 31.4rem 0rem 3.9rem;
`;

export const InputHakbunArea = styled.div``;

export const InputHakbun = styled.input`
  position: relative;
  width: 30.9rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: 1px solid #fff;
  background: #f4f4f4;
  padding-left: 1.7rem;

  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
`;

export const PasswordTag = styled.a`
  display: flex;
  color: #36332e;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem;
  margin: 2rem 28.6rem 0rem 3.9rem;
`;

export const InputPasswordArea = styled.div``;

export const InputPassword = styled.input`
  position: relative;
  width: 30.9rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: 1px solid #fff;
  background: #f4f4f4;
  padding-left: 1.7rem;

  color: #818181;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
`;
export const WrongPassword = styled.a`
  position: absolute;
  color: #f61818;
  font-size: ${Font.Size.XS};
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 320% */
`;
export const Button = styled.button`
  position: relative;
  width: 30.9rem;
  height: 5.2rem;
  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: #02b878;
  margin-top: 4.5rem;

  color: #fff;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 213.333% */
`;
export const FindPasswordRegisterDiv = styled.div`
  position: relative;
  display: flex;
  margin-top: 0.6rem;
  gap: 0.5rem;
  align-items: center;
`;

export const etc = styled.a`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 3.2rem;
  display: flex;
`;
export const FindPassword = styled.div`
  display: flex;
  color: #36332e;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 290.909% */
`;
export const Register = styled.div`
  display: flex;
  color: #02b878;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 290.909% */
`;
