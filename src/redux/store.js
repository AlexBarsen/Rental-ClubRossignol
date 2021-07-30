// add middleware to our store to catch actions and display them when they get fired/dispatched
// middleware = function that receive actions and do something with them -> pass them to the rootReducer
import { createStore, applyMiddleware } from "redux";
// add persistance to the App so on refresh the redux state won't reset
// import { presistStore } from "redux-persist";
// logger = catches the action and console.logs it
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];

// creating store with rootReducer and middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// create persisted version of the store
export const persistor = persistStore(store);
