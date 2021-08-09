import { createSelector } from "reselect";

// * select just rental from state
// * -> { rental: { rentals: [ { id, categoryName, products: [] }, { ... } ] } }
const selectRental = (state) => state.rental;

// * select rentals object from state.rental
// * -> { rentals: [ { id, categoryName, products [] }, { ... } ] }
export const selectRentals = createSelector(
  [selectRental],
  (rental) => rental.rentals
);

// * .map() returns Object -> { id, categoryName , products: [] }
// * so basically returns an array of objects
// * -> [ { id: 1, categoryName: "Ski", products: [] },
// *      { id: 2, categoryName: "Snow", products: [] },
// *      { ... } ]
// * if rentals are "null" it returns an empty []
export const selectRentalsArray = createSelector([selectRentals], (rentals) =>
  rentals ? Object.keys(rentals).map((key) => rentals[key]) : []
);

// * select isFetching from rental
export const isRentalFetching = createSelector(
  [selectRental],
  (rental) => rental.isFetching
);
