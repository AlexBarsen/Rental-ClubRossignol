import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectRentalsArray } from "../../redux/rental/rental.selectors";

import RentalCategory from "../rental-category/rental-category.component";

// * pass in properties into the Component
const RentalOverview = ({ rentalsArray }) => (
  <div className="rental-overview">
    {/* map over the rentals and render the RentalCategory while passing in porps */}
    {rentalsArray.map(({ id, categoryName, products }) => (
      <RentalCategory
        key={id}
        products={products}
        categoryName={categoryName}
      />
    ))}
  </div>
);

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  rentalsArray: selectRentalsArray,
});

export default connect(mapStateToProps)(RentalOverview);
