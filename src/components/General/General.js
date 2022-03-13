import GeneralForm from "./GeneralForm";
import GeneralData from "./GeneralData";
import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.phone ||
      !this.state.email
    ) {
      alert("Please complete the entire form.");
      return;
    }
    this.setState((prevState) => ({ editing: !prevState.editing }));
  }

  render() {
    const { firstName, lastName, phone, email } = this.state;

    return (
      <div className="general">
        <h1 className="general__h1">General Information</h1>
        {this.state.editing ? (
          <GeneralForm
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            email={email}
            data={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <GeneralData data={this.state} handleSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

export default General;
