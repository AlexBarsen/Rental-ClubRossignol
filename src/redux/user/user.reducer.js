import { UserActionTypes } from "./user.types";

// * initialize state
const INITIAL_STATE = {
  currentUser: null,
  userSignInHidden: true,
};

// * reducers take in a current state + action -> return a new state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        userSignInHidden: true,
      };
    case UserActionTypes.TOGGLE_USER_SIGN_IN_HIDDEN:
      return {
        ...state,
        // make hidden the opposite of it onClick
        userSignInHidden: !state.userSignInHidden,
      };

    // return the state passed in if there is no action to be done
    default:
      return state;
  }
};

export default userReducer;
