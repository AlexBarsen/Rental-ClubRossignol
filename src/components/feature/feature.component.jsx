import React from "react";

// import "./feature.styles.scss";

const Feature = ({ feature }) => {
  const { name, icon, description } = feature;
  return (
    <div className="feature">
      <div className="feature__container">
        <img src={icon} alt="Restaurant" className="feature__icon" />
        <div className="feature__name">{name}</div>
      </div>
      <div className="feature__description">{description}</div>
    </div>
  );
};

export default Feature;
