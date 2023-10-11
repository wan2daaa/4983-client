import styled from "styled-components";
import { Swiper } from "swiper/react";
import ReMoveButtonSvg from "../../../../../../public/assets/image/EditRemoveButton.svg";
import { Font } from "@/assets/fonts/Font";
import PhotoCamera from "../../../../../../public/assets/image/PhotoCamera.svg";

export const PhotoDiv = styled.div`
  position: relative;
  width: 37.5rem;
  display: flex;
  height: 21.2rem;
  background: #fff;
  top: 5.3rem;
`;

export const CameraA = styled(PhotoCamera)`
  position: absolute;
  top: calc(50% - 4rem);
  left: calc(50% - 3rem);
`;

export const InstructionText = styled.p`
  position: absolute;
  top: 10.5rem;
  left: calc(50% - 10rem);
  z-index: 1000;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2.4rem;
  color: #818181;
`;

export const CountText = styled.p`
  position: absolute;
  top: 12.4rem;
  left: 14.1rem;
  color: #818181;
  z-index: 1000;
  font-size: ${Font.Size.M};
  font-weight: 400;
  line-height: 2.4rem;
`;
export const PlusText = styled.p`
  position: absolute;
  top: calc(50% - 3.1rem);
  left: calc(50% - 2.1rem);
  color: #818181;
  z-index: 1000;
  text-align: justify;
  font-size: 5rem;
  font-weight: 500;
  line-height: 2.4rem;
`;
export const SelectedPhotoBox = styled.div`
  position: relative;
  width: 33rem;
  height: 20rem;
  left: 1.2rem;
  display: flex;
  border-radius: 1.5rem;
  background: #f6f6f6;
  top: 0.5rem;
`;

export const SelectedPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: -0.5rem;
  top: -1rem;
  width: 3.3rem;
  height: 3.1rem;
  border-radius: 1.6rem;
  background: #f6f6f6;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const RemoveButtonSvg = styled(ReMoveButtonSvg)`
  width: 2rem;
  height: 2rem;
`;

export const CustomFileUpload = styled.label`
  position: relative;
  cursor: pointer;
  width: 33rem;
  height: 20rem;
  background: #f6f6f6;
  left: 1.2rem;
  color: #d1d1d1;
  border-radius: 1.5rem;
  display: inline-block;
`;

export const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Input = styled.input`
  display: none;
`;
