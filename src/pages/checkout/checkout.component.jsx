import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

// * pass properties into Component
const CheckoutPage = ({ cartItems, total, currentUser }) => (
  <div className="checkout-page background">
    <div className="checkout-page__header">
      <div className="checkout-page__header--block">
        <span>Produs</span>
      </div>
      <div className="checkout-page__header--block">
        <span>Nume</span>
      </div>
      <div className="checkout-page__header--block">
        <span>Prenume</span>
      </div>
      <div className="checkout-page__header--block">
        <span>Detalii</span>
      </div>
      <div className="checkout-page__header--block">
        <span>Pret</span>
      </div>
    </div>
    <div className="checkout-items">
      {/* map over the cartItems and render a CheckoutItem for each with an unique key and the cartItem passed in as a prop */}
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <div className="checkout-page__total">
      <h4>Total: {total} RON</h4>
    </div>

    {currentUser && total > 0 ? (
      <div className="payment">
        <div className="test-warning">
          *Foloseste urmatorul card de test pentru a finaliza comanda*
          <br />
          4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
      </div>
    ) : (
      <div className="login-message">
        Logati-va sau adaugati produse in cos pentru a putea finaliza comanda.
      </div>
    )}
  </div>
);

// * connect Component to Redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
