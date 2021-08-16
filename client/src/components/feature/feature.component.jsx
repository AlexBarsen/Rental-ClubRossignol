import React from "react";

// * pass in properties into Component
const Feature = ({ feature }) => {
  // * destructure values of the property
  const { name, image, description } = feature;
  return (
    <div className="feature">
      <img src={image} alt={name} className="feature__image" />
      <div className="feature__name">{name}</div>
      <div className="feature__description">{description}</div>
    </div>
  );
};

export default Feature;
