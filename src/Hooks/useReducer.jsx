import  { useReducer } from 'react';

const initialState = {
    count: 0,
    products: [],
};

const ACTIONS = {
    ADD_TO_CART: 'addToCart',
    REMOVE_FROM_CART: 'removeFromCart',
    };

const Reduce = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
        return { ...state, products: [...state.products, action.payload], count: state.count + 1 };
        case ACTIONS.REMOVE_FROM_CART:
        return { ...state, products: state.products.filter((product) => product.id !== action.payload), count: state.count - 1 };
        default:
        return state;
    }
};

const useCart = () => {
    const [state, dispatch] = useReducer(Reduce, initialState);

  // const addToCart = (product) => {
  //   try {
  //     const res = axios.post('url');
  //     if (res) {
  //       dispatch({ type: ACTIONS.ADD_TO_CART, payload: res.data });
  //     }
  //   } catch (e) {
  //     dispatch({ type: 'error', payload: e });
  //   }
  // }; if you deal with API

    const addToCart = (product) => dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
    const removeFromCart = (productId) => dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });

    return { state, addToCart, removeFromCart };
};

export default useCart;