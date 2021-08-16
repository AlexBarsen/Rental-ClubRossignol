import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import RentalPage from "./pages/rental/rental.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up-component";

import CheckoutPage from "./pages/checkout/checkout.component";
import RestaurantPage from "./pages/restaurant/restaurant.component";
import ContactPage from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      {/* </Switch> renders the the first <Route> or <Redirect> that the 'path' matches to*/}
      <Switch>
        {/* <Route> renders the component to which the 'path' matches to */}
        <Route exact path="/" component={HomePage} />{" "}
        <Route path="/rental" component={RentalPage} />
        {/* <Redirect> will render the 'path' */}
        <Route
          exact
          path="/signIn"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/restaurant" component={RestaurantPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
};

// * mapStateToProps gives access to the Redux state(rootReducer)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// * mapDispatchToProps(dispatch) = function which does a dispatch to the store to execute a function
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

// * connect() connects the React component with the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
