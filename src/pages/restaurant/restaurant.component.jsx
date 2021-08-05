import React from "react";

import RestaurantCategory from "../../components/restaurant-category/restaurant-category.component";

import RESTAURANT_DATA from "./restaurant_data";

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantMenu: RESTAURANT_DATA,
    };
  }
  render() {
    const { restaurantMenu } = this.state;
    return (
      <div className="restaurant-page background">
        {/* map over tge restaurant Menu and render RentaurantCategory with an unique key and all other values passed in as props */}
        {restaurantMenu.map(({ categoryID, ...otherRentalProps }) => (
          <RestaurantCategory key={categoryID} {...otherRentalProps} />
        ))}
      </div>
    );
  }
}

export default RestaurantPage;
