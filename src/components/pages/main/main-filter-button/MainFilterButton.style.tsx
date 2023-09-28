import styled from "styled-components";
import CategorySvg from "../../../../../public/assets/image/CategoryButton.svg";

export const Div = styled.div`
  position: relative;
  display: flex;
`;
export const filterDiv = styled.div`
  position: fixed;
  display: flex;
  padding: 0.3rem 0.31rem 0.3rem 0.3rem;
  margin-left: 5rem;
  gap: 0.7rem;
  width: 100%;
  height: 3.9rem;
  background: #fff;
  top: 5.4rem;
  z-index: 1000;
`;

export const CategoryDiv = styled.div`
  position: fixed;
  display: flex;
  width: 3.7rem;
  height: 3.9rem;
  padding-left: 0.7rem;
  top: 5.5rem;
  z-index: 1003;
  background: #fff;
`;
export const CategoryButton = styled(CategorySvg)`
  position: relative;
  width: 3.7rem;
  height: 3.9rem;
  z-index: 1003;
  background: #fff;
`;
export const FilterButton = styled.div`
  height: 3.4rem;
  color: #8e8e8e;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  border-radius: 10rem;
  border: 1px solid #c0c0c0;
  background: #fff;
  padding: 0.8rem 1.2rem;
  z-index: 1003;
`;
export const FilterButtonClicked = styled.div`
  height: 3.4rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  border-radius: 10rem;
  background: #3a3a3a;
  padding: 0.8rem 1.2rem;
  color: #fff;
  z-index: 1003;
`;
