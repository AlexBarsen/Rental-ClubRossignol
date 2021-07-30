import React from "react";

// import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="group__form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label className="group__form-input--floating-label">{label}</label>
    ) : null}
  </div>
);

export default FormInput;
