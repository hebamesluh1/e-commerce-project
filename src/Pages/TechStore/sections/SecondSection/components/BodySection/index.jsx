import React from "react";
// import {useCheckContext} from '../../../../../../Context/checkBoxContext'
import Card from "./Card";

import Suggestion from "../../../Aside/components/Brands/CheckBox/Suggestion";
import { products } from "./../../../../../../mock/products";

export default function BodySection() {
  // const [selectedCheckboxes] =useCheckContext();
  // const filteredProducts = products.filter((product) =>
  //   selectedCheckboxes.every((category) => product.categories.includes(category))
  // );
  return (
    <>
      <Suggestion />
      <div>
      {/* {filteredProducts.map((product) => (
          <li key={product.id}> */}
            {products.map((product) => (
          <Card
            key={product.id}
            products={product}
            img={product.img}
            title={product.title}
            description={product.description}
            discount={product.discount}
            price={product.price}
          />
        ))}
          {/* </li>
        ))} */}
        
      </div>
    </>
  );
}
