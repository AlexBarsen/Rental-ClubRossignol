import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import { auth, createUserPorfileDocument } from "../../firebase/firebase.utils";

import { emailSignInSuccess, emailSignInFailure } from "./user.actions";
import { UserActionTypes } from "./user.types";

// * generating function which sign the user in using email and password
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    // * destructure the user of the auth.signInWithEmailAndPassword()
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    // * reference to the user
    const userRef = yield call(createUserPorfileDocument, user);
    // * get the userSnapshot from the reference
    const userSnapshot = yield userRef.get();
    // * dispatch emailSignInSuccess while destructuring the id of the user
    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
    // * catch the error and dispatch it
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

// * generator function which fires the EMAIL_SIGN_IN_START action and calls signInWithEmail()
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// * export userSagas functions()
export function* userSagas() {
  yield all([call(onEmailSignInStart)]);
}
