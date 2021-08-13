import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { emailSignInStart } from "../../redux/user/user.actions";

import { Link } from "react-router-dom";
import { selectUserSignInHidden } from "../../redux/user/user.selectors";
import { toggleUserSignInHidden } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, toggleUserSignInHidden, type }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  // * function which logs the user in
  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  // * update state depending on what user is typing in the FormInput
  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      {type === "dropdown" ? null : (
        <h1 className="sign-in__heading--primary">AM DEJA CONT</h1>
      )}
      <div className="container">
        <h2 className="sign-in__heading--secondary">
          Logheaza-te cu contul si parola
        </h2>

        {type === "dropdown" ? (
          <CustomButton toggleUserSignInHidden onClick={toggleUserSignInHidden}>
            ❌
          </CustomButton>
        ) : null}
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          label="Email"
          value={email}
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Parola"
          required
        />
        <div className="buttons">
          <CustomButton type="submit" signInNormal>
            Sign In
          </CustomButton>

          {type === "dropdown" ? (
            <Link
              to="signIn"
              className="register-button"
              onClick={toggleUserSignInHidden}
            >
              Register
            </Link>
          ) : null}
        </div>
      </form>
    </div>
  );
};

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
