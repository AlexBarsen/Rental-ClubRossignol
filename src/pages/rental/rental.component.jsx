import React from "react";
import { connect } from "react-redux";

import RentalOverviewContainer from "../../components/rental-overview/rental-overview.container";

import { fetchRentalsStartAsync } from "../../redux/rental/rental.actions";

class RentalPage extends React.Component {
  componentDidMount() {
    // * desctructure and dispatch Redux-Thunk action
    // * now the state is rental state is updated withing this dispatch
    const { fetchRentalsStartAsync } = this.props;
    fetchRentalsStartAsync();
  }

  render() {
    // * CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
    // * wrrapped the WithSpinner(CollectionOverview) into a Container
    return (
      <div className="rental-page background">
        <RentalOverviewContainer />
      </div>
    );
  }
}

// * dispatch actions to Redux store
const mapDispatchToProps = (dispatch) => ({
  fetchRentalsStartAsync: () => dispatch(fetchRentalsStartAsync()),
});

export default connect(null, mapDispatchToProps)(RentalPage);
