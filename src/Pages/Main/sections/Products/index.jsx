import React from "react";
import { Container } from "../../../../Global/components";


//components
import RightSideProduct from "./components/RightSideProduct/electronic";
import RightSideProductF from "./components/RightSideProduct/furniture";
import LiftSideProduct from "./components/LiftSideProduct";
import styled from "styled-components";

//image
import cover1 from "../../../../Assets/image/main/furniture/cover2.png";
import cover2 from "../../../../Assets/image/main/electronics/cover1.png";
import NotMobile from "../../../../Components/NotMobile";
import Mobile from "./../../../../Components/Mobile/index";

const ProductsWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  overflow: hidden;
`;
export default function Products() {
  return (
    <div>
      <Container>
        <NotMobile>
          <ProductsWrapper>
            <LiftSideProduct cover={cover1} title="Home and outdoor" />
            <RightSideProductF />
          </ProductsWrapper>
        </NotMobile>

        <Mobile>
          <h3>out door product home</h3>
          <RightSideProductF />
        </Mobile>
      </Container>

      <Container>
        <NotMobile>
          <ProductsWrapper>
            <LiftSideProduct
              cover={cover2}
              title="Consumer electronics and gadgets"
            />
            <RightSideProduct />
          </ProductsWrapper>
        </NotMobile>
        <Mobile>
          <h3>Home Electronics </h3>
          <RightSideProduct />
        </Mobile>
      </Container>
    </div>
  );
}
