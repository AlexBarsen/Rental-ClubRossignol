import React from "react";

// import "./sign-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { selectUserSignInHidden } from "../../redux/user/user.selectors";
import { toggleUserSignInHidden } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  // function which logs the user in
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      // function from the auth libary which logs in with the email and password
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  // update state depending on what user is typing in the FormInput
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        {this.props.type === "dropdown" ? null : (
          <h1 className="sign-in__heading--primary">AM DEJA CONT</h1>
        )}
        <div className="container">
          <h2 className="sign-in__heading--secondary">
            Logheaza-te cu contul si parola
          </h2>

          {this.props.type === "dropdown" ? (
            <CustomButton
              toggleUserSignInHidden
              onClick={this.props.toggleUserSignInHidden}
            >
              ❌
            </CustomButton>
          ) : null}
        </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="Email"
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Parola"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" signInNormal>
              Sign In
            </CustomButton>
            {/* <CustomButton onClick={signInWithGoogle} signInGoogle>
              Sign in with Google
            </CustomButton> */}
            {this.props.type === "dropdown" ? (
              <Link
                to="signIn"
                className="register-button"
                onClick={this.props.toggleUserSignInHidden}
              >
                Register
              </Link>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userSignInHidden: selectUserSignInHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
});

// connect() = function that allows the acces to the state -> rootReducer
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
