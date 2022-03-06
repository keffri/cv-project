import React, { Component } from "react";

class GeneralData extends Component {
  render() {
    return (
      <div className="generalData">
        <p className="generaData__text">{this.props.data.firstName}</p>
        <p className="generaData__text">{this.props.data.lastName}</p>
        <p className="generaData__text">{this.props.data.email}</p>
        <p className="generaData__text">{this.props.data.phone}</p>
        <button onClick={this.props.handleSubmit}>Edit</button>
      </div>
    );
  }
}

export default GeneralData;
