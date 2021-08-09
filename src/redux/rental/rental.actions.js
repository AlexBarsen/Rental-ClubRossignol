import RentalActionTypes from "./rental.types";

import {
  firestore,
  convertRentalsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchRentalsStart = () => ({
  type: RentalActionTypes.FETCH_RENTALS_START,
});

export const fetchRentalsSuccess = (rentalsMap) => ({
  type: RentalActionTypes.FETCH_RENTALS_SUCCESS,
  payload: rentalsMap,
});

export const fetchRentalsFailure = (errorMessage) => ({
  type: RentalActionTypes.FETCH_RENTALS_FAILURE,
  payload: errorMessage,
});

export const fetchRentalsStartAsync = () => {
  return (dispatch) => {
    // * reference to colllection
    const rentalRef = firestore.collection("rentals");

    // * dispatch fetch start call, we can do this because of "redux-thunk"
    dispatch(fetchRentalsStart());

    // *  Promised baseed API Call (regular API)
    rentalRef
      .get()
      .then((snapshot) => {
        // * get Snapshot of the reference
        const rentalsMap = convertRentalsSnapshotToMap(snapshot);

        // * dispatch fetchRentalsSuccess action with the rentalsMap
        // * which updates the state as well
        dispatch(fetchRentalsSuccess(rentalsMap));
      }) // * if it fails dispatch the error together with the message
      .catch((error) => dispatch(fetchRentalsFailure(error)));
  };
};
