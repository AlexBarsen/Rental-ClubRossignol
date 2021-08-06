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
  // * state for <WithSpinner> HOC
  // * true = render <WithSpinner>
  // * false = render <RentalOverview>
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    //* destructure dispatch actions
    const { updateRentals } = this.props;
    // * reference to colllection
    const rentalRef = firestore.collection("rentals");

    // *	Observable = () for publishing values but is not executed until user subscribes
    // this.unsubscribeFromSnapshot = rentalRef.onSnapshot(async (snapshot) => {
    //   const rentalsMap = convertRentalsSnapshotToMap(snapshot);
    //   updateRentals(rentalsMap);
    //   this.setState({ loading: false });
    // });

    // *  Promised baseed API Call (regular API)

    rentalRef.get().then((snapshot) => {
      // * get Snapshot of the reference
      const rentalsMap = convertRentalsSnapshotToMap(snapshot);
      // * dispatch to update Redux state
      updateRentals(rentalsMap);
      // * set state to false after the state is updated
      // * -> render <RentalOverview>
      this.setState({ loading: false });
    });

    // * REST API (fetch)
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/rental-clubrossignol/databases/(default)/documents/rentals"
    // )
    //   .then((response) => response.json())
    //   .then((rentals) => console.log(rentals));
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

// * dispatch action to Reudx store
const mapDispatchToProps = (dispatch) => ({
  updateRentals: (rentalsMap) => dispatch(updateRentals(rentalsMap)),
});

export default connect(null, mapDispatchToProps)(RentalPage);
