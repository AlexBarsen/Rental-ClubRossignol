import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import RentalPage from "./pages/rental/rental.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up-component";
import {
  auth,
  createUserPorfileDocument,
  // addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";
import RestaurantPage from "./pages/restaurant/restaurant.component";
import ContactPage from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component";

class App extends React.Component {
  unsubscribeFromAuth = null; // * method which by default is null

  componentDidMount() {
    const { setCurrentUser } = this.props; // * destructre setCurrentUser + the rentalArray from this.props

    // * auth.onStateChanged() = observer which listens for state changes regarding the user
    // * -> returns null(user not signed in) / object(user signed in)

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // * if onAuthStateChanged() returns an object(user singed in)
      if (userAuth) {
        const userRef = await createUserPorfileDocument(userAuth);

        //
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        }); // * using the reference returned by createUserProfileDocument() set’s the  current user in the App’s state by using Redux
      } else {
        setCurrentUser(null); // * if userAuth doesn't exist (no user signed in) set the currentUser in the Redux state to null
        // addCollectionAndDocuments(
        //   "rentals",
        //   rentalsArray.map(({ categoryName, products }) => ({
        //     categoryName,
        //     products,
        //   }))
        // );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/restaurant" component={RestaurantPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// * mapStateToProps gives access to the Redux state(rootReducer)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // rentalsArray: selectRentalsForPreview,
});

// * mapDispatchToProps(dispatch) = function which does a dispatch to the store to execute a function
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// * connect() connects the React component with the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
