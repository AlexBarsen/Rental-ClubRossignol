import React from "react";

// * pass in properties into the Component
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
