import RentalActionTypes from "./rental.types";

export const updateRentals = (rentalsMap) => ({
  type: RentalActionTypes.UPDATE_RENTALS,
  payload: rentalsMap,
});
