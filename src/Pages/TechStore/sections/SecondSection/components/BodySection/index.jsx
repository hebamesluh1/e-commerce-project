import React from "react";

import Card from "./Card";

import Suggestion from "../../../Aside/components/Brands/CheckBox/Suggestion";
import { products } from "./../../../../../../mock/products";


export default function BodySection() {
  return (
    <>
      <Suggestion />
      <div>
        {products.map((product) => (
          <>
            <Card
              img={product.img}
              title={product.title}
              description={product.description}
              discount={product.discount}
              price={product.price}
            />
          </>
        ))}
      </div>
    </>
  );
}
