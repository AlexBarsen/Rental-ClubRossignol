import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";

// * destructure props from the cartItem
const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
  const {
    name,
    firstName,
    lastName,
    sex,
    height,
    weight,
    shoeSize,
    icon,
    price,
    experience,
    startDateShort,
    endDateShort,
    days,
  } = cartItem;

  return (
    <div className="checkout-item">
      <div className="checkout-item--product-container">
        <img src={icon} alt="item" className="checkout-item__icon " />
        <div className="checkout-item__name">{name}</div>
      </div>
      <div className="checkout-item__firstName">{firstName}</div>
      <div className="checkout-item__lastName">{lastName}</div>

      <div className="checkout-item__details">
        {sex ? (
          <span className="checkout-item__details--sex">
            <span className="checkout-item--highlight">Sex:</span> {sex}{" "}
          </span>
        ) : null}
        {weight ? (
          <span className="checkout-item__details--weight">
            <span className="checkout-item--highlight">Greutate:</span> {weight}{" "}
            kg
          </span>
        ) : null}
        {shoeSize ? (
          <span className="checkout-item__details--shoeSize">
            <span className="checkout-item--highlight">Marime:</span> {shoeSize}
          </span>
        ) : null}
        {height ? (
          <span className="checkout-item__details--height">
            <span className="checkout-item--highlight">Intaltime:</span>{" "}
            {height} cm
          </span>
        ) : null}
        {experience ? (
          <span className="checkout-item__details--experience">
            <span className="checkout-item--highlight">Experienta:</span>{" "}
            {experience}
          </span>
        ) : null}
      </div>

      <div className="checkout-item__price">
        <div className="checkout-item__price--calculation">
          {price} RON x {days} {days === 1 ? "zi" : "zile"} ={" "}
          <span className="checkout-item--highlight">{price * days} RON</span>
        </div>

        <div className="checkout-item__price__dates">
          <div className="check-item__price__dates--start">
            <span className="checkout-item--highlight">Din: </span>
            {startDateShort}
          </div>

          <div className="checkout-item__dates--end">
            <span className="checkout-item--highlight">Pana: </span>
            {endDateShort}
          </div>
        </div>
      </div>
      <div
        className="checkout-item__remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

// * dispatch functions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
