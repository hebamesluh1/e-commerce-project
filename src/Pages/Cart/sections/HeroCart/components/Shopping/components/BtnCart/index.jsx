import React from "react";
import { FlexDiv } from "../../../../../../../../Global/components";
import arrow from "../../../../../../../../Assets/image/cart/card2/arrow_back.png";
import { Btn } from "./style";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../../../../../routes/index";
import { useProductContext } from "./../../../../../../../../Context/productContext";
export default function BtnCart() {
  const navigate = useNavigate();
  const { clearCart, state } = useProductContext();
  return (
    <FlexDiv style={{ justifyContent: "space-between", margin: "20px 0" }}>
      <Btn color="blue" onClick={() => navigate(`${PATHS.HOME}/list`)}>
        <FlexDiv>
          <img src={arrow} alt="" /> Back to shop
        </FlexDiv>
      </Btn>
      {state.products.length > 0 ? (
        <Btn onClick={() =>clearCart()}>Remove All</Btn>
      ) : (
        ""
      )}
    </FlexDiv>
  );
}
