import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectRentalsForPreview } from "../../redux/rental/rental.selectors";

import RentalCategory from "../rental-category/rental-category.component";

const RentalOverview = ({ rentals }) => (
  <div className="rental-overview">
    {rentals.map(({ id, categoryName, products }) => (
      <RentalCategory
        key={id}
        products={products}
        categoryName={categoryName}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  rentals: selectRentalsForPreview,
});

export default connect(mapStateToProps)(RentalOverview);
