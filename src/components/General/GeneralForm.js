import React, { Component } from "react";

class GeneralForm extends Component {
  render() {
    return (
      <form className="generalForm">
        <label className="generalForm__label">
          First Name:
          <input
            className="generalForm__input"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={this.props.handleChange}
            value={this.props.data.firstName}
          />
        </label>
        <label className="generalForm__label">
          Last Name:
          <input
            className="generalForm__input"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={this.props.handleChange}
            value={this.props.data.lastName}
          />
        </label>
        <label className="generalForm__label">
          Email:
          <input
            className="generalForm__input"
            type="email"
            placeholder="example@email.com"
            name="email"
            onChange={this.props.handleChange}
            value={this.props.data.email}
          />
        </label>
        <label className="generalForm__label">
          Phone:
          <input
            className="generalForm__input"
            type="tel"
            placeholder="123-456-7890"
            name="phone"
            onChange={this.props.handleChange}
            value={this.props.data.phone}
          />
        </label>
        <button
          className="generalForm__button"
          type="submit"
          onClick={this.props.handleSubmit}
        >
          Save
        </button>
      </form>
    );
  }
}

export default GeneralForm;
