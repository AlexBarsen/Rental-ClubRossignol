import { createSelector } from "reselect";

const selectRental = (state) => state.rental;

export const selectRentals = createSelector(
  [selectRental],
  (rental) => rental.rentals
);

export const selectRentalsForPreview = createSelector(
  [selectRentals],
  (rentals) => (rentals ? Object.keys(rentals).map((key) => rentals[key]) : [])
);

// export const selectRentalCategory = (rentalUrlParam) =>
//   createSelector([selectRentals], (rentals) =>
//     rentals ? rentals[rentalUrlParam] : null
//   );
