import React, { Component } from "react";

class EditedEducation extends Component {
  render() {
    return (
      <div>
        <p>School: {this.props.data.school}</p>
        <p>Major: {this.props.data.major}</p>
        <p>Start: {this.props.data.start}</p>
        <p>End: {this.props.data.end}</p>
        <button onClick={() => this.props.edit(this.props.id)}>Edit</button>
        <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
      </div>
    );
  }
}

export default EditedEducation;
