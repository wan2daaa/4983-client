import styled from "styled-components";
import BackButtonSvg from "../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;
`;

export const TopDiv = styled.div`
  position: fixed;
  height: 5.6rem;
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
`;

export const TitleA = styled.a`
  position: absolute;
  margin-left: 11rem;
  width: 16rem;
  height: 4.1209rem;
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  line-height: 4.8rem;
  z-index: 1003;
  background: #fff;
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

export const BottomLineDiv = styled.div`
  position: fixed;
  width: 95%;
  top: 4.4rem;
  margin: 0 1.2rem;
  height: 1.2rem;
  z-index: 1003;

  border-bottom: 0.01rem solid #eee;
`;
