import * as style from "@/components/pages/help/help-swiper/HelpSaleSwiper.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HelpSaleSwiper() {
  const swiperParams = {
    loop: false,
    slidesPerView: 1.5,
    spaceBetween: 13,
  };

  return (
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <style.SaleImageOne />
      </SwiperSlide>
      <SwiperSlide>
        <style.SaleImageTwo />
      </SwiperSlide>
      <SwiperSlide>
        <style.SaleImageThree />
      </SwiperSlide>
      <SwiperSlide>
        <style.SaleImageFour />
      </SwiperSlide>
    </Swiper>
  );
}
