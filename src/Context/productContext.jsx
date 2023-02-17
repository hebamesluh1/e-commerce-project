// import React, { createContext, useContext } from 'react';
// import useCartReducer from '../Hooks/useCartReducer';

// const CartContext = createContext({});

// export const useCartContext = () => {
//     return useContext(CartContext)
// }

// const CartContextProvider = ({ children }) => {
//     const cart = useCartReducer();
//     return (
//         <CartContext.Provider value={cart}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartContextProvider
import { createContext, useContext } from 'react';
import useCart from '../Hooks/useProductReducer';

const productContext = createContext(null);

export const useProductContext = () => {
  return useContext(productContext);
};

const ProductProvider = ({ children }) => {
  const cart = useCart();
  return <productContext.Provider value={cart}>{children}</productContext.Provider>;
};

export default ProductProvider;