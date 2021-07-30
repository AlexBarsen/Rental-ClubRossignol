// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   // check if cartItemToAdd already exists in our cartItems -> return true or false
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.productId === cartItemToAdd.productId
//   );

//   // if (existingCartItem) {
//   //   return cartItems.map((cartItem) =>
//   //     cartItem.id === cartItemToAdd.id ? [cartItem, cartItemToAdd] : cartItem
//   //   );
//   // }

//   // if it exists we return a new array/version of the cartItems
//   if (existingCartItem) {
//     // if cartItem.id === cartItemToAdd -> create new object with the cartItem in which
//     // the quantity gets incremeted by 1, if it doesn't match just return the cartItem
//     return cartItems.map((cartItem) =>
//       cartItem.productId === cartItemToAdd.productId
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }
// };

// export const addItemToCart = (cartItems, itemToAdd) => {
//   if (cartItems) return [cartItems.map((cartItem) => cartItem), itemToAdd];
//   return [itemToAdd];
// };
//   // if the item doesn't exist, return a new array with the cartItems which already exists
//   // while also adding an object with the cartItemToAdd with quantity of 1
//   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
// };

// import uuid from "react-uuid";

export const editItem = (cartItems, cartItemToEdit) => {
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToEdit.id ? cartItemToEdit : cartItem
  );
};

// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   const id = uuid();

//   cartItemToAdd.id = id;
//   console.log(cartItemToAdd.id);

//   return [...cartItems, cartItemToAdd];
// };
