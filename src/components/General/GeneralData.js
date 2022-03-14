import React, { Component } from "react";

class GeneralData extends Component {
  render() {
    return (
      <div className="generalData">
        <p className="generalData__p">
          <span className="general--bold">First Name:</span>{" "}
          {this.props.data.firstName}
        </p>
        <p className="generalData__p">
          <span className="general--bold">Last Name:</span>{" "}
          {this.props.data.lastName}
        </p>
        <p className="generalData__p">
          <span className="general--bold">Email:</span> {this.props.data.email}
        </p>
        <p className="generalData__p">
          <span className="general--bold">Phone:</span> {this.props.data.phone}
        </p>
        <button
          className="generalData__button"
          onClick={this.props.handleSubmit}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default GeneralData;
