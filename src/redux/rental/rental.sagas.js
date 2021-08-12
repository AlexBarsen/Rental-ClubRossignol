// * Redux Saga is a middleware library used to allow Redux store
// * to interact with resources outside itself asynchronously

import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertRentalsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchRentalsFailure, fetchRentalsSuccess } from "./rental.actions";
import RentalActionTypes from "./rental.types";

// * function* = Generator function
export function* fetchRentalsAsync() {
  // * put it insde "try catch" to catch the error if the fetch fails
  try {
    // * reference to collection
    const rentalRef = firestore.collection("rentals");

    // * yield .get() get's back at the const value that we set it
    // * no .then() required
    const snapshot = yield rentalRef.get();

    // * call() = takes as it's 1st argument the function/method
    // *                    the 2nd arguments are the parameters passed into the ()
    // * = convertRentalsSnapshotToMap(snapshot)
    const rentalsMap = yield call(convertRentalsSnapshotToMap, snapshot);

    // * put() = dispatch() in Redux Saga, has to be yielded
    yield put(fetchRentalsSuccess(rentalsMap));
  } catch (error) {
    yield put(fetchRentalsFailure(error.message));
  }
}

// * generator () calling another generator () insde it
export function* fetchRentalsStart() {
  yield takeLatest(RentalActionTypes.FETCH_RENTALS_START, fetchRentalsAsync);
}

export function* rentalSagas() {
  yield all([call(fetchRentalsStart)]);
}
