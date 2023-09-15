import styled from "styled-components";
import { Swiper } from "swiper/react";

export const PhotoDiv = styled.div`
  position: relative;
  width: 36rem;
  display: flex;
  height: 21.2rem;
  background: #fff;
  top: 2.5rem;
`;

export const PhotoBox = styled.div`
  position: relative;
  width: 34.4rem;
  height: 20rem;
  left: 0.8rem;
  display: flex;
  border-radius: 1.5rem;
  background: #f6f6f6;
  top: 0.5rem;
`;

export const PhotoA = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

export const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const MultiplePhotoBox = styled.div`
  position: relative;
  width: 33rem;
  height: 20rem;
  left: 1.2rem;
  display: flex;
  border-radius: 1.5rem;
  background: #f6f6f6;
  top: 2rem;
`;

export const MultiplePhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;
