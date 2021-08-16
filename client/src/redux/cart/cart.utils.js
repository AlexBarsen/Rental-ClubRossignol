// * function which edit's a cartItem
export const editItem = (cartItems, cartItemToEdit) => {
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToEdit.id ? cartItemToEdit : cartItem
  );
};
