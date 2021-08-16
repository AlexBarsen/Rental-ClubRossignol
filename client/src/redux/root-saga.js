import { all, call } from "redux-saga/effects";

import { rentalSagas } from "./rental/rental.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

// * call all sagas into a root saga
export default function* rootSaga() {
  yield all([call(rentalSagas), call(userSagas), call(cartSagas)]);
}
