import React from "react";

import RestaurantItem from "../../components/restaurant-item/restaurant-item.component";

// * pass properties into Component
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
      {/* map over the products and render RestaurantItem with an unique Key and pass the product as props */}
      {products.map((product) => (
        <RestaurantItem key={product.productID} item={product} />
      ))}
    </div>
  </div>
);

export default RestaurantCategory;
