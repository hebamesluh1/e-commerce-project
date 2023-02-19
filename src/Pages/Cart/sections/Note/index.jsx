import React from "react";
import Card from "./components/Card";
import { FlexDiv } from "../../../../Global/components";

//images
import img1 from "../../../../Assets/image/cart/icon/icon.png";
import img2 from "../../../../Assets/image/cart/icon/icon (1).png";
import img3 from "../../../../Assets/image/cart/icon/icon (2).png";
import styled from "styled-components";

const FlexDivStyle = styled(FlexDiv)`
  margin: 30px 0;
  @media (max-width: 920px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export default function Note() {
  return (
    <FlexDivStyle>
      <Card img={img1} title="Secure payment" />
      <Card img={img2} title="Customer support" />
      <Card img={img3} title="Free delivery" />
    </FlexDivStyle>
  );
}
