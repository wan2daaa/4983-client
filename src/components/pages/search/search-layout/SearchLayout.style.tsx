import styled from "styled-components";
import BackButtonSvg from "../../../../../public/assets/image/BackButton.svg";
import SearchSvg from "../../../../../public/assets/image/Seacrch.svg";

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
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px -0.5px 0px 0px rgba(0, 0, 0, 0.1) inset;
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

export const searchDiv = styled.div`
  position: absolute;
  display: flex;
  left: 5rem;
  top: 1rem;
  width: 25rem;
  height: 2.4rem;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  z-index: 1003;
`;
export const searchA = styled.input`
  position: absolute;
  border: none;
  display: flex;
  width: 20.4rem;
  height: 2.4rem;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  z-index: 1003;
`;

export const SearchButtonDiv = styled.button`
  position: fixed;
  top: 1.2rem;
  right: 1.6rem;
  width: 2rem;
  height: 2rem;
  z-index: 1000;
  background: #fff;
`;
export const SearchButton = styled(SearchSvg)``;

export const RecentSearchDiv = styled.div`
  position: fixed;
  display: flex;
  left: 1.6rem;
  top: 7.4rem;
  width: 9rem;
  height: 2.8rem;
  z-index: 1003;
`;

export const RecentA = styled.span`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem;
  z-index: 1003;
`;

export const RecentBox = styled.div`
  position: fixed;
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  left: 1.6rem;
  top: 11.2rem;
  width: 30.4rem;
  height: 5rem;
  z-index: 1003;
  gap: 1.1rem;
`;
