import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
import RentalPage from "./pages/rental/rental.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up-component";
import { auth, createUserPorfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";
import RestaurantPage from "./pages/restaurant/restaurant.component";
import ContactPage from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // destructre setCurrentUser from this.props
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // creating User in Firestore Database
        // returned userRef from the function
        const userRef = await createUserPorfileDocument(userAuth);

        // .data() returns a JSON object of the document in the DB
        // create a currentUser in the state using the properties of the snapShot as well as the ID
        // => store current logged in user in our state
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // set currentUser to null if the user logs out
        setCurrentUser(null);
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
        {/* imported Switch from react-router-dom, so that react renders the the first <Route> or
        <Redirect> that the path matches to*/}
        <Switch>
          {/* imported Route from react-router-dom, so that different components are rendered
          when the path changes */}
          <Route exact path="/" component={HomePage} />
          <Route path="/rental" component={RentalPage} />
          {/* imported Redirect from react-router-dom. We check if a user is present, if it is null
          it will render the SignInAndSignUp Page, else if a user exists it will redirect to the hompage */}
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

// mapStateToProps + connect() = use anywhere we need properties from rooReducer

// mapStateToProps gives  access to the state(rootReducer)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatch = way for Redux to know that whatever object we pass in is going to be an action object
  // that it is going to pass to every reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// pass mapStateToProps so that it has access to this.props.currentUser
export default connect(mapStateToProps, mapDispatchToProps)(App);
