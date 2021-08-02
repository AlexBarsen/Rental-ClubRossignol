import React from "react";

// import "./feature.styles.scss";

const Feature = ({ feature }) => {
  const { name, image, description } = feature;
  return (
    <div className="feature">
      <img src={image} alt={name} className="feature__image" />
      {/* <div className="feature__container"> */}
      <div className="feature__name">{name}</div>
      {/* </div> */}
      <div className="feature__description">{description}</div>
    </div>
  );
};

export default Feature;
