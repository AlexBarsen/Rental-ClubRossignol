import React from "react";

import RENTAL_DATA from "./rentals.data";

// import "./rental.styles.scss";

import RentalCategory from "../../components/rental-category/rental-category";

class RentalPage extends React.Component {
  constructor() {
    super();

    this.state = {
      rentals: RENTAL_DATA,
    };
  }

  render() {
    const { rentals } = this.state;
    return (
      <div className="rental-page">
        {rentals.map(({ categoryID, ...otherRentalProps }) => (
          <RentalCategory key={categoryID} {...otherRentalProps} />
        ))}
      </div>
    );
  }
}

export default RentalPage;
