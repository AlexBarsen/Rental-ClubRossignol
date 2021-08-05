import React from "react";

// * destructure the cartItem and it properties from the props
const CartItem = ({
  item: { icon, price, name, firstName, lastName, days },
}) => (
  <div className="cart-item">
    <img className="cart-item__photo" src={icon} alt="item" />
    <div className="cart-item__details">
      <span className="cart-item__details--person">
        {firstName} {lastName}
      </span>
      <span className="cart-item__details--name">( {name} )</span>
    </div>
    <span className="cart-item__details--price">
      {price} RON x {days} zile = {price * days} RON
    </span>
  </div>
);

export default CartItem;
