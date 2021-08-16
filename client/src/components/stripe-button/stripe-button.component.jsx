import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

import { clearCart } from "../../redux/cart/cart.actions";

// * pass properties into Component
const StripeCheckoutButton = ({ price, clearCart }) => {
  // * Stripe configuration
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ie0jqGu2kcl3ZIO43mlATVgl4kRVDjkclxzqHpH5oyTVDBS2UZbFpM32kSqlS7dsXzR6owuqFoXlXVjf6Yaq34000QJFmKJIr";

  // * function which returns a Order Object and also clears the cart upon success
  const onToken = (token) => {
    // console.log(token);
    // alert("Plata reusita");
    // clearCart();
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card"
        );
      });
  };

  // * return the StripeCheckout Button with the configuration written above
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

// * dispatch functions to Redux store
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
