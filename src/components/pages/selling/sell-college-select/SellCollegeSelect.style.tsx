import styled from "styled-components";
import BackButtonSvg from "../../../../../public/assets/image/BackButton.svg";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;
`;

export const TopDiv = styled.div`
  position: relative;
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

export const TitleA = styled.span`
  position: relative;
  width: 9.9rem;
  height: 2rem;
  left: 9.4rem;
  top: 1.3rem;
  color: #000;
  font-size: 2rem;
  font-weight: 700;
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

export const CollegeDiv = styled.div`
  position: relative;
  height: 4.4rem;
  width: 100%;
  background: #fff;
  z-index: 1003;
  display: flex;
  flex-direction: column;
  border-bottom: 0.01rem solid #ececec;
`;

export const CollegeA = styled.span`
  position: relative;
  height: 2rem;
  justify-content: center;
  align-items: center;
  top: 1.3rem;
  color: #000;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  z-index: 1003;
  background: #fff;
`;
