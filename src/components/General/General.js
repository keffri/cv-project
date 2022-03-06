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
    this.setState((prevState) => ({ editing: !prevState.editing }));
  }

  render() {
    const { firstName, lastName, phone, email } = this.state;

    return (
      <div className="general">
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
