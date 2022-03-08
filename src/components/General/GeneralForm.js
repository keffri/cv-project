import React, { Component } from "react";

class GeneralForm extends Component {
  render() {
    return (
      <form className="general__form">
        <label>
          First Name:
          <input
            required
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={this.props.handleChange}
            value={this.props.data.firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            required
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={this.props.handleChange}
            value={this.props.data.lastName}
          />
        </label>
        <label>
          Email:
          <input
            required
            type="email"
            placeholder="example@email.com"
            name="email"
            onChange={this.props.handleChange}
            value={this.props.data.email}
          />
        </label>
        <label>
          Phone:
          <input
            required
            type="tel"
            placeholder="123-456-7890"
            name="phone"
            onChange={this.props.handleChange}
            value={this.props.data.phone}
          />
        </label>
        <button type="submit" onClick={this.props.handleSubmit}>
          Save
        </button>
      </form>
    );
  }
}

export default GeneralForm;
