import React from "react";

// import "./restaurant-item.styles.scss";

const RestaurantItem = ({ item }) => {
  const {
    nameRO,
    nameENG,
    alergens,
    quantity,
    price,
    descriptionRO,
    descriptionENG,
  } = item;

  return (
    <div className="restaurant-item">
      <div className="restaurant-item__container">
        <div className="restaurant-item__nameRO">
          {nameRO} <span className="restaurant-item__alergens">{alergens}</span>
        </div>
        <div className="restaurant-item__nameENG">
          {nameENG ? `( ${nameENG} )` : null}
        </div>
        <div className="restaurant-item__descriptionRO">{descriptionRO}</div>
        <div className="restaurant-item__descriptionENG">{descriptionENG}</div>
      </div>

      <div className="restaurant-item__container-2">
        <p className="restaurant-item__price">{price} RON</p>
        <span className="restaurant-item__quantity">{quantity}</span>
      </div>
    </div>
  );
};

export default RestaurantItem;
