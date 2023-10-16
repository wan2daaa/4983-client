import styled from "styled-components";

interface AvailableDateDivProps {
    isSale: boolean;
}

export const ContentsBox = styled.div`
  position: relative;
  display: flex;
  width: 37.5rem;
  height: 11.3rem;
`;

export const PhotoBox = styled.div`
  position: relative;
  width: 12.5rem;
  height: 11.3rem;
`;
export const ContentsPhotoDiv = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1.1rem;
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
`;

export const ContentsDiv = styled.div`
  position: relative;
  padding-top: 2.2rem;
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 11.3rem;
`;

export const ContentsDivA = styled.div`
  height: 2.4rem;
  top: 2.2rem;
  display: flex;
  gap: 0.3rem;
`;

// StatusForsaleDiv -> 판매중
export const StatusSaleDiv = styled.div`
  color: #fff;
  text-align: center;
  width: 4.2rem;
  height: 1.7385rem;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.9rem;
  border-radius: 1.6rem;
  background: #02b878;
`;

// StatusTradingDiv -> 거래중
export const StatusTradingDiv = styled.div`
  color: #fff;
  text-align: center;
  width: 4.2rem;
  height: 1.7385rem;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.9rem;
  border-radius: 1.6rem;
  background: #fbc255;
`;

// StatusSoldOutDiv -> 거래완료
export const StatusSoldOutDiv = styled.div`
  color: #fff;
  background: rgba(171, 171, 171, 0.78);
  text-align: center;
  width: 4.2rem;
  justify-content: center;
  height: 1.7385rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 1.6rem;
  line-height: 1.8rem;
`;

export const NameDiv = styled.div`
  color: var(--b-100, #36332e);
  left: 1.3rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: 650;
  border-radius: 1rem;
`;

export const ContentsDivB = styled.div`
  height: 1.6rem;
  top: 5rem;
  display: flex;
`;
export const AvailableDateDiv = styled.div<AvailableDateDivProps>`
  color: #8f8f8f;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
  ${props =>
    props.isSale &&
    `
      color: #02B878;
    `}
`;

export const postedTimeDiv = styled.div`
  color: var(--b-60, #8f8f8f);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const priceDiv = styled.div`
  position: absolute;
  top: 6.8rem;
  color: var(--b-100, #36332e);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
`;
// div 큰 태그, 책마다 div 컴포넌트 분리 ,데이터 -> list  map으로 뿌려줌 -> 반복 , zindex 1000(판매하기,하단바) fixed
