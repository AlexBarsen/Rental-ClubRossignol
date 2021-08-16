import React from "react";

import RentalItem from "../rental-item/rental-item.component";

// * pass properties into the Component
const RentalCategory = ({ categoryName, products }) => (
  <div className="rental-category">
    <h1 className="rental-category__title">{categoryName}</h1>
    <div className="rental-category__items">
      {/* map over the products and render a RentalItem with an unique key while passing the item as a prop */}
      {products.map((item) => (
        <RentalItem key={item.productID} item={item} />
      ))}
    </div>
  </div>
);

export default RentalCategory;
