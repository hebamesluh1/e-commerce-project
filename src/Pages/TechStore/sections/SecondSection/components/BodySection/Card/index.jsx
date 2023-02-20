import React from "react";

//images
import rate from "../../../../../../../Assets/image/ListStore/components/rating.png";

//style
import { FlexDiv } from "../../../../../../../Global/components";
import {
  CardWrapper,
  H5Styling,
  H4Styling,
  DescriptionStyle,
  Details,
} from "./style";


import AddBtn from "./AddBtn";

export default function Card({
  title,
  img,
  discount,
  description,
  price,
  products,
}) {
  return (
    <CardWrapper>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <FlexDiv style={{ justifyContent: "space-between" }}>
          <H5Styling>{title}</H5Styling>
          <AddBtn products={products} />
        </FlexDiv>

        <H4Styling>
          ${price} <del>${discount}</del>
        </H4Styling>
        <div>
          <img src={rate} alt="" />
          <span style={{ lineHeight: "19px", color: "#FF9017" }}>7.5</span>
          <span
            style={{
              lineHeight: " 19px",
              color: " #8B96A5",
              padding: "0 10px",
            }}
          >
            154 orders
          </span>
          <span
            style={{
              lineHeight: "19px",
              color: "#00B517",
            }}
          >
            Free Shipping
          </span>
        </div>
        <DescriptionStyle>{description}</DescriptionStyle>
        <Details>View details</Details>
      </div>
    </CardWrapper>
  );
}
