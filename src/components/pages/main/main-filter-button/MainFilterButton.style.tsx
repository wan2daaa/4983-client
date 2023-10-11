import styled from "styled-components";
import CategorySvg from "../../../../../public/assets/image/CategoryButton.svg";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  position: relative;
  display: flex;
  width: 37.5rem;
`;

export const CategoryDiv = styled.div`
  position: relative;
  display: flex;

  margin-left: 0.7rem;
  width: 3.7rem;
  height: 3.9rem;
  z-index: 1003;
`;
export const CategoryButton = styled(CategorySvg)`
  position: relative;
  width: 3.7rem;
  height: 3.7rem;
  z-index: 1003;
  background: #fff;
`;

export const filterDiv = styled.div`
  position: relative;
  display: flex;
  padding: 0.3rem 0.31rem 0.3rem 0.3rem;
  gap: 0.7rem;
  width: 100%;
  height: 3.9rem;
  background: #fff;

  white-space: nowrap;

  z-index: 1000;

  overflow-x: auto; /* 가로 스크롤 활성화 */
`;

export const FilterButton = styled.div`
  height: 3.4rem;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2rem;
  border-radius: 10rem;
  border: 1px solid #c0c0c0;
  background: #fff;
  padding: 0.8rem 1.2rem;
  color: #8e8e8e;
  white-space: nowrap;
  z-index: 1003;
`;

export const FilterButtonClicked = styled.div`
  height: 3.4rem;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2rem;
  border-radius: 10rem;
  background: #3a3a3a;
  padding: 0.8rem 1.2rem;
  color: #fff;
  z-index: 1003;
`;
