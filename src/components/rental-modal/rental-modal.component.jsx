import React from "react";
import BaseSelect from "react-select";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import "./rental-modal.styles.scss";

import { addItem, editItem } from "../../redux/cart/cart.actions";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import FixRequiredSelect from "./FixRequiredSelect";
import {
  sexOptions,
  shoeSizeOptions,
  heightOptions,
  weightOptions,
  experienceOptions,
} from "./options";

const Select = (props) => (
  <FixRequiredSelect {...props} SelectComponent={BaseSelect} />
);

class RentalModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: this.props.item.days ? this.props.item.days : "",
      name: this.props.item.name ? this.props.item.name : "",
      icon: this.props.item.icon ? this.props.item.icon : "",
      sex: this.props.item.sex ? this.props.item.sex : "",
      firstName: this.props.item.firstName ? this.props.item.firstName : "",
      lastName: this.props.item.lastName ? this.props.item.lastName : "",
      height: this.props.item.height ? this.props.item.height : "",
      productID: this.props.item.productID ? this.props.item.productID : "",
      weight: this.props.item.weight ? this.props.item.weight : "",
      quantity: this.props.item.quantity ? this.props.item.quantity : "",
      price: this.props.item.price ? this.props.item.price : "",
      shoeSize: this.props.item.shoeSize ? this.props.item.shoeSize : "",
      productType: this.props.item.productType
        ? this.props.item.productType
        : "",
      experience: this.props.item.experience ? this.props.item.experience : "",
      id: this.props.item.id ? this.props.item.id : "",
      visibleModal: false,
      dateRangePicker: {
        selection: {
          startDate: this.props.item.startDate
            ? new Date(this.props.item.startDate)
            : new Date(new Date().setDate(new Date().getDate() + 1)),
          endDate: this.props.item.endDate
            ? new Date(this.props.item.endDate)
            : new Date(new Date().setDate(new Date().getDate() + 1)),
          key: "selection",
        },
      },
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({ visibleModal: !prevState.visibleModal }));

    if (this.state.visibleModal) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }

    console.log(this.props);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.toggleModal();

    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = this.state.dateRangePicker.selection.startDate;
    const endDate = this.state.dateRangePicker.selection.endDate;
    const startDateShort = this.getDate(startDate);
    const endDateShort = this.getDate(endDate);

    const item = {
      name: this.state.name,
      price: this.state.price,
      icon: this.state.icon,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      height: this.state.height,
      weight: this.state.weight,
      shoeSize: this.state.shoeSize,
      experience: this.state.experience,
      sex: this.state.sex,
      productType: this.state.productType,
      productID: this.state.productID,
      quantity: 1,
      startDate: startDate,
      endDate: endDate,
      startDateShort: startDateShort,
      endDateShort: endDateShort,
      days: Math.round(Math.abs((startDate - endDate) / oneDay)) + 1,
    };

    switch (this.props.type) {
      case "add":
        item.id = uuid();

        this.props.addItem(item);

        this.setState({
          firstName: "",
          lastName: "",
        });

        break;

      case "edit":
        item.id = this.state.id;

        this.props.editItem(item);

        break;

      default:
        break;
    }
  };

  onChangeInput(selected, props) {
    switch (props.name) {
      case "height":
        this.setState({ height: selected.value });
        break;
      case "weight":
        this.setState({ weight: selected.value });
        break;
      case "shoeSize":
        this.setState({ shoeSize: selected.value });
        break;
      case "experience":
        this.setState({ experience: selected.value });
        break;
      case "sex":
        this.setState({ sex: selected.value });
        break;
      default:
        break;
    }
  }

  handleRangeChange = (newRange) => {
    this.setState({
      dateRangePicker: {
        ...this.state.dateRangePicker,
        ...newRange,
      },
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  getDate = (date) => {
    const startDay = date.getDate();
    const startMonth = date.getMonth() + 1;
    const startYear = date.getFullYear();
    return startDay + "/" + startMonth + "/" + startYear;
  };

  render() {
    const startDate = this.state.dateRangePicker.selection.startDate;
    const endDate = this.state.dateRangePicker.selection.endDate;
    const oneDay = 24 * 60 * 60 * 1000;

    const days = Math.round(Math.abs((endDate - startDate) / oneDay)) + 1;

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        fontSize: "1.4rem",
      }),
      menu: (provided, state) => ({
        ...provided,
        fontSize: "1.4rem",
        textAlign: "center",
      }),
    };

    return (
      <>
        {this.props.type === "add" ? (
          <CustomButton addToCart onClick={this.toggleModal}>
            ALEGE
          </CustomButton>
        ) : null}

        {this.props.type === "edit" ? (
          <CustomButton editCartItem onClick={this.toggleModal} />
        ) : null}

        {this.state.visibleModal && (
          <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__content">
              <h2>{this.props.item.name}</h2>

              <form
                style={{ position: "relative" }}
                onSubmit={this.handleSubmit}
              >
                <div className="modal__wrapper-all">
                  <DateRange
                    className="modal__date-range"
                    editableDateInputs={false}
                    onInit={this.handleRangeChange}
                    ranges={[this.state.dateRangePicker.selection]}
                    onChange={this.handleRangeChange}
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
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        required
                      />

                      <FormInput
                        className="modal__rental-info--input"
                        name="lastName"
                        type="text"
                        label="Prenume"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        required
                      />

                      {this.props.item.productType === "skiSnow" ? (
                        <React.Fragment>
                          <Select
                            classname="modal__rental-info--option"
                            name="height"
                            styles={customStyles}
                            value={this.state.height}
                            onChange={this.onChangeInput.bind(this)}
                            defaultInputValue={this.state.height}
                            placeholder="Inaltime (CM)"
                            options={heightOptions}
                            required
                          />

                          <Select
                            classname="modal__rental-info--option"
                            name="weight"
                            styles={customStyles}
                            onChange={this.onChangeInput.bind(this)}
                            placeholder="Greutate (KG)"
                            options={weightOptions}
                            required
                          />

                          <Select
                            classname="modal__rental-info--option"
                            name="experience"
                            styles={customStyles}
                            onChange={this.onChangeInput.bind(this)}
                            placeholder="Nivel Experienta"
                            options={experienceOptions}
                            required
                          />

                          <Select
                            classname="modal__rental-info--option"
                            name="sex"
                            styles={customStyles}
                            placeholder="Sex"
                            onChange={this.onChangeInput.bind(this)}
                            options={sexOptions}
                            required
                          />
                        </React.Fragment>
                      ) : null}

                      {this.props.item.productType === "boots" ? (
                        <React.Fragment>
                          <Select
                            classname="modal__rental-info--option"
                            name="shoeSize"
                            styles={customStyles}
                            onChange={this.onChangeInput.bind(this)}
                            placeholder="Marime Picior"
                            options={shoeSizeOptions}
                            required
                          />

                          <Select
                            classname="modal__rental-info--option"
                            name="sex"
                            styles={customStyles}
                            onChange={this.onChangeInput.bind(this)}
                            placeholder="Sex"
                            options={sexOptions}
                            required
                          />
                        </React.Fragment>
                      ) : null}

                      {this.props.item.productType === "equipment" ? (
                        <React.Fragment>
                          <Select
                            classname="modal__rental-info--option"
                            name="height"
                            styles={customStyles}
                            onChange={this.onChangeInput.bind(this)}
                            placeholder="Inaltime (CM)"
                            options={heightOptions}
                            required
                          />

                          <Select
                            classname="modal__rental-info--option"
                            name="weight"
                            styles={customStyles}
                            onChange={this.onChangeInput.bind(this)}
                            placeholder="Greutate (KG)"
                            options={weightOptions}
                            required
                          />

                          <Select
                            classname="modal__rental-info--option"
                            name="shoeSize"
                            styles={customStyles}
                            onChange={this.onChangeInput.bind(this)}
                            placeholder="Marime Picior"
                            options={shoeSizeOptions}
                            required
                          />

                          <Select
                            classname="modal__rental-info--option"
                            name="experience"
                            styles={customStyles}
                            onChange={this.onChangeInput.bind(this)}
                            placeholder="Nivel Experienta"
                            options={experienceOptions}
                            required
                          />

                          <Select
                            classname="modal__rental-info--option"
                            name="sex"
                            styles={customStyles}
                            onChange={this.onChangeInput.bind(this)}
                            placeholder="Sex"
                            options={sexOptions}
                            required
                          />
                        </React.Fragment>
                      ) : null}
                    </div>

                    <span className="modal__message">
                      Rezervarile se pot face doar pentru ziua ce urmeaza,
                      respectiv din {this.getDate(startDate)}. Va rugam sa fiti
                      atenti la completarea datelor!
                    </span>
                    <span className="modal__date--description">
                      Din data de:{" "}
                      <span className="modal__date--content">
                        {this.getDate(startDate)}
                      </span>
                    </span>
                    <span className="modal__date--description">
                      Pana in data de:{" "}
                      <span className="modal__date--content">
                        {this.getDate(endDate)}
                      </span>
                    </span>
                    <span className="modal__date--description">
                      Durata inchiriere:{" "}
                      <span className="modal__date--content">
                        {days} {days === 1 ? "zi" : "zile"}
                      </span>
                    </span>
                    <CustomButton addToCart type="submit">
                      ADAUGA IN COS
                    </CustomButton>
                  </div>
                </div>
              </form>
              <CustomButton closeModal onClick={this.toggleModal}>
                ❌
              </CustomButton>
            </div>
          </div>
        )}
      </>
    );
  }
}

// dispatch addItem with the item we click on
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  editItem: (item) => dispatch(editItem(item)),
});

export default connect(null, mapDispatchToProps)(RentalModal);
