import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { editItem } from "../../redux/cart/cart.actions";

import RentalModalSelectTypes from "../rental-modal-selectTypes/rental-modal-selectTypes.component";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // * main css file
import "react-date-range/dist/theme/default.css"; // * theme css file

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

const EditModal = ({ cartItem, editItem }) => {
  const [cartItems, setCartItems] = useState(cartItem);

  const [modalVisibility, setModalVisibility] = useState(false);

  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    key: "selection",
  });

  // * get date in DD/MM/YYYY format
  const getDate = (date) => {
    const startDay = date.getDate();
    const startMonth = date.getMonth() + 1;
    const startYear = date.getFullYear();
    return startDay + "/" + startMonth + "/" + startYear;
  };

  // * custom configuration for the Date
  const oneDay = 24 * 60 * 60 * 1000;
  const startDate = dateRange.startDate;
  const endDate = dateRange.endDate;
  const startDateShort = getDate(dateRange.startDate);
  const endDateShort = getDate(dateRange.endDate);
  const days = Math.round(Math.abs((endDate - startDate) / oneDay)) + 1;

  useEffect(() => {
    setCartItems(cartItem);
  }, [cartItem]);

  // * toggle visible OR hidden Modal depeding on the state
  const toggleModal = () => {
    setModalVisibility(!modalVisibility);

    if (modalVisibility) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  // * function which updates the state for the "react-select" <Select>
  const onChangeInput = (selected, props) => {
    switch (props.name) {
      case "height":
        setCartItems({ ...cartItems, height: selected.value });
        break;
      case "weight":
        setCartItems({ ...cartItems, weight: selected.value });
        break;
      case "shoeSize":
        setCartItems({ ...cartItems, shoeSize: selected.value });
        break;
      case "experience":
        setCartItems({ ...cartItems, experience: selected.value });
        break;
      case "sex":
        setCartItems({ ...cartItems, sex: selected.value });
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCartItems({ ...cartItems, [name]: value });
  };

  // * set the state regarding the selected dates by the user
  const handleRangeChange = (newRangeSelection) => {
    const newRange = newRangeSelection.selection;

    setDateRange({ ...newRange });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      sex,
      shoeSize,
      height,
      experience,
      weight,
      price,
      name,
      startDate,
      starteDateShort,
      endDate,
      endDateShort,
      days,
      id,
      productType,
    } = cartItems;

    toggleModal();

    // * pass state into item
    const editedItem = {
      ...cartItems,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      startDateShort: startDateShort,
      endDateShort: endDateShort,
      days: Math.round(Math.abs((startDate - endDate) / oneDay)) + 1,
    };

    editItem(editedItem);

    setCartItems({
      ...editedItem,
    });
  };
  return (
    <>
      <CustomButton addToCart onClick={toggleModal}>
        EDIT
      </CustomButton>

      {/* render Modal depending on the state */}
      {modalVisibility && (
        <div className="modal">
          <div className="modal__overlay"></div>
          <div className="modal__content">
            <h2>{cartItems.name}</h2>

            <form style={{ position: "relative" }} onSubmit={handleSubmit}>
              <div className="modal__wrapper-all">
                <DateRange
                  className="modal__date-range"
                  editableDateInputs={false}
                  onInit={handleRangeChange}
                  ranges={[dateRange]}
                  onChange={handleRangeChange}
                  minDate={
                    new Date(new Date().setDate(new Date().getDate() + 1))
                  }
                  showDateDisplay={true}
                />

                <div className="modal__wrapper-right">
                  <div className="modal__rental-info">
                    <FormInput
                      className="modal__rental-info--input"
                      name="firstName"
                      type="text"
                      label="Nume"
                      value={cartItems.firstName}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      className="modal__rental-info--input"
                      name="lastName"
                      type="text"
                      label="Prenume"
                      value={cartItems.lastName}
                      onChange={handleChange}
                      required
                    />

                    <RentalModalSelectTypes
                      productType={cartItem.productType}
                      onChangeInput={onChangeInput.bind(this)}
                    />
                  </div>

                  {/* <RentalModalInfo
                    startDate={startDateShort}
                    endDate={endDateShort}
                    days={days}
                  /> */}

                  <CustomButton addToCart type="submit">
                    EDITEAZA
                  </CustomButton>
                </div>
              </div>
            </form>
            <CustomButton closeModal onClick={toggleModal}>
              ❌
            </CustomButton>
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editItem: (item) => dispatch(editItem(item)),
});

export default connect(null, mapDispatchToProps)(EditModal);
