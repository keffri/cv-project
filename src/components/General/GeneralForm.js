// import React, { Component } from "react";
import React from "react";

const GeneralForm = (props) => {
  return (
    <form className="generalForm">
      <label className="generalForm__label general--bold">
        First Name:
        <input
          className="generalForm__input"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={props.handleChange}
          value={props.data.firstName}
        />
      </label>
      <label className="generalForm__label general--bold">
        Last Name:
        <input
          className="generalForm__input"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={props.handleChange}
          value={props.data.lastName}
        />
      </label>
      <label className="generalForm__label general--bold">
        Email:
        <input
          className="generalForm__input"
          type="email"
          placeholder="example@email.com"
          name="email"
          onChange={props.handleChange}
          value={props.data.email}
        />
      </label>
      <label className="generalForm__label general--bold">
        Phone:
        <input
          className="generalForm__input"
          type="tel"
          placeholder="123-456-7890"
          name="phone"
          onChange={props.handleChange}
          value={props.data.phone}
        />
      </label>
      <button
        className="generalForm__button"
        type="submit"
        onClick={props.handleSubmit}
      >
        Save
      </button>
    </form>
  );
};

export default GeneralForm;
