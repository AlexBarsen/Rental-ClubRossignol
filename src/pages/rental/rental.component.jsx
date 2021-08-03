import React from "react";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { updateRentals } from "../../redux/rental/rental.actions";

import RentalOverview from "../../components/rental-overview/rental-overview";

import {
  firestore,
  convertRentalsSnapshotToMap,
} from "../../firebase/firebase.utils";

const RentalOverviewWithSpiner = WithSpinner(RentalOverview);

class RentalPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateRentals } = this.props;
    const rentalRef = firestore.collection("rentals");

    this.unsubscribeFromSnapshot = rentalRef.onSnapshot(async (snapshot) => {
      const rentalsMap = convertRentalsSnapshotToMap(snapshot);
      updateRentals(rentalsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { rentals } = this.props;
    const { loading } = this.state;

    return (
      <div className="rental-page background">
        <RentalOverviewWithSpiner rentals={rentals} isLoading={loading} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateRentals: (rentalsMap) => dispatch(updateRentals(rentalsMap)),
});

export default connect(null, mapDispatchToProps)(RentalPage);
