import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { emailSignUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
  }

  // * function which creates the user with email and password
  handleSubmit = async (event) => {
    event.preventDefault();

    const { emailSignUpStart } = this.props;

    // * destructure properties from state
    const { firstName, lastName, email, phone, password, confirmPassword } =
      this.state;

    // * check if password match
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    emailSignUpStart({ email, password, firstName, lastName, phone });
  };

  // * handle state change depending on what user is typing in the FormInput
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    // * destructure properties from state
    const { firstName, lastName, email, phone, password, confirmPassword } =
      this.state;
    return (
      <div className="sign-up">
        <h1 className="sign-up__heading--primary">Nu am cont inca</h1>
        <h2 className="sign-up__heading--secondary">
          Creeaza un cont cu Emailul si parola
        </h2>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            label="Nume"
            required
          />
          <FormInput
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            label="Prenume"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="tel"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            label="Numar telefon"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Parola"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirma Parola"
            required
          />
          <CustomButton signUp type="submit">
            SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (userCredentials) =>
    dispatch(emailSignUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
