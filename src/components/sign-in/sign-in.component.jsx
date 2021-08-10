import React from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { emailSignInStart } from "../../redux/user/user.actions";

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

  // * function which logs the user in
  handleSubmit = async (event) => {
    event.preventDefault();
    // * destructure dipsatch from props
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
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

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  userSignInHidden: selectUserSignInHidden,
});

// * dispatch function to Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
