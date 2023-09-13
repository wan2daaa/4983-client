import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import * as style from "@/components/pages/for-sale/for-sale-photo-form/ForSalePhotoForm.style";
import "swiper/css";

interface Photo {
  id: number;
  url: string;
}

export default function ForSalePhotoForm() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const swiperParams = {
    loop: false,
    slidesPerView: photos.length === 1 ? 1 : 1.12,
    spaceBetween: 1,
  };
  // useEffect(() => {
  //   async function fetchPhotos() {
  //     try {
  //       const response = await fetch("API, DB URL");
  //       const data = await response.json();
  //       setPhotos(data);
  //     } catch (error) {
  //       console.error("사진 정보를 가져오는 중에 오류가 발생했습니다.", error);
  //     }
  //   }
  //   fetchPhotos();
  // }, []);

  return (
    <style.PhotoDiv>
      {/* {photos.length === 1 ? ( */}
      <style.PhotoBox>
        <style.PhotoA
          src="/assets/image/BookImgex1.png"
          width={44}
          height={44}
          alt="profile"
        />
      </style.PhotoBox>
      {/* ) : ( */}
      {/*  <style.StyledSwiper {...swiperParams}> */}
      {/*    {photos.map(photo => ( */}
      {/*      <SwiperSlide key={photo.id}> */}
      {/*        <style.MultiplePhotoBox> */}
      {/*          <style.MultiplePhoto src={photo.url} /> */}
      {/*        </style.MultiplePhotoBox> */}
      {/*      </SwiperSlide> */}
      {/*    ))} */}
      {/*  </style.StyledSwiper> */}
      {/* )} */}
    </style.PhotoDiv>
  );
}
