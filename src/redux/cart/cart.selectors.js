// use createSelector from the "reselect" libary, so that our components won't rerender
// if the state doesn't actuallt change, if the state values remain the same
import { createSelector } from "reselect";

// input selector which gets the whole state as input and only returns part of it
// in this case it is the cart
const selectCart = (state) => state.cart;

// selectCartItems = memoize selector
// selectCartItems selects the cartItems from the state.cart
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// selectCartItemsCount gets the cartItems from selectCartItems and then further
// returns the reduced cartItems quantity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.cartHidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedTotal, cartItem) =>
      accumulatedTotal + cartItem.price * cartItem.days,
    0
  )
);
