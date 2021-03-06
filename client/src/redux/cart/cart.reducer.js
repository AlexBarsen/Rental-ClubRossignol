import CartActionTypes from "./cart.types";
import { editItem } from "./cart.utils";

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: [],
};

// * reducers take in a current state + action -> return a new state
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden: !state.cartHidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.EDIT_ITEM:
      return {
        ...state,
        cartItems: editItem(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
