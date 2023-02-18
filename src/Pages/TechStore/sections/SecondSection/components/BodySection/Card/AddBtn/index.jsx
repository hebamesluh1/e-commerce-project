import React from "react";
import { ImgBorder } from "../style";
import cart from "../../../../../../../../Assets/image/cart/card1/shopping_cart.png";
import { useProductContext } from '../../../../../../../../Context/productContext';
const AddBtn = ({products }) => {
    const {addToCart}=useProductContext();
  return (
    <div>
      <ImgBorder onClick={()=>addToCart(products)
      }>
       <img src={cart} alt="" />
      </ImgBorder>
    </div>
  );
};

export default AddBtn;
