import React from "react";

// * pass in CustomButton properties into Component
const CustomButton = ({
  dropdown,
  addToCart,
  signInNormal,
  signInGoogle,
  closeModal,
  goToCheckout,
  signUp,
  editCartItem,
  contact,
  toggleUserSignInHidden,
  ...otherProps
}) => (
  // * add css classes depending on the CustomButton properties
  <button
    className={`${signInGoogle ? "sign-in-google" : ""} ${
      signInNormal ? "sign-in-normal" : ""
    } ${addToCart ? "add-to-cart option" : ""} ${dropdown ? "dropdown" : ""} ${
      closeModal ? "close-modal" : ""
    } ${goToCheckout ? "go-to-checkout" : ""} ${signUp ? "sign-up" : ""} ${
      editCartItem ? "edit-cart-item" : ""
    } ${contact ? "contact" : ""} ${
      toggleUserSignInHidden ? "toggle-user-sign-in-hidden" : ""
    } custom-button`}
    {...otherProps}
  ></button>
);

export default CustomButton;
