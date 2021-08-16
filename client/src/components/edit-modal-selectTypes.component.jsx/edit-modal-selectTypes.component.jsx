import React from "react";

import Select from "react-select";

import {
  sexOptions,
  shoeSizeOptions,
  heightOptions,
  weightOptions,
  experienceOptions,
} from "../rental-modal/options";

const EditModalSelectTypes = ({
  productType,
  onChangeInput,
  defaultValues,
}) => {
  // * <Select> custom styles
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

  switch (productType) {
    case "boots":
      return (
        <>
          <Select
            classname="modal__rental-info--option"
            placeholder="Marime Picior"
            name="shoeSize"
            defaultValue={
              defaultValues.shoeSize
                ? {
                    value: defaultValues.shoeSize,
                    label: defaultValues.shoeSize,
                  }
                : null
            }
            onChange={onChangeInput}
            options={shoeSizeOptions}
            styles={customStyles}
            required
          />

          <Select
            classname="modal__rental-info--option"
            placeholder="Sex"
            name="sex"
            defaultValue={
              defaultValues.sex
                ? {
                    value: defaultValues.sex,
                    label: defaultValues.sex,
                  }
                : null
            }
            onChange={onChangeInput}
            options={sexOptions}
            styles={customStyles}
            required
          />
        </>
      );
    case "skiSnow":
      return (
        <>
          <Select
            classname="modal__rental-info--option"
            placeholder="Inaltime (CM)"
            name="height"
            defaultValue={
              defaultValues.height
                ? {
                    value: defaultValues.height,
                    label: defaultValues.height,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={heightOptions}
            required
          />

          <Select
            classname="modal__rental-info--option"
            placeholder="Greutate (KG)"
            name="weight"
            defaultValue={
              defaultValues.weight
                ? {
                    value: defaultValues.weight,
                    label: defaultValues.weight,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            required
          />

          <Select
            classname="modal__rental-info--option"
            placeholder="Nivel Experienta"
            name="experience"
            defaultValue={
              defaultValues.experience
                ? {
                    value: defaultValues.experience,
                    label: defaultValues.experience,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            required
          />

          <Select
            classname="modal__rental-info--option"
            placeholder="Sex"
            name="sex"
            defaultValue={
              defaultValues.sex
                ? {
                    value: defaultValues.sex,
                    label: defaultValues.sex,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={sexOptions}
            required
          />
        </>
      );
    case "equipment":
      return (
        <>
          <Select
            classname="modal__rental-info--option"
            placeholder="Inaltime (CM)"
            name="height"
            defaultValue={
              defaultValues.height
                ? {
                    value: defaultValues.height,
                    label: defaultValues.height,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={heightOptions}
            required
          />

          <Select
            classname="modal__rental-info--option"
            placeholder="Greutate (KG)"
            name="weight"
            defaultValue={
              defaultValues.weight
                ? {
                    value: defaultValues.weight,
                    label: defaultValues.weight,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={weightOptions}
            required
          />

          <Select
            classname="modal__rental-info--option"
            placeholder="Marime Picior"
            name="shoeSize"
            defaultValue={
              defaultValues.shoeSize
                ? {
                    value: defaultValues.shoeSize,
                    label: defaultValues.shoeSize,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={shoeSizeOptions}
            required
          />

          <Select
            classname="modal__rental-info--option"
            placeholder="Nivel Experienta"
            name="experience"
            defaultValue={
              defaultValues.experience
                ? {
                    value: defaultValues.experience,
                    label: defaultValues.experience,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={experienceOptions}
            required
          />

          <Select
            classname="modal__rental-info--option"
            placeholder="Sex"
            name="sex"
            defaultValue={
              defaultValues.sex
                ? {
                    value: defaultValues.sex,
                    label: defaultValues.sex,
                  }
                : null
            }
            styles={customStyles}
            onChange={onChangeInput}
            options={sexOptions}
            required
          />
        </>
      );
    default:
      break;
  }
};

export default EditModalSelectTypes;
