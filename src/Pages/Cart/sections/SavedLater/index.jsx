import React from "react";
import Card from "./Card";
import img1 from "../../../../Assets/image/cart/card1/1.png";
import img2 from "../../../../Assets/image/cart/card1/2.png";
import img3 from "../../../../Assets/image/cart/card1/4.png";
import img4 from "../../../../Assets/image/cart/card1/5.png";
import { Wrapper } from "./style";
import { FlexBetween } from "../../../../Global/components";
import NotMobile from "./../../../../Components/NotMobile/index";
import Mobile from "./../../../../Components/Mobile/index";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function SavedLater() {
  return (
    <Wrapper>
      <NotMobile>
        <h4>Saved for later</h4>
        <FlexBetween style={{ padding: "20px 0" }}>
          <Card img={img1} />
          <Card img={img2} />
          <Card img={img3} />
          <Card img={img4} />
        </FlexBetween>
      </NotMobile>
      <Mobile>
        <Swiper spaceBetween={50} slidesPerView={3}>
          <SwiperSlide>
            <Card img={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card img={img4} />
          </SwiperSlide>
        </Swiper>
      </Mobile>
    </Wrapper>
  );
}
