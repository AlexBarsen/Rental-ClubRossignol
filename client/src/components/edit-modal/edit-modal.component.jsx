import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { editItem } from "../../redux/cart/cart.actions";

import EditModalSelectTypes from "../edit-modal-selectTypes.component.jsx/edit-modal-selectTypes.component";

import RentalModalInfo from "../rental-modal-info/rental-modal-info.component";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // * main css file
import "react-date-range/dist/theme/default.css"; // * theme css file

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

const EditModal = ({ cartItem, editItem }) => {
  const [item, setItem] = useState(cartItem);

  useEffect(() => {
    setItem(cartItem);
  }, [cartItem]);

  const [modalVisibility, setModalVisibility] = useState(false);

  const initialStartDate = new Date(cartItem.startDate);
  const initialEndDate = new Date(cartItem.endDate);

  const [dateRange, setDateRange] = useState({
    startDate: initialStartDate,
    endDate: initialEndDate,
    key: "selection",
  });

  // * get date in DD/MM/YYYY format
  const transformDate = (date) => {
    const startDay = new Date(date).getDate();
    const startMonth = new Date(date).getMonth() + 1;
    const startYear = new Date(date).getFullYear();
    return startDay + "/" + startMonth + "/" + startYear;
  };

  const oneDay = 24 * 60 * 60 * 1000;
  const days = Math.round(
    Math.abs((dateRange.startDate - dateRange.endDate) / oneDay) + 1
  );
  const newStartDate = dateRange.startDate;
  const newEndDate = dateRange.endDate;
  const newStartDateShort = transformDate(newStartDate);
  const newEndDateShort = transformDate(newEndDate);

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
        setItem({ ...item, height: selected.value });
        break;
      case "weight":
        setItem({ ...item, weight: selected.value });
        break;
      case "shoeSize":
        setItem({ ...item, shoeSize: selected.value });
        break;
      case "experience":
        setItem({ ...item, experience: selected.value });
        break;
      case "sex":
        setItem({ ...item, sex: selected.value });
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setItem({ ...item, [name]: value });
  };

  // * set the state regarding the selected dates by the user
  const handleRangeChange = (newRangeSelection) => {
    const newRange = newRangeSelection.selection;

    setDateRange({ ...newRange });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    toggleModal();

    // * pass state into item
    const editedItem = {
      ...item,
      startDate: newStartDate,
      endDate: newEndDate,
      startDateShort: newStartDateShort,
      endDateShort: newEndDateShort,
      days: days,
    };

    console.log(editedItem);

    editItem(editedItem);

    setItem({
      ...editedItem,
    });
  };

  const defaultValues = {
    height: cartItem.height,
    experience: cartItem.experience,
    sex: cartItem.sex,
    shoeSize: cartItem.shoeSize,
    weight: cartItem.weight,
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
                      value={item.firstName}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      className="modal__rental-info--input"
                      name="lastName"
                      type="text"
                      label="Prenume"
                      value={item.lastName}
                      onChange={handleChange}
                      required
                    />

                    <EditModalSelectTypes
                      defaultValues={defaultValues}
                      productType={cartItem.productType}
                      onChangeInput={onChangeInput.bind(this)}
                    />
                  </div>

                  <RentalModalInfo
                    startDate={newStartDateShort}
                    endDate={newEndDateShort}
                    days={days}
                  />

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
