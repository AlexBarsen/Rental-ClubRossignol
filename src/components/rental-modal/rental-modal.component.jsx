import React, { useState } from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { DateRange } from "react-date-range";

import RentalModalSelectTypes from "../rental-modal-selectTypes/rental-modal-selectTypes.component";

import RentalModalInfo from "../rental-modal-info/rental-modal-info.component";

import "react-date-range/dist/styles.css"; // * main css file
import "react-date-range/dist/theme/default.css"; // * theme css file

import { addItem } from "../../redux/cart/cart.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const RentalModal = ({ addItem, item }) => {
  const { name, price, productType } = item;

  const [modalInputs, setModalInputs] = useState({
    firstName: "",
    lastName: "",
    sex: "",
    height: "",
    weight: "",
    shoeSize: "",
    experience: "",
  });

  const [modalVisibility, setModalVisibility] = useState(false);

  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    key: "selection",
  });

  // * get date in DD/MM/YYYY format
  const transformDate = (date) => {
    const startDay = date.getDate();
    const startMonth = date.getMonth() + 1;
    const startYear = date.getFullYear();
    return startDay + "/" + startMonth + "/" + startYear;
  };

  // * custom configuration for the Date
  const oneDay = 24 * 60 * 60 * 1000;
  const startDate = dateRange.startDate;
  const endDate = dateRange.endDate;
  const startDateShort = transformDate(dateRange.startDate);
  const endDateShort = transformDate(dateRange.endDate);
  const days = Math.round(Math.abs((endDate - startDate) / oneDay)) + 1;

  // * toggle visible OR hidden Modal depeding on the state
  const toggleModal = () => {
    setModalVisibility(!modalVisibility);

    if (modalVisibility) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setModalInputs({ ...modalInputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    toggleModal();

    // * pass state into item
    const orderItem = {
      name: name,
      price: price,
      id: uuid(),
      productType: productType,
      ...modalInputs,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      startDateShort: startDateShort,
      endDateShort: endDateShort,
      days: Math.round(Math.abs((startDate - endDate) / oneDay)) + 1,
    };

    addItem(orderItem);

    setModalInputs({
      firstName: "",
      lastName: "",
      sex: "",
      height: "",
      weight: "",
      shoeSize: "",
      experience: "",
    });
  };

  // * function which updates the state for the "react-select" <Select>
  const onChangeInput = (selected, props) => {
    switch (props.name) {
      case "height":
        setModalInputs({ ...modalInputs, height: selected.value });
        break;
      case "weight":
        setModalInputs({ ...modalInputs, weight: selected.value });
        break;
      case "shoeSize":
        setModalInputs({ ...modalInputs, shoeSize: selected.value });
        break;
      case "experience":
        setModalInputs({ ...modalInputs, experience: selected.value });
        break;
      case "sex":
        setModalInputs({ ...modalInputs, sex: selected.value });
        break;
      default:
        break;
    }
  };

  // * set the state regarding the selected dates by the user
  const handleRangeChange = (newRangeSelection) => {
    const newRange = newRangeSelection.selection;

    setDateRange({ ...newRange });
  };

  const { firstName, lastName } = modalInputs;

  return (
    <>
      <CustomButton addToCart onClick={toggleModal}>
        ALEGE
      </CustomButton>

      {/* render Modal depending on the state */}
      {modalVisibility && (
        <div className="modal">
          <div className="modal__overlay"></div>
          <div className="modal__content">
            <h2>{item.name}</h2>

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
                      value={firstName}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      className="modal__rental-info--input"
                      name="lastName"
                      type="text"
                      label="Prenume"
                      value={lastName}
                      onChange={handleChange}
                      required
                    />

                    <RentalModalSelectTypes
                      productType={productType}
                      onChangeInput={onChangeInput.bind(this)}
                    />
                  </div>

                  <RentalModalInfo
                    startDate={startDateShort}
                    endDate={endDateShort}
                    days={days}
                  />

                  <CustomButton addToCart type="submit">
                    ADAUGA IN COS
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

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(RentalModal);
