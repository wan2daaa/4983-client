import { Swiper, SwiperSlide } from "swiper/react";
import * as style from "@/components/pages/help/help-swiper/HelpGuideSwiper.style";
import "swiper/css";

export default function HelpGuideSwiper() {
  const swiperParams = {
    loop: false,
    slidesPerView: 1.5,
    spaceBetween: 13,
  };

  return (
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <style.GuideImageOne />
      </SwiperSlide>
      <SwiperSlide>
        <style.GuideImageTwo />
      </SwiperSlide>
      <SwiperSlide>
        <style.GuideImageThree />
      </SwiperSlide>
      <SwiperSlide>
        <style.GuideImageFour />
      </SwiperSlide>
    </Swiper>
  );
}
