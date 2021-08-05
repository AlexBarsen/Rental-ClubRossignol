import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// * connect()(Component) will pass "dispatch" as a prop to the Component
// * 1. either destructure it: const Component = ({ dispatch }) => { }
// * 2. either call it: this.props.dispatch()

// * pass properties into Component
const CartDropdown = ({ cartItems, history, dispatch, total }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__item">
      {/* map over cartItems and render a CartItem component for each with unique keys and the item being passed in as a prop */}
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="cart-dropdown__message">
          Nu exista nimic in cos momentan
        </span>
      )}
    </div>
    <div className="cart-dropdown__footer">
      <CustomButton
        goToCheckout
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
      <span className="cart-dropdown__total">Total: {total}</span>
    </div>
  </div>
);

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

// * withRouter() connects the Component to the Router and gives acces to the history, location, match object properties
export default withRouter(connect(mapStateToProps)(CartDropdown));
