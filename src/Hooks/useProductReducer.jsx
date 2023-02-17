import { useReducer } from 'react';

const initialState = {
  products: [],
};

const ACTIONS = {
  ADD_TO_CART: 'addToCart',
  REMOVE_FROM_CART: 'removeFromCart',
};

const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return { ...state, products: [...state.products, action.payload]};
    case ACTIONS.REMOVE_FROM_CART:
      return { ...state, products: state.products.filter((product) => product.id !== action.payload)};
    default:
      return state;
  }
};

const useCart = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  const addToCart = (product) => dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
  const removeFromCart = (productId) => dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });

  return { state, addToCart, removeFromCart };
};

export default useCart;