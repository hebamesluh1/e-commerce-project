import { useReducer,useMemo } from 'react';

const initialState = {
  products: [],
};

const ACTIONS = {
  ADD_TO_CART: 'addToCart',
  REMOVE_FROM_CART: 'removeFromCart',
  CLEAR_CART:'clearCart',
};

const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return { ...state, products: [...state.products, action.payload]};
    case ACTIONS.REMOVE_FROM_CART:
      return { ...state, products: state.products.filter((product) => product.id !== action.payload)};
    case ACTIONS.CLEAR_CART:
      return {products:[]};
    default:
      return state;
  }
};

const useCart = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  const addToCart = (product) => dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
  const removeFromCart = (productId) => dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });
  const clearCart=()=>dispatch({type:ACTIONS.CLEAR_CART})
  const total = useMemo(() => {
    return state.products.reduce((prev, cur) =>  prev += cur.price, 0);
}, [state])

const totalBeforeDiscount = useMemo(() => {
    return state.products.reduce((prev, cur) => prev += cur.discount , 0);
}, [state])

const totalDiscount = useMemo(() => {
    return totalBeforeDiscount - total;
}, [totalBeforeDiscount, total])

  return { state, addToCart, removeFromCart ,clearCart,totalBeforeDiscount,totalDiscount,total};
};

export default useCart;