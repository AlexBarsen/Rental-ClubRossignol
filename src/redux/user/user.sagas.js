import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./user.actions";
import { UserActionTypes } from "./user.types";

// * function* which returns the userSnapshot and logs him in
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    // * createUserProfileDocument returns the user reference
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    // * get userSnapshot from the reference
    const userSnapshot = yield userRef.get();
    // * dispatch SignInSuccess() while destructuring the id of the user + additionalData
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// * function* which signs the user in with email and password
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    // * call another generating ()
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// * function* which checks if the user is signed in or not
export function* isUserAuthenticated() {
  try {
    // * returns user object or null
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    // * call generator function if a userAuth object exists
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

// * generator function which fires the EMAIL_SIGN_IN_START action and calls signInWithEmail()
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

// * export userSagas functions()
export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
  ]);
}
