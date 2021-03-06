import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./App";

import { store, persistor } from "./redux/store";

ReactDOM.render(
  // Provider = component class which gets the store object so we can dispatch, pull actions from the store
  // to our other components -> access to Redux to the App
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
