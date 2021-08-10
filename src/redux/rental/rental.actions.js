import RentalActionTypes from "./rental.types";

// import {
//   firestore,
//   convertRentalsSnapshotToMap,
// } from "../../firebase/firebase.utils";

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
