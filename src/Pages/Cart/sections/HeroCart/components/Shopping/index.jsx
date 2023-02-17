import React from "react";
import BtnCart from "./components/BtnCart";
import Card from "./components/Card";
import img from '../../../../../../Assets/image/cart/card1/preview.png'
import { BorderWrapper } from "../Payment/style";

export default function Shopping() {
  return (
    <BorderWrapper style={{ gap: "20px" }}>
      <h3>No product to shown</h3>
      <img src={img} alt="" width='50%'/>
      {/* {!state.products.length && "No Products in the cart"}
      <ul>
        {state?.products?.map((product,index) => (
          <Card key={index} img={product.img} price={product.price} />
        ))}
      </ul> */}
      <BtnCart />
    </BorderWrapper>
  );
}
