import CartActionTypes from "./cart.types";
import { editItem } from "./cart.utils";

// set hidden = true , so that we can update the state on an action, so that the cartDropdown
// will be visible or not
const INITIAL_STATE = {
  cartHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // make hidden the opposite of it onClick
        cartHidden: !state.cartHidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // addItemToCart with the current items and additional values (action.payload)
        // cartItems: addItemToCart(state.cartItems, action.payload), (function which adds quantity to the cartItems)
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
