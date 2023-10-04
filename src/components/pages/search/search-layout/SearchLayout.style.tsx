import styled from "styled-components";
import BackButtonSvg from "../../../../../public/assets/image/BackButton.svg";
import SearchSvg from "../../../../../public/assets/image/Seacrch.svg";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  height: 76.8rem;
  width: 100%;
  background: #fff;
`;

export const TopDiv = styled.div`
  position: fixed;
  height: 4.4rem;
  width: 37.5rem;
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
  &::placeholder {
    color: var(--b-50, #d1d1d1);
    font-size: ${Font.Size.M};
    text-align: left;
    font-weight: 400;
    line-height: 2.4rem;
  }
  z-index: 1003;
`;

export const SearchButtonDiv = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.6rem;
  width: 2rem;
  height: 2rem;
  z-index: 1003;
  background: #fff;
`;
export const SearchButton = styled(SearchSvg)``;
