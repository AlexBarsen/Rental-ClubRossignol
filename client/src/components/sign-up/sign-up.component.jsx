import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { emailSignUpStart } from "../../redux/user/user.actions";

const SignUp = ({ emailSignUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, phone, password, confirmPassword } =
    userCredentials;

  // * function which creates the user with email and password
  const handleSubmit = async (event) => {
    event.preventDefault();

    // * check if password match
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    emailSignUpStart({ email, password, firstName, lastName, phone });
  };

  // * handle state change depending on what user is typing in the FormInput
  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h1 className="sign-up__heading--primary">Nu am cont inca</h1>
      <h2 className="sign-up__heading--secondary">
        Creeaza un cont cu Emailul si parola
      </h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          label="Nume"
          required
        />
        <FormInput
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          label="Prenume"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          label="Numar telefon"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Parola"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirma Parola"
          required
        />
        <CustomButton signUp type="submit">
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (userCredentials) =>
    dispatch(emailSignUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
