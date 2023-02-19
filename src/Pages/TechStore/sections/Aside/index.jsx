import React from "react";
import styled from "styled-components";

//components
import Category from "./components/Category";
import Brands from "./components/Brands";
import Features from "./components/Features";
import Rating from "./components/Rating";
import Condition from "./components/Condition";
import Range from "./components/Range";

const Style = styled.div`
  flex-basis: 30%;
  @media(max-width:920px){
    display:none;
  }
`;

export default function Aside() {
  return (
    <Style>
      <Category />
      <Brands />
      <Features />
      <Range />
      <Condition />
      <Rating />
    </Style>
  );
}
