import React from "react";

// import "./custom-button.styles.scss";

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
