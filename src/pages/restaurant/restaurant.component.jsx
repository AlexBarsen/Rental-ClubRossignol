import React from "react";

// import "./restaurant.styles.scss";

import RestaurantCategory from "../../components/restaurant-category/restaurant-category.component";

import RESTAURANT_DATA from "../../components/restaurant-menu/restaurant_data";

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
      <div className="restaurant-page">
        {restaurantMenu.map(({ categoryID, ...otherRentalProps }) => (
          <RestaurantCategory key={categoryID} {...otherRentalProps} />
        ))}
      </div>
    );
  }
}

export default RestaurantPage;
