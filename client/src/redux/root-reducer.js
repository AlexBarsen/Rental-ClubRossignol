import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import rentalReducer from "./rental/rental.reducer";

// * pesist configuration
// * whitelist = what should be saved in storage
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// * combineReducer() combines all reducers into a rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  rental: rentalReducer,
});

// * export modifed version of rootReducer with persistance capabilities
export default persistReducer(persistConfig, rootReducer);
