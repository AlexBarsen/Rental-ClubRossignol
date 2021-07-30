import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import "./contact-form.styles.scss";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
  }

  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
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
          type="phone"
          name="tel"
          value={phone}
          onChange={this.handleChange}
          label="Numar telefon"
          required
        />

        <label className="contact-form__message--label">
          Ce ai sa ne zici?
        </label>
        <textarea
          placeholder="Scrie mesajul tau aici"
          type="text"
          className="contact-form__message--input"
        />

        <CustomButton contact type="submit">
          Trimite Mesajul
        </CustomButton>
      </form>
    );
  }
}

export default ContactForm;
