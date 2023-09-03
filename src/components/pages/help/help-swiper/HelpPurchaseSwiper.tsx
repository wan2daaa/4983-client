import * as style from "@/components/pages/help/help-swiper/HelpPurchaseSwiper.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HelpPurchaseSwiper() {
  const swiperParams = {
    loop: false,
    slidesPerView: 1.5,
    spaceBetween: 13,
  };

  return (
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <style.PurchaseImageOne />
      </SwiperSlide>
      <SwiperSlide>
        <style.PurchaseImageTwo />
      </SwiperSlide>
      <SwiperSlide>
        <style.PurchaseImageThree />
      </SwiperSlide>
      <SwiperSlide>
        <style.PurchaseImageFour />
      </SwiperSlide>
    </Swiper>
  );
}
