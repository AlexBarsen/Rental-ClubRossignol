import React from "react";

import RentalItem from "../rental-item/rental-item.component";

const RentalCategory = ({ categoryName, products }) => (
  <div className="rental-category">
    <h1 className="rental-category__title">{categoryName}</h1>
    <div className="rental-category__items">
      {products.map((item) => (
        <RentalItem key={item.productID} item={item} />
      ))}
    </div>
  </div>
);

export default RentalCategory;
