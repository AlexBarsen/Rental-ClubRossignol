import React from "react";

// import "./rental-category.scss";

import RentalItem from "../rental-item/rental-item.component";

const RentalCategory = ({ categoryName, products }) => (
  <div className="category">
    <h1 className="category__title">{categoryName.toUpperCase()}</h1>
    <div className="category__preview">
      {products.map((item) => (
        // pass in the item forward into the RentalItem component, so that we can use it
        // in the addItem() to update our cartItems in the rootReducer
        <RentalItem key={item.productID} item={item} />
      ))}
    </div>
  </div>
);

export default RentalCategory;
