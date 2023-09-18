import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
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
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 5.2rem;
  text-align: center;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.3rem;
  margin-bottom: 0rem;
`;

export const Input = styled.div``;

export const HakbunTag = styled.a`
  width: 2.8rem;
  height: 3.2rem;
  position: relative;
  color: #36332e;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem;
  margin: 31rem 31.4rem 0rem 3.3rem;
`;

export const InputHakbunArea = styled.div``;

export const InputHakbun = styled.input`
  display: flex;
  width: 30.9rem;
  height: 5.2rem;
  flex-shrink: 0;
  margin: 0.4rem 3.9rem 2rem 2.7rem;
  border-radius: 0.3125rem;
  border: 1px solid #fff;
  background: #f4f4f4;
  padding: 1rem;

  color: #818181;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
`;

export const PasswordTag = styled.a`
  position: relative;
  color: #36332e;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem;
  margin: 2rem 28.6rem 0rem 3.3rem;
`;

export const InputPasswordArea = styled.div``;

export const InputPassword = styled.input`
  display: flex;
  width: 30.9rem;
  height: 5.2rem;
  flex-shrink: 0;
  margin: 0.1rem 3.9rem 0rem 2.7rem;
  border-radius: 0.3125rem;
  border: 1px solid #fff;
  background: #f4f4f4;
  padding: 10px;

  color: #818181;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 213.333% */
`;
export const WrongPassword = styled.a`
  color: #f61818;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.2rem; /* 320% */
  margin: 0.9rem 23.9rem 28.3rem 3.9rem;
`;

export const ButtonDiv = styled.div`
  position: absolute;
  top: 48rem;
  display: flex;
  justify-content: center;
  width: 30.9rem;
  height: 5.2rem;
  border-radius: 1.5rem;
  border: 1px solid #fff;
  background: #02b878;
  margin: 2.1rem 3.9rem 0.6rem 2.7rem;
`;
export const Button = styled.button`
  width: 30.9rem;
  height: 5.2rem;
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem; /* 213.333% */
`;
export const FindPasswordRegisterDiv = styled.div`
  position: absolute;
  top: 54.1rem;
  display: flex;
  margin: 1rem 14.5rem 17.9rem 11.1rem;
  gap: 1.5rem;
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
