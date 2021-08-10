import { all, call } from "redux-saga/effects";

import { fetchRentalsStart } from "./rental/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchRentalsStart)]);
}
