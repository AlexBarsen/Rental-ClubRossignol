import React from "react";

// * pass properties into the Component
const MenuItem = ({ title, imageUrl }) => (
  <div className="menu-item">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">INCHIREAZA ACUM</span>
    </div>
  </div>
);

export default MenuItem;
