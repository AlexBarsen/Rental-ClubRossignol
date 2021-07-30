import { UserActionTypes } from "./user.types";

// actions = functions that return objects
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const toggleUserSignInHidden = () => ({
  type: UserActionTypes.TOGGLE_USER_SIGN_IN_HIDDEN,
});
