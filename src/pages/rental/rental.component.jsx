import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import RentalOverview from "../../components/rental-overview/rental-overview";

import { fetchRentalsStartAsync } from "../../redux/rental/rental.actions";
import { isRentalFetching } from "../../redux/rental/rental.selectors";

// * HOC WithSpinner -> RentalOverview
const RentalOverviewWithSpiner = WithSpinner(RentalOverview);

class RentalPage extends React.Component {
  componentDidMount() {
    const { fetchRentalsStartAsync } = this.props;
    fetchRentalsStartAsync();
  }

  render() {
    const { isRentalFetching } = this.props;
    // * HOC WithSpinner -> RentalOverview
    return (
      <div className="rental-page background">
        <RentalOverviewWithSpiner isLoading={isRentalFetching} />
      </div>
    );
  }
}

// * dispatch action to Redux store
const mapDispatchToProps = (dispatch) => ({
  fetchRentalsStartAsync: () => dispatch(fetchRentalsStartAsync()),
});

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  isRentalFetching: isRentalFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(RentalPage);
