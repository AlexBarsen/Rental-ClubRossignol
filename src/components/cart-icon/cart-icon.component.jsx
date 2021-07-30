import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

// import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { createStructuredSelector } from "reselect";

// when the CartIcon get clicked it toogles the toggleCartHidden action and updates the
// state.hidden to it's opposite so that the Cartdropdown will be visible or not
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="cart-icon__svg" />
    <span className="cart-icon__count">{itemCount}</span>
  </div>
);

// dispatch the toggleCartHidden action
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// get the item count with the help of the selectCartItemsCount selector
// -> "redux/cart/cart.selectors"
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
