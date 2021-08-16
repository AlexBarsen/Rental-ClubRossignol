import { createSelector } from "reselect";

// * select user from state
const selectUser = (state) => state.user;

// * select currentUser from user
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

// * select userSignInHidden from state
export const selectUserSignInHidden = createSelector(
  [selectUser],
  (user) => user.userSignInHidden
);
