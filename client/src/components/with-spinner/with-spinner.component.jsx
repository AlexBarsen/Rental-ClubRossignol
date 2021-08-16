import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

// * HOC (Higher Order Component) which renders a "Spinner"
// * until the data finishes fetching from Firestore
const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithSpinner;
