import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import rentalReducer from "./rental/rental.reducer";

// config redux-persist -> put in whitelist the reducers that will be stored in the "persist-storage"
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// use combineReducer() to combine all the reducers into a rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  rental: rentalReducer,
});

// export modifed version of root reducers with persistance capabilities
export default persistReducer(persistConfig, rootReducer);
