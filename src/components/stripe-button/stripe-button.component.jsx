import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ie0jqGu2kcl3ZIO43mlATVgl4kRVDjkclxzqHpH5oyTVDBS2UZbFpM32kSqlS7dsXzR6owuqFoXlXVjf6Yaq34000QJFmKJIr";

  const onToken = (token) => {
    console.log(token);
    alert("Plata reusita");
    clearCart();
  };

  return (
    <StripeCheckout
      currency="RON"
      label="Finalizeaza Comanda"
      name="Club Rossignol"
      billingAdress
      shippingAddress
      description={`Totalul dumneavoastra este de ${price} RON`}
      panelLabel="Plateste acum"
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
