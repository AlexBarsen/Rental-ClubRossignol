import React from "react";

import RentalModal from "../rental-modal/rental-modal.component";

// import "./rental-item.styles.scss";

const RentalItem = ({ item }) => {
  const { name, price, icon } = item;
  return (
    <div className="rental-item">
      <div className="rental-item__title">{name}</div>
      <img src={icon} alt="" className="rental-item__icon" />{" "}
      <div className="rental-item__footer">
        <div className="rental-item__footer--price">{price} RON / ZI</div>
        <RentalModal
          className="rental-item__footer-modal-btn"
          item={item}
          type="add"
        />
      </div>
    </div>
  );
};

export default RentalItem;
