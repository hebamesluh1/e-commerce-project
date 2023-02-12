import React, { createContext, useContext } from 'react';
import useCartReducer from '../Hooks/useCartReducer';

const CartContext = createContext({});

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const cart = useCartReducer();
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider