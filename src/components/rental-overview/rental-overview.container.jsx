import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { isRentalFetching } from "../../redux/rental/rental.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import RentalOverview from "./rental-overview";

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  isLoading: isRentalFetching,
});

// * wrapped HOC WithSpinner(CollectionsOverview) into a Container to simplify the
// * rental.component.jsx

// * use compose to evaluate and chain multiple functions
// * => CollectionsOverviewContainer =
// * connect(mapStateToProps)(WithSpinner(CollectionsOverview))
const RentalOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(RentalOverview);

export default RentalOverviewContainer;
