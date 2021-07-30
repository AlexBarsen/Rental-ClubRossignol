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

// import "./cart-dropdown.styles.scss";

// connect passes dispatch to the component as property if mapDispatchToProps isn't passed in
// -> access dispatch as a prop to use toggleCartHiden() when we go to "/checkout"
const CartDropdown = ({ cartItems, history, dispatch, total }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__item">
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

// use withRouter() to pass the match history and location -> access to the history prop
// use history.push() to "redirect" to "/checkout" when we click on the button
// pass in what comes out of connect()
export default withRouter(connect(mapStateToProps)(CartDropdown));
