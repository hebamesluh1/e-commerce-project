import React from "react";

import ProductPart from "./ProductPart";
import styled from "styled-components";

//images
import F1 from "../../../../../../Assets/image/main/furniture/disk.png";
import F2 from "../../../../../../Assets/image/main/furniture/disk1.png";
import F3 from "../../../../../../Assets/image/main/furniture/disk2.png";
import F5 from "../../../../../../Assets/image/main/furniture/other.png";
import F6 from "../../../../../../Assets/image/main/furniture/other1.png";
import F7 from "../../../../../../Assets/image/main/furniture/other2.png";
import F8 from "../../../../../../Assets/image/main/furniture/other3.png";
import F9 from "../../../../../../Assets/image/main/furniture/other4.png";
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
  height: 100%;
  overflow: hidden;
  @media (max-width: 920px) {
    flex-wrap: nowrap;
  }
`;
export default function RightSideProduct() {
  return (
    <>
      <NotMobile>
        <ProductWrapper>
          <ProductPart title="Soft chairs" body="19" img={F1} />
          <ProductPart title="Kitchen mixer " body="100" img={F6} />
          <ProductPart title="Soft & chair" body="19" img={F2} />
          <ProductPart title="Blenders" body="39" img={F7} />
          <ProductPart title="Kitchen dishes" body="19" img={F3} />
          <ProductPart title="Home appliance" body="19" img={F8} />
          <ProductPart title="Smart watches" body="19" img={F5} />
          <ProductPart title="Coffee maker" body="10" img={F9} />
        </ProductWrapper>
      </NotMobile>
      <Mobile>
        <ProductWrapper>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
          >
            <SwiperSlide>
              <ProductPart title="Soft chairs" body="19" img={F1} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPart title="Kitchen mixer " body="100" img={F6} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPart title="Soft & chair" body="19" img={F2} />
            </SwiperSlide>
            <SwiperSlide>
              <ProductPart title="Home appliance" body="19" img={F8} />
            </SwiperSlide>
          </Swiper>
        </ProductWrapper>
      </Mobile>
    </>
  );
}
