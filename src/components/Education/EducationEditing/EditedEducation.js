import React, { Component } from "react";

class EditedEducation extends Component {
  render() {
    return (
      <div className="educationEdited">
        <p className="educationEdited__p">
          <span className="education--bold">School:</span>{" "}
          {this.props.data.school}
        </p>
        <p className="educationEdited__p">
          <span className="education--bold">Major:</span>{" "}
          {this.props.data.major}
        </p>
        <p className="educationEdited__p">
          <span className="education--bold">Start:</span>{" "}
          {this.props.data.start}
        </p>
        <p className="educationEdited__p">
          <span className="education--bold">End:</span> {this.props.data.end}
        </p>
        <button
          className="educationEdited__button"
          onClick={() => this.props.edit(this.props.id)}
        >
          Edit
        </button>
        <button
          className="educationEdited__button"
          onClick={() => this.props.delete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default EditedEducation;
