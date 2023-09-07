import styled from "styled-components";
import SearchSvg from "../../../../../public/assets/image/Seacrch.svg";
import KgSvg from "../../../../../public/assets/image/KategorieButton.svg";
import CheckBSvg from "../../../../../public/assets/image/CheckBox.svg";
import AllButton from "../../../../../public/assets/image/AllButton.svg";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;
`;
export const TopDiv = styled.div`
  position: fixed;
  height: 13.4rem;
  width: 100%;
  background: #fff;
  z-index: 1003;
`;
export const TitleDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 4.6493rem;
  z-index: 1003;
  background: #fff;
`;

export const TitleA = styled.a`
  position: absolute;
  top: 1.58rem;
  left: 12.5rem;
  width: 12.4rem;
  height: 4.1209rem;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 1000;
  background: #fff;
`;

export const CategoryDiv = styled.div`
  position: fixed;
  display: flex;
  padding-left: 1.8rem;
  top: 6.3rem;
  z-index: 1003;
  background: #fff;
  width: 100%;
`;
export const CategoryButton = styled(KgSvg)`
  position: fixed;
  width: 1.9rem;
  height: 1.9rem;
  z-index: 1003;
  background: #fff;
`;

export const MiddleDiv = styled.div`
  position: fixed;
  display: flex;
  top: 9.4rem;
  padding: 1rem 1rem 1rem 2rem;
  height: 4rem;
  gap: 0.4rem;
  align-items: flex-start;
  z-index: 1000;
  background: #fff;
`;
export const MiddleA = styled.a`
  color: var(--b-100, #36332e);
  width: 12.5rem;
  height: 2rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  z-index: 1000;
  background: #fff;
`;
export const MainTopSearchButton = styled(SearchSvg)`
  position: fixed;
  top: 1.45rem;
  right: 1.2rem;
  width: 2rem;
  height: 2rem;
  z-index: 1000;
  background: #fff;
`;