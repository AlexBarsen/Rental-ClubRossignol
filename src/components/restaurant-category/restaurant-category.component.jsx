import React from "react";

// import "./restaurant-category.styles.scss";

import RestaurantItem from "../../components/restaurant-item/restaurant-item.component";

const RestaurantCategory = ({ categoryName, categoryIcon, products }) => (
  <div className="restaurant-category">
    <div className="restaurant-category__header">
      <span className="restaurant-category__name">
        {categoryName.toUpperCase()}
      </span>
      <div className="restaurant-categroy__icon-container">
        <img
          src={categoryIcon}
          className="restaurant-category__icon"
          alt="Category Icon"
        />
      </div>
    </div>
    <div className="restaurant-category__preview">
      {products.map((product) => (
        <RestaurantItem key={product.productID} item={product} />
      ))}
    </div>
  </div>
);

export default RestaurantCategory;
