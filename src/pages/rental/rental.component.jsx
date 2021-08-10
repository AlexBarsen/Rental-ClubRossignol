import React from "react";
import { connect } from "react-redux";

import RentalOverviewContainer from "../../components/rental-overview/rental-overview.container";

import { fetchRentalsStart } from "../../redux/rental/rental.actions";

class RentalPage extends React.Component {
  componentDidMount() {
    // * desctructure and dispatch Redux-Thunk action
    // * now the state is rental state is updated withing this dispatch
    const { fetchRentalsStart } = this.props;
    fetchRentalsStart();
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
  fetchRentalsStart: () => dispatch(fetchRentalsStart()),
});

export default connect(null, mapDispatchToProps)(RentalPage);
