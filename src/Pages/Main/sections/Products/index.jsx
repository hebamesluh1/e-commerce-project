import React from "react";
import { Container } from "../../../../Global/components";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//components
import RightSideProduct from "./components/RightSideProduct/electronic";
import RightSideProductF from "./components/RightSideProduct/furniture";
import LiftSideProduct from "./components/LiftSideProduct";
import styled from "styled-components";

//image
import cover1 from "../../../../Assets/image/main/furniture/cover2.png";
import cover2 from "../../../../Assets/image/main/electronics/cover1.png";

const ProductsWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  overflow: hidden;
`;
export default function Products() {
  return (
    <div>
      <Container>
        <ProductsWrapper>
          <LiftSideProduct cover={cover1} title="Home and outdoor" />
          <RightSideProductF />
        </ProductsWrapper>
      </Container>
      <Container>
        <ProductsWrapper>
          <LiftSideProduct
            cover={cover2}
            title="Consumer electronics and gadgets"
          />
          <RightSideProduct />
        </ProductsWrapper>
      </Container>
    </div>
  );
}
