import React from "react";
import styled from "styled-components";

import Card from "./Card";
import Suggestion from "../../../Aside/components/Brands/CheckBox/Suggestion";

import goodRate from "../../../../../../Assets/image/electronics1/goodrate.png";
import { products } from "./../../../../../../mock/products";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  .content-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export default function BodySuggestion() {
  return (
    <>
      <Suggestion />
      <Wrapper>
        <div className="content-wrapper">
          {products.map((product) => (
            <Card
              key={product.id}
              products={product}
              img={product.img}
              rateImg={goodRate}
              rate="7.5"
              discount={product.discount}
              price={product.price}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}
