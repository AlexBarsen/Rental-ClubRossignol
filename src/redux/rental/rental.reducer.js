import RentalActionTypes from "./rental.types";

const INITIAL_STATE = {
  rentals: null,
  isFetching: false,
  errorMessage: undefined,
};

// * reducers take in a current state + action -> return a new state
const rentalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RentalActionTypes.FETCH_RENTALS_START:
      return {
        ...state,
        isFetching: true,
      };
    case RentalActionTypes.FETCH_RENTALS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        rentals: action.payload,
      };
    case RentalActionTypes.FETCH_RENTALS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default rentalReducer;
