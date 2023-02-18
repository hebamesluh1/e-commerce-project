import React from "react";
import BtnCart from "./components/BtnCart";
import Card from "./components/Card";
import { BorderWrapper } from "../Payment/style";
import { useProductContext } from "./../../../../../../Context/productContext";
import EmptyCard from "./components/EmptyCard/index";

export default function Shopping() {
  const { state } = useProductContext();
  return (
    <BorderWrapper style={{ gap: "20px" }}>
      {!state.products.length && <EmptyCard />}
      {state?.products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      <BtnCart/>
    </BorderWrapper>
  );
}
