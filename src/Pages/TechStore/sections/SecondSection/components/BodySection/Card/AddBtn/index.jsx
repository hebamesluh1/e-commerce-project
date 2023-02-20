import React, { useState } from "react";
import { ImgBorder } from "../style";
import cart from "../../../../../../../../Assets/image/cart/card1/shopping_cart.png";
import done from '../../../../../../../../Assets/image/cart/card1/download.png'
import { useProductContext } from "../../../../../../../../Context/productContext";
const AddBtn = ({ products }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useProductContext();
  return (
    <div>
      {!added ? (
        <ImgBorder onClick={() =>{addToCart(products); setAdded(true)}}>
          <img src={cart} alt="" />
        </ImgBorder>
      ) : (
        <ImgBorder style={{padding:'0px'}}><img src={done} alt="added" width="40px"/> </ImgBorder>
      )}
    </div>
  );
};

export default AddBtn;
