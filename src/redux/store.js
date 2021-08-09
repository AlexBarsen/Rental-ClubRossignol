// * middlewares catch actions and does something with them when they get fired/dispatched
import { createStore, applyMiddleware } from "redux";

// * logger = middleware that catches the actions and console.logs it
import logger from "redux-logger";

import thunk from "redux-thunk";

import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middlewares = [logger, thunk];

// * creating store with rootReducer and middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// * persisted version of store
export const persistor = persistStore(store);
