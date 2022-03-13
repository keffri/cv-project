import React, { Component } from "react";

class EditedExperience extends Component {
  render() {
    return (
      <div className="experienceEdited">
        <p className="experienceEdited__p">
          Company: {this.props.data.company}
        </p>
        <p className="experienceEdited__p">
          Position: {this.props.data.position}
        </p>
        <p className="experienceEdited__p">Start: {this.props.data.start}</p>
        <p className="experienceEdited__p">End: {this.props.data.end}</p>
        <p className="experienceEdited__p">Duties: {this.props.data.duties}</p>
        <button
          className="experienceEdited__button"
          onClick={() => this.props.edit(this.props.id)}
        >
          Edit
        </button>
        <button
          className="experienceEdited__button"
          onClick={() => this.props.delete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default EditedExperience;
