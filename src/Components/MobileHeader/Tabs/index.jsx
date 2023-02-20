import React from "react";
import Card from "./Card";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Style = styled.div`
  display: flex;
  margin: 10px 0;
`;
const Tabs = () => {
  return (
    <Style>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide>
          <Card text="All Category" />
        </SwiperSlide>
        <SwiperSlide>
          <Card text="Hot offers" />
        </SwiperSlide>
        <SwiperSlide>
          <Card text="Gift boxes" />
        </SwiperSlide>
        <SwiperSlide>
          <Card text="Projects" />
        </SwiperSlide>
        <SwiperSlide>
          <Card text="Menu items" />
        </SwiperSlide>
      </Swiper>
    </Style>
  );
};

export default Tabs;
