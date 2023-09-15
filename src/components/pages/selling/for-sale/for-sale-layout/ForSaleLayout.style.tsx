import styled from "styled-components";
import BackButtonSvg from "../../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;
`;

export const TopDiv = styled.div`
  position: fixed;
  height: 4.4rem;
  width: 100%;
  background: #fff;
  z-index: 1003;
  display: flex;
  flex-direction: column;
`;
export const TitleDiv = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 4.4rem;
  z-index: 1003;
  background: #fff;
  border-bottom: 0.1rem solid #eee;
`;

export const BackBox = styled.div`
  display: flex;
  width: 4.4rem;
  height: 4.4rem;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  z-index: 1003;
`;

export const BackButtonDiv = styled(BackButtonSvg)`
  width: 2rem;
  height: 2rem;
  z-index: 1003;
`;

export const BackColorDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.9rem 0.7rem 0 0.7rem;
  background: #eee;
`;

export const InDivA = styled.div`
  position: relative;
  top: 4.3rem;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  height: 40rem;
  background: #fff;
`;
export const InDivB = styled.div`
  position: relative;
  width: 100%;
  height: 43%;
  top: 4.4rem;
  background: #fff;
`;
