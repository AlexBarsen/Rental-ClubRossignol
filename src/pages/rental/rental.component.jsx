import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import RentalCategory from "../../components/rental-category/rental-category";
import { updateRentals } from "../../redux/rental/rental.actions";

import { selectRentalsForPreview } from "../../redux/rental/rental.selectors";

import {
  firestore,
  convertRentalsSnapshotToMap,
} from "../../firebase/firebase.utils";

const RentalCateogryWithSpiner = WithSpinner(RentalCategory);

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
        {rentals.map(({ id, ...otherRentalProps }) => (
          <RentalCateogryWithSpiner
            isLoading={loading}
            key={id}
            {...otherRentalProps}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateRentals: (rentalsMap) => dispatch(updateRentals(rentalsMap)),
});

const mapStateToProps = createStructuredSelector({
  rentals: selectRentalsForPreview,
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalPage);
