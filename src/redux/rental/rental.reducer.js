import RentalActionTypes from "./rental.types";

// * initialize state
const INITIAL_STATE = {
  rentals: null,
};
// * reducers take in a current state + action -> return a new state
const rentalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RentalActionTypes.UPDATE_RENTALS:
      return {
        ...state,
        rentals: action.payload,
      };
    default:
      return state;
  }
};

export default rentalReducer;
