import { UserActionTypes } from "./user.types";

// set initial state of the property like we do in this.state
const INITIAL_STATE = {
  currentUser: null,
  userSignInHidden: true,
};

// set state to INITIAL_STATE if there is not state yet
// update the state using an action, depending on the action.type -> update it with the action.payload
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      // when updating the state always return it and update the property with the action.payload
      // this is done so that the components will render
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
