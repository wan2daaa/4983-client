import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import * as style from "@/components/pages/selling/for-sale/for-sale-photo-form/ForSalePhotoForm.style";
import "swiper/css";

interface BookViewProps {
  bookImage: string[];
}

export default function ForSalePhotoForm({ bookImage }: BookViewProps) {
  const swiperParams = {
    loop: false,
    slidesPerView: bookImage.length === 1 ? 1 : 1.12,
    spaceBetween: 1,
  };

  return (
      <style.PhotoDiv>
        {bookImage.length === 1 ? (
            <style.PhotoBox>
              <style.PhotoA
                  src={bookImage[0]}
                  width={44}
                  height={44}
                  alt="profile"
              />
            </style.PhotoBox>
        ) : (
            <style.StyledSwiper {...swiperParams}>
              {bookImage.map((photo, index) => (
                  <SwiperSlide key={photo}>
                    <style.MultiplePhotoBox>
                      <style.MultiplePhoto src={photo} />
                    </style.MultiplePhotoBox>
                  </SwiperSlide>
              ))}
            </style.StyledSwiper>
        )}
      </style.PhotoDiv>
  );
}
