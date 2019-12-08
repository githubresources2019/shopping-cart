const INITIAL_STATE = {
  cartProducts: [],
  cartCounts: {}
};

const CartReducer = (state = INITIAL_STATE, action) => {
  if (action.type == "ADD_TO_CART") {
    console.log('ACTPAY: ', action.payload);
    return {...state, cartProducts: [...state.cartProducts, action.payload]};
  } else if (action.type == "UPDATE_PRODUCT_COUNT") {
    return Object.assign({}, state, {
      cartCounts: { ...state.cartCounts, ...action.payload }
    });
  }
  return state;
};

export default CartReducer;
