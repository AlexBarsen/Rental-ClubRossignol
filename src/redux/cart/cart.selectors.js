// use createSelector from the "reselect" libary, so that our components won't rerender
// if the state doesn't actuallt change, if the state values remain the same
import { createSelector } from "reselect";

// * select just cart from state
const selectCart = (state) => state.cart;

// * select cart items from state
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// * select just the number of items in the cart
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.length
);

// * select the value of cartHidden from cart
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.cartHidden
);

// * select the total price of that cart from the cartItems
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedTotal, cartItem) =>
      accumulatedTotal + cartItem.price * cartItem.days,
    0
  )
);
