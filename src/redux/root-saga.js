import { all, call } from "redux-saga/effects";

import { fetchRentalsStart } from "./rental/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchRentalsStart), call(userSagas)]);
}
