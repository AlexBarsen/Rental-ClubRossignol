import RentalActionTypes from "./rental.types";

const INITIAL_STATE = {
  rentals: null,
};

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
