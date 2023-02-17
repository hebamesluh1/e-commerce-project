import React from "react";
import { ImgBorder } from "../style";
import cart from "../../../../../../../../Assets/image/cart/card1/shopping_cart.png";
// import { useProductContext } from '../../../../../../../../Context/productContext';
const AddBtn = ({product }) => {
    // const {
    //     state: { products },
    //     addToCart,
    //     removeFromCart,
    //   } = useProductContext();
    
    // //   const isExistInCart = () => products.find((item) => item.id === product.id);
    
    //   const toggleCart = () => {
    //      addToCart(product);
    //   };
  return (
    <div>
      <ImgBorder>
       <img src={cart} alt="" />
      </ImgBorder>
    </div>
  );
};

export default AddBtn;
