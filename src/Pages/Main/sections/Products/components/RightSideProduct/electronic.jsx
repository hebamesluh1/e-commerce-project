import React from "react";
import ProductPart from "./ProductPart";
import styled from "styled-components";

//image
import F1 from "../../../../../../Assets/image/main/electronics/01.png";
import F2 from "../../../../../../Assets/image/main/electronics/02.png";
import F3 from "../../../../../../Assets/image/main/electronics/03.png";
import F4 from "../../../../../../Assets/image/main/electronics/04.png";
import F5 from "../../../../../../Assets/image/main/electronics/05.png";
import F6 from "../../../../../../Assets/image/main/electronics/06.png";
import F7 from "../../../../../../Assets/image/main/electronics/07.png";
import F8 from "../../../../../../Assets/image/main/electronics/10.png";
import NotMobile from "../../../../../../Components/NotMobile";
import Mobile from "../../../../../../Components/Mobile";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//some styling
const ProductWrapper = styled.div`
  display: flex;
  flex-basis: 83%;
  flex-wrap: wrap;
`;

export default function RightSideProductF() {
  return (
    <>
      <NotMobile>
        <ProductWrapper>
          <ProductPart title="Smart watches" body="19" img={F3} />
          <ProductPart title="Gaming set" body="35" img={F6} />
          <ProductPart title="Cameras" body="89" img={F5} />
          <ProductPart title="Laptop & PC" body="340" img={F4} />
          <ProductPart title="Headphones" body="10" img={F2} />
          <ProductPart title="Smartphones" body="19" img={F7} />
          <ProductPart title="Smart watches" body="90" img={F1} />
          <ProductPart title="Electric Kattle" body="240" img={F8} />
        </ProductWrapper>
      </NotMobile>
      <Mobile>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
        >
          <SwiperSlide>
            <ProductPart title="Smart watches" body="19" img={F3} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductPart title="Gaming set" body="35" img={F6} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductPart title="Cameras" body="89" img={F5} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductPart title="Laptop & PC" body="340" img={F4} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductPart title="Headphones" body="10" img={F2} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductPart title="Smartphones" body="19" img={F7} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductPart title="Smart watches" body="90" img={F1} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductPart title="Electric Kattle" body="240" img={F8} />
          </SwiperSlide>
        </Swiper>
      </Mobile>
    </>
  );
}
