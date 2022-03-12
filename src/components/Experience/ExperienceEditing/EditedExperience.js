import React, { Component } from "react";

class EditedExperience extends Component {
  render() {
    return (
      <div>
        <p>Company: {this.props.data.company}</p>
        <p>Position: {this.props.data.position}</p>
        <p>Start: {this.props.data.start}</p>
        <p>End: {this.props.data.end}</p>
        <p>Duties: {this.props.data.duties}</p>
        <button onClick={() => this.props.edit(this.props.id)}>Edit</button>
      </div>
    );
  }
}

export default EditedExperience;
